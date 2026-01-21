const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const { connectDb } = require("./db");
const enquiriesRouter = require("./routes/enquiries");

dotenv.config();

const app = express();

// Security & trust
app.disable("x-powered-by");
app.set("trust proxy", 1);

// CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(",").map((s) => s.trim())
      : ["http://localhost:5173"],
  })
);

// Middlewares
app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(morgan("dev"));

// Rate limiting
app.use(
  "/api",
  rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 200,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);

// ------------------- ROUTES -------------------

// Health check
app.get("/api/health", async (_req, res) => {
  try {
    await connectDb(process.env.MONGODB_URI);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

// Enquiries API
app.use("/api/enquiries", async (req, res, next) => {
  try {
    await connectDb(process.env.MONGODB_URI);
    return enquiriesRouter(req, res, next);
  } catch (err) {
    next(err);
  }
});

// ---------------- ERROR HANDLER ----------------
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
});

module.exports = app;

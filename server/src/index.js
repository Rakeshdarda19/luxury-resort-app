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

app.disable("x-powered-by");
app.set("trust proxy", 1);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()) || ["http://localhost:5173"],
    credentials: false,
  })
);
app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(morgan("dev"));

app.use(
  "/api",
  rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 200,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  })
);

app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/api/enquiries", enquiriesRouter);

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  // Avoid leaking details
  console.error(err);
  res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
});

const PORT = Number(process.env.PORT || 8080);
connectDb(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  })
  .catch((e) => {
    console.error("Failed to start server:", e);
    process.exit(1);
  });


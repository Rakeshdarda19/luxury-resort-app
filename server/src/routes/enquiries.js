const express = require("express");
const { z } = require("zod");
const Enquiry = require("../models/Enquiry");

const router = express.Router();

const enquirySchema = z.object({
  firstName: z.string().min(2).max(80),
  lastName: z.string().min(2).max(80),
  email: z.string().email().max(254),
  phone: z.string().min(7).max(20),
  preferredDate: z.string().optional().default(""),
  guests: z
    .string()
    .optional()
    .transform((v) => (v && v.trim() !== "" ? Number(v) : null))
    .refine((v) => v === null || (Number.isFinite(v) && v >= 0 && v <= 100000), "Invalid guests"),
  message: z.string().max(1000).optional().default(""),
  source: z.string().max(120).optional().default(""),
});

router.post("/", async (req, res, next) => {
  try {
    const parsed = enquirySchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: "VALIDATION_ERROR",
        details: parsed.error.flatten(),
      });
    }

    const payload = parsed.data;
    const doc = await Enquiry.create({
      ...payload,
      preferredDate: payload.preferredDate || "",
      guests: payload.guests ?? null,
      ip: req.ip || "",
      userAgent: req.headers["user-agent"] || "",
    });

    return res.status(201).json({ id: doc._id });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;


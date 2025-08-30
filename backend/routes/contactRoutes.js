import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save contact form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = new Contact({ name, email, phone, message });
    await contact.save();
    res.status(201).json({ success: true, message: "Contact saved successfully" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;

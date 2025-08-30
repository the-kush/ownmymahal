import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
};

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
});

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();

      const { name, email, phone, message } = req.body;
      const contact = new Contact({ name, email, phone, message });
      await contact.save();

      res.status(201).json({ success: true, message: "Message saved!" });
    } catch (err) {
      res.status(500).json({ success: false, error: err.message });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

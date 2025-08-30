import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await axios.post("http://localhost:5000/api/contact", form);
      setStatus(res.data.message || "Thanks! We'll reach out.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Try later.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">Reach out for private tours, investment queries, or curated ownership consultations. Or WhatsApp us at <a href="https://wa.me/919669220185" className="underline">9669220185</a>.</p>

          <div className="bg-white p-6 rounded-2xl shadow">
            <form onSubmit={submit} className="space-y-4">
              <input required name="name" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-3 border rounded" />
              <input required name="email" type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-3 border rounded" />
              <input required name="phone" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full p-3 border rounded" />
              <textarea name="message" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full p-3 border rounded" rows="4"></textarea>

              <div className="flex items-center gap-4">
                <button type="submit" className="bg-gold-500 text-white px-5 py-2 rounded">Send Inquiry</button>
                <div className="text-sm text-gray-600">{status}</div>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div className="h-80 rounded-2xl overflow-hidden">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!..." className="w-full h-full border-0"></iframe>
          </div>
          <div className="mt-6 text-gray-600">
            <div><strong>Phone:</strong> <a href="tel:9669220185">9669220185</a></div>
            <div className="mt-2"><strong>Email:</strong> <a href="mailto:info@ownmymahal.com">info@ownmymahal.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}


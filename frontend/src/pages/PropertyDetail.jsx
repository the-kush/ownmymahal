import { useParams } from "react-router-dom";
import properties from "../data/properties";
import { useState } from "react";
import axios from "axios";

export default function PropertyDetail() {
  const { id } = useParams();
  const prop = properties.find(p => p.id === id);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  if (!prop) return <div className="container mx-auto px-6 py-20">Property not found.</div>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: `Inquiry for ${prop.title}: ${form.message}`
      });
      setStatus("Thank you! We'll contact you shortly.");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
            <img src={prop.images[0]} alt={prop.title} className="w-full h-96 object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {prop.images.map((img, idx) => (
              <img key={idx} src={img} className="w-full h-28 object-cover rounded-lg" alt={`${prop.title}-${idx}`} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{prop.title}</h1>
          <div className="text-gray-600 mt-1">{prop.location}</div>
          <div className="mt-4 text-gold-500 font-semibold text-xl">₹{(prop.price/10000000).toFixed(2)} Cr</div>

          <div className="mt-6">
            <h3 className="font-semibold">Overview</h3>
            <p className="text-gray-600 mt-2">{prop.description}</p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">Amenities</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-600">
              {prop.amenities.map(a => <li key={a}>{a}</li>)}
            </ul>
          </div>

          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold mb-2">Enquire about this property</h4>
            {status && <div className="text-green-600 mb-2">{status}</div>}
            <form onSubmit={handleSubmit} className="space-y-3">
              <input placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-3 border rounded" />
              <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-3 border rounded" />
              <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full p-3 border rounded" />
              <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full p-3 border rounded" rows="3" />
              <button type="submit" className="bg-gold-500 text-white px-4 py-2 rounded">Send Enquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

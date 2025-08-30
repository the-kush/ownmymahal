import { useState } from "react";
import propertiesData from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filtered = propertiesData.filter(p => {
    if (status && p.status !== status) return false;
    if (query && ![p.title, p.location, p.description].join(" ").toLowerCase().includes(query.toLowerCase())) return false;
    if (minPrice && p.price < Number(minPrice)) return false;
    if (maxPrice && p.price > Number(maxPrice)) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Our Properties</h1>
        <p className="text-gray-600 mt-2">Handpicked estates and villas for exclusive ownership.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by title or location" className="flex-1 p-3 rounded-lg border" />
        <select value={status} onChange={e=>setStatus(e.target.value)} className="p-3 rounded-lg border">
          <option value="">All Status</option>
          <option value="ready">Ready</option>
          <option value="upcoming">Upcoming</option>
          <option value="sold">Sold</option>
        </select>
        <input value={minPrice} onChange={e=>setMinPrice(e.target.value)} placeholder="Min price (₹)" className="p-3 rounded-lg border w-40" />
        <input value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} placeholder="Max price (₹)" className="p-3 rounded-lg border w-40" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(p => <PropertyCard key={p.id} prop={p} />)}
        {filtered.length === 0 && <div className="text-gray-500">No properties found for your filters.</div>}
      </div>
    </div>
  );
}


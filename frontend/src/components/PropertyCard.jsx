import { Link } from "react-router-dom";

export default function PropertyCard({ prop }) {
  return (
    <div className="card">
      <Link to={`/properties/${prop.id}`}>
        <div className="h-56 md:h-48 w-full bg-gray-200 overflow-hidden">
          <img src={prop.images[0]} alt={prop.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{prop.title}</h3>
            <div className="text-sm text-gray-500">{prop.location}</div>
          </div>
          <div className="text-gold-500 font-semibold">₹{(prop.price/10000000).toFixed(2)} Cr</div>
        </div>
        <div className="mt-3 text-sm text-gray-600 flex gap-4">
          <div>{prop.bedrooms} bd</div>
          <div>{prop.bathrooms} ba</div>
          <div>{prop.areaSqFt} sqft</div>
        </div>
      </div>
    </div>
  );
}


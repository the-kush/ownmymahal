import { Link } from "react-router-dom";

const posts = [
  { id: "b1", title: "Heritage Homes: Restoring Legacy", excerpt: "Restoring a heritage home demands craft and care. We talk to architects and artisans.", img: "/images/blog1.jpg" },
  { id: "b2", title: "Luxury Coastal Estates", excerpt: "Coastal estates blend private living with stunning sea views — design tips and insights.", img: "/images/blog2.jpg" }
];

export default function Blog() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-6">Blog & Discovery</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p => (
          <div key={p.id} className="card overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-xl">{p.title}</h3>
              <p className="text-gray-600 mt-2">{p.excerpt}</p>
              <Link to="#" className="mt-4 inline-block text-gold-500">Read more →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

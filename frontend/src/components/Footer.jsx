import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-12">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-display">OwnMyMahal</div>
          <p className="text-sm text-gray-200 mt-2">Luxury Living. Timeless Ownership.</p>
          <p className="text-sm text-gray-300 mt-4">Phone: <a href="tel:9669220185" className="underline">9669220185</a></p>
        </div>

        <div>
          <div className="font-semibold mb-2">Explore</div>
          <ul className="text-sm text-gray-200 space-y-2">
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/experiences">Experiences</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Subscribe</div>
          <p className="text-sm text-gray-200">Get market insights & exclusive launch news.</p>
          <form className="mt-3 flex">
            <input placeholder="Email address" className="px-3 py-2 rounded-l-lg text-white flex-1" />
            <button className="bg-gold-500 px-4 rounded-r-lg">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="bg-black/30 text-center py-4 text-sm text-gray-300">
        © {new Date().getFullYear()} OwnMyMahal — All rights reserved.
      </div>
    </footer>
  );
}

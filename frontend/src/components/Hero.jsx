export default function Hero({ title = "Luxury Living. Timeless Ownership.", subtitle = "Discover exclusive villas & estates across India.", cta = "/properties" }) {
  return (
    <section className="relative h-[70vh] flex items-center bg-black">
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center filter brightness-75"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-display text-5xl md:text-6xl leading-tight font-bold">{title}</h1>
          <p className="mt-6 text-lg opacity-90">{subtitle}</p>
          <div className="mt-8 flex gap-4">
            <a href={cta} className="bg-gold-500 text-white px-6 py-3 rounded-full font-medium shadow hover:opacity-95">Explore Villas</a>
            <a href="/contact" className="border border-white text-white px-6 py-3 rounded-full">Book Private Tour</a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="bg-white/90 px-6 py-3 rounded-3xl shadow-md flex items-center gap-6">
          <div className="text-sm text-gray-700">Featured</div>
          <div className="font-semibold">Shivani Mahal Villa — Bhopal</div>
          <div className="text-sm text-gray-500">₹12.5 Cr</div>
        </div>
      </div>
    </section>
  );
}


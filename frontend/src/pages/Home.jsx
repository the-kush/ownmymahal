import Hero from "../components/Hero";
import properties from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  const featured = properties.filter(p => p.featured);
  const others = properties.filter(p => !p.featured);

  return (
    <div>
      <Hero />
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Exclusive Villas</h2>
          <a href="/properties" className="text-gold-500 font-medium">Explore all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.concat(others).map(p => <PropertyCard key={p.id} prop={p} />)}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display">Own Your Mahal</h3>
              <p className="mt-4 text-gray-600">An ownership experience crafted for connoisseurs of privacy, heritage and timeless design. Each property in our collection is handpicked and curated to ensure exclusivity and future value.</p>
              <div className="mt-6">
                <a href="/experiences" className="bg-gold-500 text-white px-5 py-3 rounded-full">Discover Experiences</a>
              </div>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden">
              <img src="/images/experience.jpg" alt="Experience" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


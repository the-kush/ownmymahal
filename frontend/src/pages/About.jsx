export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-display text-4xl mb-4">Our Vision & Mission</h1>
        <p className="text-gray-600 mb-8">To redefine luxury living in India by curating timeless estates and villas that merge heritage, exclusivity, and modern comfort, making every ownership feel like royalty.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Curated Heritage</h3>
            <p className="text-sm text-gray-600">Properties that celebrate India’s architectural legacy with modern comforts.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Transparency</h3>
            <p className="text-sm text-gray-600">End-to-end guidance from inquiry to ownership for peace of mind.</p>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold mb-2">Sustainability</h3>
            <p className="text-sm text-gray-600">Future-ready amenities and eco-conscious design choices.</p>
          </div>
        </div>

        <div className="mt-12 text-left">
          <h3 className="text-2xl font-semibold">Brand Story</h3>
          <p className="mt-4 text-gray-600">OwnMyMahal was founded to give discerning buyers access to rare estates and villas that combine privacy, location, and legacy. We partner with local artisans, designers, and builders to create properties that stand the test of time.</p>
        </div>
      </div>
    </div>
  );
}


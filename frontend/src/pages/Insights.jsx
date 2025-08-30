export default function Insights() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">Investment Insights</h1>
      <p className="text-gray-600 mb-8">Curated research and market analysis on India’s luxury real estate.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">Why invest in luxury villas?</h3>
          <p className="mt-2 text-gray-600">Heritage properties and limited-supply estates show strong appreciation in curated markets.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Regional trends</h3>
          <p className="mt-2 text-gray-600">Coastal and heritage-city markets continue to attract NRI interest and premium buyers.</p>
        </div>
      </div>
    </div>
  );
}


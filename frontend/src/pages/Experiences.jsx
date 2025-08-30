export default function Experiences() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-display text-4xl">Exclusive Experiences</h1>
        <p className="mt-4 text-gray-600">OwnMyMahal is about more than a home — it is a lifestyle of privacy, curated events, and legacy.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="card p-6">
          <h3 className="font-semibold">Private Owner Club</h3>
          <p className="mt-2 text-sm text-gray-600">Invite-only events, access to legacy clubs and curated experiences for owners.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Cultural Curation</h3>
          <p className="mt-2 text-sm text-gray-600">Collaborations with artisans to restore heritage elements and bespoke interiors.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Sustainable Living</h3>
          <p className="mt-2 text-sm text-gray-600">Designs that respect nature with solar, rainwater harvesting and native landscaping.</p>
        </div>
      </div>
    </div>
  );
}


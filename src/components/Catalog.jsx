export default function Catalog() {
  const categories = [
    { name: 'Networking', items: 24 },
    { name: 'Audio', items: 18 },
    { name: 'Accessories', items: 32 },
    { name: 'Software', items: 12 },
  ]
  return (
    <section id="catalog" className="relative bg-[#0a0f1a] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Product Catalog</h2>
        <p className="text-gray-400 mt-2 max-w-xl">Browse by category to discover all of our offerings.</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="group bg-white/5 border border-white/10 hover:border-cyan-500/40 rounded-xl p-5">
              <div className="text-white font-medium">{c.name}</div>
              <div className="text-gray-400 text-sm mt-1">{c.items} items</div>
              <div className="mt-6 h-24 rounded-lg bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 border border-cyan-500/20" />
              <button className="mt-4 text-cyan-300 text-sm">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

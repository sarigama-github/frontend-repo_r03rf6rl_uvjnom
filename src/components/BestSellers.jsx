export default function BestSellers() {
  const products = [
    { id: 1, name: 'Quantum Hub', price: '$499', tag: 'Top Pick', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Neon Router', price: '$299', tag: 'Bestseller', img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, name: 'Aero Headset', price: '$199', tag: 'Hot', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200&auto=format&fit=crop' },
  ]
  return (
    <section id="bestsellers" className="relative bg-[#0a0f1a] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(0,161,255,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Best Sellers</h2>
            <p className="text-gray-400 mt-2 max-w-xl">Our most-loved products, trusted by teams worldwide.</p>
          </div>
          <a href="#catalog" className="text-cyan-400 hover:text-cyan-300">View all</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{p.name}</h3>
                  <span className="text-cyan-300 text-sm">{p.tag}</span>
                </div>
                <div className="mt-2 text-gray-300">{p.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

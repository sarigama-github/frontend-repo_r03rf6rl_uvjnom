const team = [
  { name: 'Ava Carter', role: 'CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Liam Nguyen', role: 'CTO', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Maya Patel', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Noah Smith', role: 'VP Engineering', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a72?q=80&w=1200&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="relative bg-[#0a0f1a] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Our Team</h2>
        <p className="text-gray-400 mt-2 max-w-xl">A diverse group of builders with a shared passion for quality.</p>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{m.name}</div>
                <div className="text-gray-400 text-sm">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

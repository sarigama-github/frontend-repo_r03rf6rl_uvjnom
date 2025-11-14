export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0f1a] py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">About Us</h2>
          <p className="mt-4 text-gray-300">
            We are a technology-first company focused on crafting delightful experiences for enterprises. Our team blends strategy, design, and engineering to deliver measurable impact.
          </p>
          <ul className="mt-6 grid gap-3 text-gray-300">
            <li>• Enterprise-grade reliability</li>
            <li>• Human-centered design</li>
            <li>• Long-term partnerships</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-40 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-600/30 border border-cyan-500/20" />
          <div className="h-40 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-600/30 border border-blue-500/20" />
          <div className="col-span-2 h-40 rounded-lg bg-gradient-to-br from-sky-500/30 to-cyan-600/30 border border-sky-500/20" />
        </div>
      </div>
    </section>
  )
}

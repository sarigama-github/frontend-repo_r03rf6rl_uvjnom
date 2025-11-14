import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-[#0a0f1a] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-40 pb-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Futuristic Solutions for Modern Enterprises
          </h1>
          <p className="mt-6 text-gray-300 text-base md:text-lg max-w-xl">
            We help companies build elegant, reliable products with cutting-edge technology and a human touch.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#catalog" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow">
              Explore Catalog
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 rounded-md border border-white/20 text-white/90 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}

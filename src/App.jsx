import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import About from './components/About'
import Team from './components/Team'
import Catalog from './components/Catalog'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="bg-[#050814] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-blue-500" />
          <span className="text-white/80">© {new Date().getFullYear()} BlueCorp</span>
        </div>
        <div className="text-gray-400 text-sm">Built with care — All rights reserved.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <Navbar />
      <main>
        <Hero />
        <BestSellers />
        <About />
        <Team />
        <Catalog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

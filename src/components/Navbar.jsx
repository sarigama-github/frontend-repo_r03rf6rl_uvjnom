import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-sm md:text-base text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </a>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (e, id) => {
    if (id.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-500 to-blue-500" />
          <span className="text-white font-semibold tracking-wide">BlueCorp</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home" onClick={(e) => handleClick(e, '#home')}>Home</NavLink>
          <NavLink href="#bestsellers" onClick={(e) => handleClick(e, '#bestsellers')}>Best Sellers</NavLink>
          <NavLink href="#about" onClick={(e) => handleClick(e, '#about')}>About</NavLink>
          <NavLink href="#team" onClick={(e) => handleClick(e, '#team')}>Team</NavLink>
          <NavLink href="#catalog" onClick={(e) => handleClick(e, '#catalog')}>Catalog</NavLink>
          <NavLink href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</NavLink>
        </nav>
        <button
          className="md:hidden text-gray-200"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/90 border-t border-white/10">
          <div className="px-4 py-4 grid gap-3">
            <NavLink href="#home" onClick={(e) => handleClick(e, '#home')}>Home</NavLink>
            <NavLink href="#bestsellers" onClick={(e) => handleClick(e, '#bestsellers')}>Best Sellers</NavLink>
            <NavLink href="#about" onClick={(e) => handleClick(e, '#about')}>About</NavLink>
            <NavLink href="#team" onClick={(e) => handleClick(e, '#team')}>Team</NavLink>
            <NavLink href="#catalog" onClick={(e) => handleClick(e, '#catalog')}>Catalog</NavLink>
            <NavLink href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

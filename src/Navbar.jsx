import { useEffect } from "react"
import { Link } from "react-router-dom"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white" onClick={() => setMenuOpen(false)}>
            Vraj <span className="text-blue-500">Vaghela</span>
          </Link>

          {/* Mobile hamburger button */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block h-0.5 w-full bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

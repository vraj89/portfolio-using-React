import { Link } from "react-router-dom"

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.95)] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        menuOpen
          ? 'translate-y-0 opacity-100 h-screen pointer-events-auto'
          : 'h-0 opacity-0 pointer-events-none'
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="close menu"
      >
        &times;
      </button>

      <Link
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl mb-6 text-gray-300 hover:text-white transition-colors transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl mb-6 text-gray-300 hover:text-white transition-colors transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        About
      </Link>
      <Link
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl mb-6 text-gray-300 hover:text-white transition-colors transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Projects
      </Link>
      <Link
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl mb-6 text-gray-300 hover:text-white transition-colors transform transition-transform duration-300 ${
          menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        Contact
      </Link>
    </div>
  )
}

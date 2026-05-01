import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { About } from "./about"
import { LoadingScreen } from "./Loadingscreen"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./MobileMenu"
import { Project } from "./project"
import './index.css'
import Contact from "./Contact"

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleted={() => setisLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App

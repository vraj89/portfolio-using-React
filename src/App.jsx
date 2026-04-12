import { useState } from "react"
import { Home } from "./Home"
import { About } from "./about"
import { LoadingScreen } from "./Loadingscreen"
import { Navbar } from "./Navbar"
import { MobileMenu } from "./MobileMenu"
import './index.css'

function App() {
  const [isLoaded, setisLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleted={() => setisLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
      </div>
    </>
  )
}

export default App

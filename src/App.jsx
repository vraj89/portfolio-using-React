import { useState } from "react"
import { LoadingScreen } from "./Loadingscreen"
import { PortfolioPage } from "./Portfolio"
import './index.css'

function App() {
  const [isLoaded, setisLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onCompleted={() => setisLoaded(true)} />}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <PortfolioPage />
      </div>
    </>
  )
}

export default App
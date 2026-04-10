import React from "react"
import Home from "./Home"
import Project from "./project"
import { BrowserRouter as Router ,Routes,Route, Link } from "react-router-dom"
import Contact from "./Contact"
import { useState } from "react"
import { LoadingScreen } from "./Loadingscreen"
import './index.css'



function App() {
  const[isLoaded,setisLoaded]=useState(false);

  return (
    <>
    { !isLoaded &&  <LoadingScreen  onCompleted={ () => setisLoaded(true) }/>}
      <div className={`min-h-screen  transistion-opacity  duration-700  ${isLoaded ? 'opacity-100 ': 'opacity-0'} bg-black  text-gray-100 `}></div>
    </>
  )
}

export default App

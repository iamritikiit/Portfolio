import { useState } from 'react'
import './App.css'
import Home from "../src/components/Home.jsx"
import About from "../src/components/About.jsx"
import Contact from "../src/components/Contact.jsx"
import Projects from "../src/components/Projects.jsx"



function App() {
  return (
    <>
      <Home />
      <Contact />
      <Projects />
      <About />
    </>
  )
}

export default App

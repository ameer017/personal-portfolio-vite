import './App.css'
import {Navbar, Empty, Socials, HeroSection, Progress, About, Projects, Services, Contact, Footer} from '../src/index'
import React, {useState, useEffect} from 'react'


function App() {
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
        setisLoading(false)
      }, 5000)
  }, [])

  return (
    <div className="App">
    {isLoading ? (
      <Empty />
    ) : (
      <>
        <Navbar />  
        <Socials />
        <HeroSection />
        <About />
        <Services />
        <Projects />
        {/* <Progress /> */}
        <Contact />
        <Footer />
      </>      
    )}
    </div>
  )
}

export default App

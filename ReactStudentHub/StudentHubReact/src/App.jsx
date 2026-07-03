import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import Announcements from './pages/Announcements'
import { useState, useEffect } from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

const App = () => {
  const [darkMode, setDarkMode] = useState(false) //initialized with false for light mode
  useEffect(() =>{
    const saved = localStorage.getItem('sh_darkmode')
    if(saved === 'true')
      setDarkMode(true)
  },[])//it runs only once when it is first loaded to check if a saved preference exists

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add('dark-mode')
    }else{
      document.body.classList.remove('dark-mode')
    }
    localStorage.setItem('sh_darkmode', darkMode)//saves the updated preference
  },[darkMode])//this runs everytime dark mode changes
   function toggleDarkMode() {
    setDarkMode(!darkMode)
  }
  return (
    <>
    <BrowserRouter>
     <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/announcements" element={<Announcements />} />
     </Routes>
     <Footer />
    </BrowserRouter>
    
    </>
  )
}

export default App

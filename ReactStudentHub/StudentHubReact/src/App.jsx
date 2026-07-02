import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import { useState, useEffect } from 'react'

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
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <Home/>
    <Dashboard/>
    <About/>
    <Footer/>
    </>
  )
}

export default App

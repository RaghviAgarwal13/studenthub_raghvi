import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Dashboard/>
    <About/>
    <Footer/>
    </>
  )
}

export default App

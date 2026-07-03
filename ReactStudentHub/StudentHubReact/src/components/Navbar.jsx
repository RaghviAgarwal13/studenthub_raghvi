import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <header>
     <nav className="navbar" id="home">
    <div className="logo"> <i className="fa-solid fa-book-open"></i> Student Hub</div>
    <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    <button id="darkmodebtn" onClick={toggleDarkMode}>{darkMode ? '☀️' :'🌙'}</button>
  </nav>
 </header>
  )
}

export default Navbar

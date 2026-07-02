import React from 'react'

const Navbar = ({darkMode, toggleDarkMode}) => {
  return (
    <header>
     <nav className="navbar" id="home">
    <div className="logo"> <i className="fa-solid fa-book-open"></i> Student Hub</div>
    <ul className="navlinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#dashboard">DashBoard</a></li>
        <li><a href="#about">About</a></li>
    </ul>
    <button id="darkmodebtn" onClick={toggleDarkMode}>{darkMode ? '☀️' :'🌙'}</button>
  </nav>
 </header>
  )
}

export default Navbar

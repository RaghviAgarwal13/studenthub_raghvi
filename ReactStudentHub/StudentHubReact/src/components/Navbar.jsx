import React from 'react'
import { Link } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import announcements from '../data/announcements'

const Navbar = ({darkMode, toggleDarkMode}) => {
  const [lastSeenId, setLastSeenId] = useLocalStorage('sh_last_seen_announcement', 0)

  var latestId = announcements[0].id
  var unreadCount = 0

  announcements.forEach(function (item) {
    if (item.id > lastSeenId) {
      unreadCount = unreadCount + 1
    }
  })

  function handleBellClick() {
    setLastSeenId(latestId)
  }

  return (
    <header>
     <nav className="navbar" id="home">
    <div className="logo"> <i className="fa-solid fa-book-open"></i> Student Hub</div>
    <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    <Link to="/announcements" onClick={handleBellClick}>
            <i className="fa-solid fa-bell text-xl" style={{ color: '#d4b896' }}></i>
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Link>
    <button id="darkmodebtn" onClick={toggleDarkMode}>{darkMode ? '☀️' :'🌙'}</button>
  </nav>
 </header>
  )
}

export default Navbar

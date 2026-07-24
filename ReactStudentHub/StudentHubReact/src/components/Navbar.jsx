import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import announcements from '../data/announcements'
import { useAuth } from '../context/AuthContext'

const Navbar = ({darkMode, toggleDarkMode}) => {
  const [lastSeenId, setLastSeenId] = useLocalStorage('sh_last_seen_announcement', 0)
  var auth = useAuth()
  var navigate = useNavigate()

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

  function handleLogout() {
    auth.logout()
    navigate('/login')
  }

  return (
    <header>
     <nav className="navbar" id="home">
    <div className="logo"> <i className="fa-solid fa-book-open"></i> Student Hub</div>
    <ul className="navlinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/about">About</Link></li>
        {auth.user && auth.user.role === 'admin' && (
          <li><Link to="/admin">Admin</Link></li>
        )}
    </ul>
    <Link to="/announcements" onClick={handleBellClick}>
            <i className="fa-solid fa-bell text-xl" style={{ color: '#d4b896' }}></i>
          </Link>
    {auth.user ? (
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/profile" style={{ color: '#d4b896' }}>{auth.user.name}</Link>
        <button onClick={handleLogout} style={{ color: '#d4b896', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
      </div>
    ) : (
      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <Link to="/login" style={{ color: '#d4b896' }}>Login</Link>
        <Link to="/signup" style={{ color: '#d4b896' }}>Sign Up</Link>
      </div>
    )}
    <button id="darkmodebtn" onClick={toggleDarkMode}>{darkMode ? '☀️' :'🌙'}</button>
  </nav>
 </header>
  )
}

export default Navbar
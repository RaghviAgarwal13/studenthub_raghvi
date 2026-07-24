import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

function AdminPanel() {
  var [users, setUsers] = useState([])
  var [errorMsg, setErrorMsg] = useState('')
  var auth = useAuth()

  var API_URL = 'http://localhost:5000/api/admin/users'

  useEffect(function () {
    fetch(API_URL, {
      headers: { 'Authorization': 'Bearer ' + auth.token }
    })
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        if (Array.isArray(data)) {
          setUsers(data)
        }
      })
      .catch(function (err) {
        setErrorMsg('Could not load users')
      })
  }, [])

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-6">Admin Panel</h2>
      <p className="text-cafe-brown mb-4">All registered users:</p>

      {errorMsg !== '' && <p className="text-red-500">{errorMsg}</p>}

      <div className="bg-cafe-card rounded-2xl border border-amber-200 shadow-md overflow-hidden">
        {users.map(function (u) {
          return (
            <div key={u._id} className="flex justify-between items-center px-6 py-3 border-b border-amber-100">
              <div>
                <p className="text-cafe-brown font-semibold">{u.name}</p>
                <p className="text-amber-600 text-sm">{u.email}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-cafe-brown capitalize">{u.role}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminPanel
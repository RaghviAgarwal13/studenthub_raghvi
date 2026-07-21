import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Signup() {
  var [name, setName] = useState('')
  var [email, setEmail] = useState('')
  var [password, setPassword] = useState('')
  var [errorMsg, setErrorMsg] = useState('')
  var [loading, setLoading] = useState(false)

  var navigate = useNavigate()
  var auth = useAuth()

  var API_URL = 'http://localhost:5000/api/auth/signup'

  function handleSignup(e) {
    e.preventDefault()
    setErrorMsg('')

    if (name.trim() === '' || email.trim() === '') {
      setErrorMsg('Name and email are required')
      return
    }
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, password: password })
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { status: res.status, body: data }
        })
      })
      .then(function (result) {
        setLoading(false)
        if (result.status !== 201) {
          setErrorMsg(result.body.message)
          return
        }
        auth.login(result.body.user, result.body.token)
        navigate('/dashboard')
      })
      .catch(function (err) {
        setLoading(false)
        setErrorMsg('Something went wrong. Please try again.')
      })
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="bg-cafe-card rounded-2xl p-8 border border-amber-200 shadow-md w-full max-w-md">
        <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-6 text-center">Create Account</h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={function (e) { setName(e.target.value) }}
            className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={function (e) { setEmail(e.target.value) }}
            className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={function (e) { setPassword(e.target.value) }}
            className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 text-cafe-brown placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          {errorMsg !== '' && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-cafe-dark text-cafe-gold px-4 py-2 rounded-xl font-semibold hover:bg-cafe-brown transition-all mt-2"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-cafe-brown mt-4">
          Already have an account? <Link to="/login" className="font-semibold underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
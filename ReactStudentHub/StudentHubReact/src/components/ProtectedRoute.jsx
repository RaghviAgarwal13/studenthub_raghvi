import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {
  var auth = useAuth()

  if (auth.loading) {
    return <p>Loading...</p>
  }

  if (!auth.token) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
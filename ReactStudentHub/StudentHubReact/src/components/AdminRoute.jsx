import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function AdminRoute({ children }) {
  var auth = useAuth()

  if (auth.loading) {
    return <p>Loading...</p>
  }

  if (!auth.token) {
    return <Navigate to="/login" replace />
  }

  if (auth.user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />
  }

  return children
}

export default AdminRoute
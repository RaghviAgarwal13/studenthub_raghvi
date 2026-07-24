import { useAuth } from '../context/AuthContext'

function Profile() {
  var auth = useAuth()

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="bg-cafe-card rounded-2xl p-8 border border-amber-200 shadow-md w-full max-w-md">
        <h2 className="text-3xl font-playfair font-bold text-cafe-brown mb-6 text-center">My Profile</h2>

        <div className="flex flex-col gap-4">
          <div className="bg-amber-50 px-4 py-3 rounded-xl border border-amber-200">
            <p className="text-xs text-amber-600 mb-1">Name</p>
            <p className="text-cafe-brown font-semibold">{auth.user ? auth.user.name : ''}</p>
          </div>
          <div className="bg-amber-50 px-4 py-3 rounded-xl border border-amber-200">
            <p className="text-xs text-amber-600 mb-1">Email</p>
            <p className="text-cafe-brown font-semibold">{auth.user ? auth.user.email : ''}</p>
          </div>
          <div className="bg-amber-50 px-4 py-3 rounded-xl border border-amber-200">
            <p className="text-xs text-amber-600 mb-1">Role</p>
            <p className="text-cafe-brown font-semibold capitalize">{auth.user ? auth.user.role : ''}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
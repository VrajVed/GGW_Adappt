import { useState } from 'react'
import { demoUser, signup } from '@/lib/auth'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [name, setName] = useState(demoUser.name)
  const [email, setEmail] = useState(demoUser.email)
  const [password, setPassword] = useState(demoUser.password)
  const [message, setMessage] = useState(null)

  async function handleCreate(e) {
    e.preventDefault()
    const res = await signup(name, email, password)
    setMessage(res.message || 'Sign up not available in demo.')
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-card border border-border rounded-xl">
        <h2 className="text-xl font-bold mb-4">Sign Up (Demo)</h2>
        <p className="text-sm text-muted-foreground mb-4">This demo has a single preconfigured user. Use the credentials below to sign in.</p>

        <div className="space-y-3 mb-4">
          <div><strong>Name:</strong> {demoUser.name}</div>
          <div><strong>Email:</strong> {demoUser.email}</div>
          <div><strong>Password:</strong> {demoUser.password}</div>
        </div>

        <form onSubmit={handleCreate} className="space-y-4">
          <button className="px-4 py-2 rounded-md gradient-primary text-white">Create Demo User</button>
        </form>

        {message && <div className="mt-3 text-sm text-muted-foreground">{message}</div>}

        <div className="mt-4 text-sm">
          Already have the credentials? <Link to="/login" className="text-primary underline">Sign in</Link>
        </div>
      </div>
    </div>
  )
}

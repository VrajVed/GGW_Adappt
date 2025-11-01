import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-md w-full p-8 bg-card border border-border rounded-xl shadow-lg text-center">
        <img src="/logo.png" alt="SahiPay logo" className="w-24 h-24 mx-auto rounded-lg mb-4" />
        <h1 className="text-2xl font-bold mb-2">Welcome to SahiPay</h1>
        <p className="text-sm text-muted-foreground mb-6">Choose how you'd like to continue</p>

        <div className="flex flex-col gap-3">
          <Link to="/login" className="px-4 py-3 rounded-md border border-border hover:bg-muted transition-colors text-sm font-medium">Login</Link>
          <Link to="/signup" className="px-4 py-3 rounded-md border border-border hover:bg-muted transition-colors text-sm font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

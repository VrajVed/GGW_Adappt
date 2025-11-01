import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <span className="text-xl font-bold">SahiPay</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/voice-banking" className="text-sm font-medium hover:text-primary transition-colors">
              Voice Banking
            </Link>
            <Link to="/trust-score" className="text-sm font-medium hover:text-primary transition-colors">
              Trust Score
            </Link>
            <Link to="/simple-banking" className="text-sm font-medium hover:text-primary transition-colors">
              Simple UI
            </Link>
            <Link to="/scam-shield" className="text-sm font-medium hover:text-primary transition-colors">
              ScamShield
            </Link>
            <Button className="gradient-primary text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link to="/voice-banking" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Voice Banking
            </Link>
            <Link to="/trust-score" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Trust Score
            </Link>
            <Link to="/simple-banking" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              Simple UI
            </Link>
            <Link to="/scam-shield" className="block py-2 text-sm font-medium hover:text-primary transition-colors">
              ScamShield
            </Link>
            <Button className="w-full gradient-primary text-white">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}


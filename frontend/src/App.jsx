import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import ErrorReporter from '@/components/ErrorReporter'
import VisualEditsMessenger from '@/visual-edits/VisualEditsMessenger'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import VoiceBanking from './pages/VoiceBanking'
import TrustScore from './pages/TrustScore'
import SimpleBanking from './pages/SimpleBanking'
import ScamShield from './pages/ScamShield'
import FinancialGuardian from './pages/FinancialGuardian'
import Preloader from './components/Preloader'
import AnimatedGridPattern from './components/ui/animated-grid-pattern'

function App() {
  const [showPreloader, setShowPreloader] = useState(true)
  return (
    <BrowserRouter>
      {showPreloader ? (
        <Preloader duration={3800} onFinish={() => setShowPreloader(false)} />
      ) : (
        <div className="antialiased relative">
          {/* Full-viewport decorative pattern (site-wide) — placed behind content to avoid overlap */}
          <AnimatedGridPattern
            className="pointer-events-none -z-10 text-gray-300/40 pattern-mask-content"
            numSquares={40}
            maxOpacity={0.06}
            duration={4}
            repeatDelay={1}
          />
          <ErrorReporter />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/voice-banking" element={<VoiceBanking />} />
            <Route path="/trust-score" element={<TrustScore />} />
            <Route path="/guardian" element={<FinancialGuardian />} />
            <Route path="/simple-banking" element={<SimpleBanking />} />
            <Route path="/scam-shield" element={<ScamShield />} />
          </Routes>
          <VisualEditsMessenger />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App


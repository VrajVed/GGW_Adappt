import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ErrorReporter from '@/components/ErrorReporter'
import VisualEditsMessenger from '@/visual-edits/VisualEditsMessenger'
import Home from './pages/Home'
import VoiceBanking from './pages/VoiceBanking'
import TrustScore from './pages/TrustScore'
import SimpleBanking from './pages/SimpleBanking'
import ScamShield from './pages/ScamShield'

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased">
        <ErrorReporter />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voice-banking" element={<VoiceBanking />} />
          <Route path="/trust-score" element={<TrustScore />} />
          <Route path="/simple-banking" element={<SimpleBanking />} />
          <Route path="/scam-shield" element={<ScamShield />} />
        </Routes>
        <VisualEditsMessenger />
      </div>
    </BrowserRouter>
  )
}

export default App


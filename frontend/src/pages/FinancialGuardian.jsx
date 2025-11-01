import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { scanForScams, getAiTips, detectEmotion } from '@/lib/guardianApi'
import { AlertCircle, Mic, ShieldCheck, Zap, Smile } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FinancialGuardian() {
  const [transactions, setTransactions] = useState([])
  const [scamLoading, setScamLoading] = useState(false)
  const [scamAlert, setScamAlert] = useState(null)

  const [weekly, setWeekly] = useState({ amount: 0, delta: '0.0' })
  const [aiLoading, setAiLoading] = useState(false)
  const [aiTip, setAiTip] = useState(null)

  const [listening, setListening] = useState(false)
  const [emotion, setEmotion] = useState(null)

  const [score, setScore] = useState(78)

  useEffect(() => {
    // initialize small sample transactions and weekly summary
    scanForScams().then((res) => {
      setTransactions(res.transactions)
    })
    setWeekly({ amount: 4827, delta: '+3.2' })
  }, [])

  async function handleScan() {
    setScamLoading(true)
    setScamAlert(null)
    try {
      const res = await scanForScams()
      setTransactions(res.transactions)
      if (res.found || res.transactions.some(t => t.risk === 'red')) {
        setScamAlert({ type: 'warn', message: 'Suspicious activity found. Please review highlighted transactions.' })
      } else {
        setScamAlert({ type: 'ok', message: 'No suspicious activity detected.' })
      }
    } finally {
      setScamLoading(false)
    }
  }

  async function handleGetTips() {
    setAiLoading(true)
    setAiTip(null)
    try {
      const res = await getAiTips()
      setAiTip(res)
    } finally {
      setAiLoading(false)
    }
  }

  async function handleListen() {
    setListening(true)
    setEmotion(null)
    try {
      const e = await detectEmotion()
      setEmotion(e)
    } finally {
      setListening(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-16">
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-hero">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium text-accent">Financial Guardian</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                Be the Guardian of your money — Dadi bhi samjhe
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Real-time scam monitoring, personalised spending tips, and a friendly guardian score to help you save smarter.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: Scam Panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2"><AlertCircle className="w-5 h-5 text-red-500" /> Real-Time Scam Detection</h2>
                  <button
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors"
                    onClick={handleScan}
                    disabled={scamLoading}
                  >
                    <Zap className="w-4 h-4 text-foreground/80" />
                    {scamLoading ? 'Scanning...' : 'Scan for Scam'}
                  </button>
                </div>

                {scamAlert && (
                  <div className={`p-3 rounded-md mb-4 ${scamAlert.type === 'warn' ? 'bg-yellow-50 border border-yellow-200' : 'bg-green-50 border border-green-200'}`}>
                    <p className="text-sm font-medium">{scamAlert.message}</p>
                  </div>
                )}

                <div className="space-y-2">
                  {transactions.map(tx => (
                    <div key={tx.id} className="flex items-center justify-between p-3 rounded-md border border-border bg-background/50">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${tx.risk === 'red' ? 'bg-red-500' : tx.risk === 'yellow' ? 'bg-yellow-400' : 'bg-green-400'}`} />
                        <div>
                          <div className="font-medium">{tx.label}</div>
                          <div className="text-sm text-muted-foreground">₹{tx.amount}</div>
                        </div>
                      </div>
                      <div className="text-sm font-semibold">
                        {tx.risk === 'red' ? 'High' : tx.risk === 'yellow' ? 'Medium' : 'Low'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Spending Coach */}
              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2"><Smile className="w-5 h-5 text-emerald-500" /> AI Spending Coach</h3>
                  <button
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted transition-colors"
                    onClick={handleGetTips}
                    disabled={aiLoading}
                  >
                    {aiLoading ? 'Thinking...' : 'Get Tips'}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-md bg-linear-to-br from-amber-50 to-amber-100 border border-amber-100">
                    <div className="text-sm text-muted-foreground">This week</div>
                    <div className="text-2xl font-bold mt-1">₹{weekly.amount}</div>
                    <div className={`text-sm font-medium mt-1 ${weekly.delta && weekly.delta.startsWith('-') ? 'text-red-500' : 'text-green-600'}`}>{weekly.delta} vs last week</div>
                  </div>

                  <div className="p-4 rounded-md bg-card-border border border-border flex flex-col justify-center">
                    {aiTip ? (
                      <div>
                        <div className="text-sm text-muted-foreground">Tip</div>
                        <div className="mt-2 font-medium">{aiTip.tip}</div>
                        <div className="text-xs text-muted-foreground mt-2">Estimated change: {aiTip.delta}%</div>
                      </div>
                    ) : (
                      <div className="text-sm text-muted-foreground">Press “Get Tips” to fetch personalised saving suggestions.</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: Score & Emotion */}
            <aside className="space-y-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
                <h4 className="text-sm text-muted-foreground mb-3">Financial Guardian Score</h4>
                <div className="flex items-center justify-center">
                  <CircularScore value={score} />
                </div>
                <div className="mt-4 text-sm">Keep transactions safe and save regularly to improve your score.</div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center shadow-sm">
                <h4 className="text-sm text-muted-foreground mb-3">Emotion Detection (Demo)</h4>
                <button
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${listening ? 'bg-primary/10' : 'hover:bg-muted'} transition-colors`}
                  onClick={handleListen}
                >
                  <Mic className="w-4 h-4" /> {listening ? 'Listening...' : 'Tap to speak'}
                </button>

                <div className="mt-3">
                  {emotion ? <div className="font-medium">Emotion Detected: <span className="ml-2">{emotion}</span></div> : <div className="text-sm text-muted-foreground">No input yet</div>}
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function CircularScore({ value = 0 }) {
  // Simple SVG circular progress
  const size = 120
  const stroke = 10
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  const color = value > 80 ? '#16a34a' : value > 60 ? '#f59e0b' : '#ef4444'

  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <defs>
          <linearGradient id="g1" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#e6e6e6" strokeWidth={stroke} fill="none" />
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="url(#g1)" strokeWidth={stroke} strokeLinecap="round" fill="none" strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div className="-mt-20 text-3xl font-extrabold flex items-center gap-2">
        <span style={{ color }}>{value}</span>
        <span className="text-2xl">/100</span>
      </div>
      <div className="mt-2 text-sm">{value > 80 ? 'Excellent 👏' : value > 60 ? 'Good 🙂' : 'Needs attention ⚠️'}</div>
    </div>
  )
}

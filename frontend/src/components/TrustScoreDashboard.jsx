import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Award, Zap, Users, Shield, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

export default function TrustScoreDashboard() {
  const trustScore = 750
  const maxScore = 900
  const scorePercentage = (trustScore / maxScore) * 100

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Main Score Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-2"
      >
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/20">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Your Vishwas Score</h2>
              <p className="text-muted-foreground">आपका विश्वास स्कोर</p>
            </div>
            <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
              <TrendingUp className="w-3 h-3 mr-1" />
              Excellent
            </Badge>
          </div>

          {/* Score Ring */}
          <div className="flex items-center justify-center mb-8">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="110"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-muted"
                />
                <motion.circle
                  cx="128"
                  cy="128"
                  r="110"
                  stroke="url(#trustGradient)"
                  strokeWidth="16"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 110}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 110 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 110 * (1 - scorePercentage / 100) }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="trustGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="oklch(0.65 0.22 140)" />
                    <stop offset="100%" stopColor="oklch(0.55 0.18 180)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-6xl font-bold gradient-trust bg-clip-text text-transparent"
                >
                  {trustScore}
                </motion.div>
                <p className="text-sm text-muted-foreground">out of {maxScore}</p>
                <div className="mt-2 flex items-center gap-1 text-green-600">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">+50 this month</span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next milestone: 800</span>
              <span className="font-semibold">{Math.round(scorePercentage)}%</span>
            </div>
            <Progress value={scorePercentage} className="h-3" />
            <p className="text-xs text-muted-foreground">50 more points to unlock Premium benefits</p>
          </div>
        </Card>
      </motion.div>

      {/* Score Factors */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Score Breakdown</h3>
          <div className="space-y-4">
            <ScoreFactor
              icon={<Zap className="w-5 h-5" />}
              label="Bill Payments"
              points="+50"
              color="text-yellow-500"
              percentage={85}
            />
            <ScoreFactor
              icon={<Users className="w-5 h-5" />}
              label="Community Vouches"
              points="+30"
              color="text-blue-500"
              percentage={70}
            />
            <ScoreFactor
              icon={<Shield className="w-5 h-5" />}
              label="Safe Transactions"
              points="+20"
              color="text-green-500"
              percentage={95}
            />
            <ScoreFactor
              icon={<TrendingUp className="w-5 h-5" />}
              label="Account Age"
              points="+15"
              color="text-purple-500"
              percentage={60}
            />
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="flex items-start gap-3 mb-3">
            <Award className="w-6 h-6 text-primary" />
            <div>
              <h4 className="font-semibold">Boost Your Score</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Complete these actions to increase your Vishwas Score
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <span className="text-xs">✓ Pay 3 utility bills</span>
              <span className="ml-auto text-xs font-bold text-accent">+25</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <span className="text-xs">Get vouched by 5 people</span>
              <span className="ml-auto text-xs font-bold text-accent">+30</span>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start">
              <span className="text-xs">Complete KYC verification</span>
              <span className="ml-auto text-xs font-bold text-accent">+40</span>
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

function ScoreFactor({
  icon,
  label,
  points,
  color,
  percentage,
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={color}>{icon}</div>
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-sm font-bold text-accent">{points}</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  )
}

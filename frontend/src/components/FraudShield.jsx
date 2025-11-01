import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle2, AlertTriangle, XCircle, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const protectionStats = [
  { label: "Scams Blocked", value: "12", icon: <Shield className="w-5 h-5" />, color: "text-green-600" },
  { label: "Safe Transactions", value: "245", icon: <CheckCircle2 className="w-5 h-5" />, color: "text-blue-600" },
  { label: "Suspicious Activity", value: "3", icon: <AlertTriangle className="w-5 h-5" />, color: "text-yellow-600" },
  { label: "Protection Score", value: "98%", icon: <TrendingUp className="w-5 h-5" />, color: "text-purple-600" },
]

const recentProtections = [
  {
    type: "Blocked",
    description: "Suspicious UPI request from unknown number",
    time: "2 hours ago",
    severity: "high",
    points: "+10",
  },
  {
    type: "Warning",
    description: "Large transaction to new beneficiary",
    time: "1 day ago",
    severity: "medium",
    points: "+5",
  },
  {
    type: "Blocked",
    description: "Phishing link detected in SMS",
    time: "3 days ago",
    severity: "high",
    points: "+10",
  },
  {
    type: "Protected",
    description: "Verified safe transaction to known contact",
    time: "5 days ago",
    severity: "low",
    points: "+2",
  },
]

export default function FraudShield() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="gradient-primary bg-clip-text text-transparent">FraudShield</span> Protection
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Every safe transaction increases your trust score. We protect you from scams 24/7.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Protection Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {protectionStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Recent Protection Activity</h3>
            
            <div className="space-y-3">
              {recentProtections.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.severity === 'high'
                      ? 'bg-red-500/10 text-red-600'
                      : activity.severity === 'medium'
                      ? 'bg-yellow-500/10 text-yellow-600'
                      : 'bg-green-500/10 text-green-600'
                  }`}>
                    {activity.severity === 'high' ? (
                      <XCircle className="w-5 h-5" />
                    ) : activity.severity === 'medium' ? (
                      <AlertTriangle className="w-5 h-5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        variant={activity.severity === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {activity.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm font-medium">{activity.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm font-bold text-accent">
                    {activity.points}
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Protection Features */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white flex-shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Protected</h3>
                <p className="text-sm text-muted-foreground">Your account is fully secure</p>
              </div>
            </div>
            <div className="space-y-2">
              <ProtectionFeature text="Real-time scam detection" />
              <ProtectionFeature text="AI-powered fraud prevention" />
              <ProtectionFeature text="Suspicious activity alerts" />
              <ProtectionFeature text="Safe transaction verification" />
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="font-semibold mb-4">How Protection Builds Trust</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="text-sm font-medium">Every Safe Transaction</p>
                  <p className="text-xs text-muted-foreground">Earn +2 points per verified safe transaction</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="text-sm font-medium">Scam Avoidance</p>
                  <p className="text-xs text-muted-foreground">Get +10 points when we protect you from fraud</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="text-sm font-medium">Clean History</p>
                  <p className="text-xs text-muted-foreground">Maintain zero fraud incidents for bonus points</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <div className="text-center">
              <div className="text-4xl mb-2">🛡️</div>
              <h4 className="font-bold mb-2">Perfect Protection</h4>
              <p className="text-sm text-muted-foreground mb-3">
                You haven't fallen for any scams in the last 6 months!
              </p>
              <Badge className="bg-blue-500/20 text-blue-700 border-blue-500/30">
                +25 Trust Points
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function ProtectionFeature({ text  }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
      <span>{text}</span>
    </div>
  )
}

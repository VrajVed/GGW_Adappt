import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, CreditCard, Zap, TrendingUp, Shield, Plus } from "lucide-react"
import { motion } from "framer-motion"

const transactions = [
  { emoji: "🍕", category: "Food", name: "Zomato", amount: "-₹450", time: "2h ago", safe: true },
  { emoji: "⚡", category: "Bills", name: "Electricity", amount: "-₹1,200", time: "1d ago", safe: true },
  { emoji: "🎬", category: "Entertainment", name: "Netflix", amount: "-₹199", time: "3d ago", safe: true },
]

export default function Level2Interface({ highContrast, largeFonts }) {
  return (
    <div>
      <Card className={`p-6 mb-6 ${highContrast ? 'bg-black text-white border-white' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${largeFonts ? 'text-2xl' : 'text-xl'}`}>Level 2: Standard Mode</h3>
          <span className="text-2xl">⚡</span>
        </div>
        <p className={`text-muted-foreground ${highContrast ? 'text-gray-300' : ''} ${largeFonts ? 'text-lg' : 'text-sm'}`}>
          Balanced interface with emoji categories, quick actions, and transaction history. For everyday banking.
        </p>
      </Card>

      {/* Mock Phone Interface */}
      <div className="max-w-sm mx-auto">
        <Card className={`p-6 ${highContrast ? 'bg-black border-2 border-white' : 'bg-gradient-to-br from-primary/5 to-secondary/5'}`}>
          {/* Balance Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={`p-6 mb-6 ${
              highContrast
                ? 'bg-white text-black border-2 border-white'
                : 'gradient-primary text-white'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`${largeFonts ? 'text-base' : 'text-sm'} opacity-90`}>Total Balance</span>
                <CreditCard className="w-5 h-5" />
              </div>
              <h2 className={`font-bold mb-1 ${largeFonts ? 'text-4xl' : 'text-3xl'}`}>₹12,450</h2>
              <div className="flex items-center gap-2">
                <Badge className={`${highContrast ? 'bg-black text-white' : 'bg-white/20 text-white'}`}>
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5.2% this month
                </Badge>
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h3 className={`font-semibold mb-3 ${largeFonts ? 'text-lg' : 'text-base'} ${highContrast ? 'text-white' : ''}`}>
              Quick Actions
            </h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { emoji: "💸", label: "Send", color: "blue" },
                { emoji: "💰", label: "Request", color: "green" },
                { emoji: "⚡", label: "Bills", color: "yellow" },
                { emoji: "📊", label: "Stats", color: "purple" },
              ].map((action, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex flex-col items-center gap-2 p-3 rounded-xl ${
                    highContrast
                      ? 'bg-white text-black border-2 border-white'
                      : 'bg-card hover:bg-muted'
                  } transition-colors ${largeFonts ? 'p-4' : ''}`}
                >
                  <span className={largeFonts ? 'text-3xl' : 'text-2xl'}>{action.emoji}</span>
                  <span className={`${largeFonts ? 'text-sm' : 'text-xs'} font-medium ${highContrast ? 'text-black' : ''}`}>
                    {action.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className={`font-semibold ${largeFonts ? 'text-lg' : 'text-base'} ${highContrast ? 'text-white' : ''}`}>
                Recent Activity
              </h3>
              <Button variant="ghost" size="sm" className={highContrast ? 'text-white' : ''}>
                View All
              </Button>
            </div>
            <div className="space-y-2">
              {transactions.map((txn, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className={`p-4 ${highContrast ? 'bg-white border-2 border-white' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        highContrast ? 'bg-black' : 'bg-muted'
                      } ${largeFonts ? 'w-14 h-14' : ''}`}>
                        <span className={largeFonts ? 'text-2xl' : 'text-xl'}>{txn.emoji}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className={`font-semibold ${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-black' : ''}`}>
                            {txn.name}
                          </h4>
                          {txn.safe && (
                            <Shield className={`w-3 h-3 ${highContrast ? 'text-green-700' : 'text-green-600'}`} />
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className={`text-xs ${highContrast ? 'bg-gray-200 text-black' : ''}`}>
                            {txn.category}
                          </Badge>
                          <span className={`text-xs ${highContrast ? 'text-gray-700' : 'text-muted-foreground'}`}>
                            {txn.time}
                          </span>
                        </div>
                      </div>
                      <span className={`font-bold ${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-black' : ''}`}>
                        {txn.amount}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add Transaction Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-4"
          >
            <Button className={`w-full ${largeFonts ? 'py-6 text-lg' : ''} ${
              highContrast ? 'bg-white text-black hover:bg-gray-200 border-2 border-white' : 'gradient-primary text-white'
            }`}>
              <Plus className="w-5 h-5 mr-2" />
              New Transaction
            </Button>
          </motion.div>
        </Card>
      </div>

      {/* Features List */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <FeatureCard
          title="Emoji Categories"
          description="Visual transaction categorization"
          icon="🎯"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Safety Indicators"
          description="Green shield for verified transactions"
          icon="🛡️"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Quick Actions"
          description="Common tasks within one tap"
          icon="⚡"
          highContrast={highContrast}
        />
      </div>
    </div>
  )
}

function FeatureCard({ title, description, icon, highContrast  }) {
  return (
    <Card className={`p-4 text-center ${highContrast ? 'bg-black text-white border-white' : ''}`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className={`font-semibold mb-1 ${highContrast ? 'text-white' : ''}`}>{title}</h4>
      <p className={`text-xs ${highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>{description}</p>
    </Card>
  )
}

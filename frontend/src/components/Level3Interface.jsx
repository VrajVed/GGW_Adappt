import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, ArrowDownLeft, TrendingUp, Wallet, CreditCard, PieChart, Settings } from "lucide-react"
import { motion } from "framer-motion"

const accounts = [
  { name: "Savings", balance: "₹8,450", change: "+2.1%", color: "from-blue-500 to-cyan-500" },
  { name: "Investment", balance: "₹4,000", change: "+8.5%", color: "from-green-500 to-emerald-500" },
]

const recentTransactions = [
  { type: "out", name: "Amazon Payment", amount: "₹1,299", category: "Shopping", time: "10:30 AM" },
  { type: "in", name: "Salary Credit", amount: "₹45,000", category: "Income", time: "Yesterday" },
  { type: "out", name: "Credit Card Bill", amount: "₹8,500", category: "Bills", time: "2d ago" },
]

export default function Level3Interface({ highContrast, largeFonts }) {
  return (
    <div>
      <Card className={`p-6 mb-6 ${highContrast ? 'bg-black text-white border-white' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${largeFonts ? 'text-2xl' : 'text-xl'}`}>Level 3: Advanced Mode</h3>
          <span className="text-2xl">🚀</span>
        </div>
        <p className={`text-muted-foreground ${highContrast ? 'text-gray-300' : ''} ${largeFonts ? 'text-lg' : 'text-sm'}`}>
          Full-featured dashboard with analytics, multiple accounts, and advanced controls for power users.
        </p>
      </Card>

      {/* Mock Desktop Interface */}
      <Card className={`p-6 ${highContrast ? 'bg-black border-2 border-white' : 'bg-gradient-to-br from-primary/5 to-secondary/5'}`}>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Overview */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <div>
                <h2 className={`font-bold ${largeFonts ? 'text-3xl' : 'text-2xl'} ${highContrast ? 'text-white' : ''}`}>
                  Dashboard
                </h2>
                <p className={`${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>
                  Welcome back, Rahul
                </p>
              </div>
              <Button variant="outline" size="sm" className={highContrast ? 'text-white border-white' : ''}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </motion.div>

            {/* Total Balance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className={`p-6 ${
                highContrast
                  ? 'bg-white text-black border-2 border-white'
                  : 'gradient-primary text-white'
              }`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`${largeFonts ? 'text-base' : 'text-sm'} opacity-90 mb-2`}>Total Balance</p>
                    <h3 className={`font-bold mb-3 ${largeFonts ? 'text-5xl' : 'text-4xl'}`}>₹12,450.00</h3>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className={`${largeFonts ? 'text-sm' : 'text-xs'} opacity-75`}>Income</p>
                        <p className={`font-semibold ${largeFonts ? 'text-lg' : 'text-base'}`}>₹45,000</p>
                      </div>
                      <div>
                        <p className={`${largeFonts ? 'text-sm' : 'text-xs'} opacity-75`}>Expenses</p>
                        <p className={`font-semibold ${largeFonts ? 'text-lg' : 'text-base'}`}>₹32,550</p>
                      </div>
                    </div>
                  </div>
                  <Wallet className="w-12 h-12 opacity-50" />
                </div>
              </Card>
            </motion.div>

            {/* Accounts */}
            <div className="grid sm:grid-cols-2 gap-4">
              {accounts.map((account, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Card className={`p-4 ${highContrast ? 'bg-white border-2 border-white' : ''}`}>
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${account.color} flex items-center justify-center text-white mb-3`}>
                      <CreditCard className="w-5 h-5" />
                    </div>
                    <p className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-gray-700' : 'text-muted-foreground'} mb-1`}>
                      {account.name} Account
                    </p>
                    <p className={`font-bold ${largeFonts ? 'text-2xl' : 'text-xl'} ${highContrast ? 'text-black' : ''} mb-2`}>
                      {account.balance}
                    </p>
                    <Badge variant="secondary" className={`text-xs ${highContrast ? 'bg-gray-200 text-black' : ''}`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {account.change}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className={`p-4 ${highContrast ? 'bg-white border-2 border-white' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-semibold ${largeFonts ? 'text-lg' : 'text-base'} ${highContrast ? 'text-black' : ''}`}>
                    Recent Transactions
                  </h3>
                  <Button variant="ghost" size="sm" className={highContrast ? 'text-black' : ''}>
                    View All
                  </Button>
                </div>
                <div className="space-y-3">
                  {recentTransactions.map((txn, index) => (
                    <div key={index} className={`flex items-center gap-3 pb-3 ${
                      index < recentTransactions.length - 1 ? 'border-b' : ''
                    } ${highContrast ? 'border-gray-300' : 'border-border'}`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        txn.type === 'in'
                          ? highContrast ? 'bg-green-200' : 'bg-green-500/10'
                          : highContrast ? 'bg-red-200' : 'bg-red-500/10'
                      }`}>
                        {txn.type === 'in' ? (
                          <ArrowDownLeft className={`w-5 h-5 ${highContrast ? 'text-green-700' : 'text-green-600'}`} />
                        ) : (
                          <ArrowUpRight className={`w-5 h-5 ${highContrast ? 'text-red-700' : 'text-red-600'}`} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium ${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-black' : ''}`}>
                          {txn.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-gray-700' : 'text-muted-foreground'}`}>
                            {txn.category}
                          </p>
                          <span className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-gray-500' : 'text-muted-foreground'}`}>
                            • {txn.time}
                          </span>
                        </div>
                      </div>
                      <p className={`font-bold ${largeFonts ? 'text-base' : 'text-sm'} ${
                        txn.type === 'in'
                          ? highContrast ? 'text-green-700' : 'text-green-600'
                          : highContrast ? 'text-black' : ''
                      }`}>
                        {txn.type === 'in' ? '+' : ''}{txn.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="space-y-4">
            {/* Spending This Month */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className={`p-4 ${highContrast ? 'bg-white border-2 border-white' : ''}`}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className={`font-semibold ${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-black' : ''}`}>
                    Spending This Month
                  </h4>
                  <PieChart className={`w-5 h-5 ${highContrast ? 'text-black' : 'text-primary'}`} />
                </div>
                <p className={`font-bold ${largeFonts ? 'text-3xl' : 'text-2xl'} ${highContrast ? 'text-black' : ''} mb-2`}>
                  ₹32,550
                </p>
                <p className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-gray-700' : 'text-muted-foreground'} mb-3`}>
                  of ₹40,000 budget
                </p>
                <Progress value={81} className="h-2" />
                <p className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-gray-700' : 'text-muted-foreground'} mt-2`}>
                  81% used
                </p>
              </Card>
            </motion.div>

            {/* Category Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className={`p-4 ${highContrast ? 'bg-white border-2 border-white' : ''}`}>
                <h4 className={`font-semibold ${largeFonts ? 'text-base' : 'text-sm'} ${highContrast ? 'text-black' : ''} mb-4`}>
                  Top Categories
                </h4>
                <div className="space-y-3">
                  {[
                    { name: "Food & Dining", amount: "₹12,300", color: "bg-orange-500" },
                    { name: "Bills & Utilities", amount: "₹8,450", color: "bg-blue-500" },
                    { name: "Shopping", amount: "₹6,800", color: "bg-purple-500" },
                    { name: "Transport", amount: "₹5,000", color: "bg-green-500" },
                  ].map((category, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <p className={`${largeFonts ? 'text-sm' : 'text-xs'} ${highContrast ? 'text-black' : ''}`}>
                          {category.name}
                        </p>
                        <p className={`${largeFonts ? 'text-sm' : 'text-xs'} font-medium ${highContrast ? 'text-black' : ''}`}>
                          {category.amount}
                        </p>
                      </div>
                      <div className={`h-1.5 rounded-full ${highContrast ? 'bg-gray-300' : 'bg-muted'}`}>
                        <div
                          className={`h-full rounded-full ${category.color}`}
                          style={{ width: `${70 - index * 15}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2"
            >
              <Button className={`w-full justify-start ${largeFonts ? 'py-6' : ''} ${
                highContrast ? 'bg-white text-black hover:bg-gray-200 border-2 border-white' : 'gradient-primary text-white'
              }`}>
                <ArrowUpRight className="w-4 h-4 mr-2" />
                Send Money
              </Button>
              <Button variant="outline" className={`w-full justify-start ${largeFonts ? 'py-6' : ''} ${
                highContrast ? 'border-2 border-white text-white hover:bg-white hover:text-black' : ''
              }`}>
                <CreditCard className="w-4 h-4 mr-2" />
                Pay Bills
              </Button>
            </motion.div>
          </div>
        </div>
      </Card>

      {/* Features List */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <FeatureCard
          title="Multi-Account View"
          description="Manage all accounts in one place"
          icon="💼"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Advanced Analytics"
          description="Detailed spending insights & trends"
          icon="📊"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Quick Filters"
          description="Filter by date, category, amount"
          icon="🔍"
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

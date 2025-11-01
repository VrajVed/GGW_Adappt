import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Zap, Droplet, Wifi, Phone, CheckCircle2, Plus } from "lucide-react"
import { motion } from "framer-motion"

const billTypes = [
  { icon: <Zap className="w-6 h-6" />, name: "Electricity", paid: 8, total: 12, color: "from-yellow-500 to-orange-500" },
  { icon: <Droplet className="w-6 h-6" />, name: "Water", paid: 12, total: 12, color: "from-blue-500 to-cyan-500" },
  { icon: <Wifi className="w-6 h-6" />, name: "Internet", paid: 10, total: 12, color: "from-purple-500 to-pink-500" },
  { icon: <Phone className="w-6 h-6" />, name: "Mobile", paid: 12, total: 12, color: "from-green-500 to-emerald-500" },
]

const recentPayments = [
  { type: "Electricity Bill", amount: "₹1,250", date: "2 days ago", points: "+8", status: "completed" },
  { type: "Water Bill", amount: "₹450", date: "5 days ago", points: "+5", status: "completed" },
  { type: "Mobile Recharge", amount: "₹599", date: "1 week ago", points: "+6", status: "completed" },
  { type: "Internet Bill", amount: "₹899", date: "2 weeks ago", points: "+7", status: "completed" },
]

export default function CreditBuilding() {
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
          Build Credit with <span className="gradient-trust bg-clip-text text-transparent">Everyday Payments</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Every bill payment, UPI transaction, and timely payment increases your Vishwas Score.
          No credit card needed.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Payment Categories */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Payment History</h3>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                This Year
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {billTypes.map((bill, index) => (
                <motion.div
                  key={bill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${bill.color} flex items-center justify-center text-white mb-3`}>
                      {bill.icon}
                    </div>
                    <h4 className="font-semibold mb-1">{bill.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <span className="font-medium text-foreground">{bill.paid}/{bill.total}</span>
                      <span>paid</span>
                    </div>
                    {bill.paid === bill.total && (
                      <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>100% on time</span>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button className="w-full gradient-primary text-white">
              <Plus className="w-4 h-4 mr-2" />
              Pay a Bill
            </Button>
          </Card>
        </motion.div>

        {/* Recent Payments */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-6">Recent Credit-Building Actions</h3>
            
            <div className="space-y-3">
              {recentPayments.map((payment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{payment.type}</h4>
                    <p className="text-xs text-muted-foreground">{payment.date}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-sm">{payment.amount}</p>
                    <p className="text-xs font-bold text-accent">{payment.points}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Card className="mt-6 p-4 bg-gradient-to-br from-accent/10 to-secondary/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Pro Tip</h4>
                  <p className="text-sm text-muted-foreground">
                    Set up auto-pay for recurring bills to never miss a payment and maximize your score growth!
                  </p>
                </div>
              </div>
            </Card>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

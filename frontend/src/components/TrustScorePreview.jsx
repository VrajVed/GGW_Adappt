import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Shield, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function TrustScorePreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vishwas Score <span className="gradient-trust bg-clip-text text-transparent">(Trust Score)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build your credit through everyday actions. No credit card needed. No hidden fees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Score Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10 border-2 border-accent/20">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-muted"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#trustGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 88}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 88 }}
                      whileInView={{ strokeDashoffset: 2 * Math.PI * 88 * 0.25 }}
                      viewport={{ once: true }}
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
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-5xl font-bold gradient-trust bg-clip-text text-transparent"
                    >
                      750
                    </motion.div>
                    <p className="text-sm text-muted-foreground">Excellent</p>
                  </div>
                </div>

                <div className="mt-8 w-full space-y-3">
                  <ScoreFactor icon={<Zap />} label="Bill Payments" value="+50" />
                  <ScoreFactor icon={<Users />} label="Community Vouches" value="+30" />
                  <ScoreFactor icon={<Shield />} label="Safe Transactions" value="+20" />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <TrustFeature
              icon={<TrendingUp className="w-6 h-6" />}
              title="Build Credit with Daily Actions"
              description="Pay utility bills, make UPI payments, and complete transactions to increase your score."
            />
            <TrustFeature
              icon={<Users className="w-6 h-6" />}
              title="Community Vouching"
              description="Get vouched by trusted members of your community to boost your credibility."
            />
            <TrustFeature
              icon={<Shield className="w-6 h-6" />}
              title="Fraud Shield Protection"
              description="Every transaction is monitored for scams. Your safe banking builds trust."
            />

            <Link to="/trust-score">
              <Button size="lg" className="w-full gradient-trust text-white">
                Learn More About Trust Score
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ScoreFactor({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg bg-background/50">
      <div className="flex items-center gap-3">
        <div className="text-accent">{icon}</div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      <span className="text-sm font-bold text-accent">{value}</span>
    </div>
  )
}

function TrustFeature({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-trust flex items-center justify-center text-white">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}


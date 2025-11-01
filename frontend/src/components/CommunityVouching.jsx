import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Users, UserPlus, CheckCircle2, Award, Heart } from "lucide-react"
import { motion } from "framer-motion"

const vouchers = [
  { name: "Rajesh Kumar", relation: "Family", score: 820, verified: true },
  { name: "Priya Sharma", relation: "Colleague", score: 780, verified: true },
  { name: "Amit Patel", relation: "Friend", score: 750, verified: true },
  { name: "Sunita Reddy", relation: "Neighbor", score: 790, verified: true },
]

const achievements = [
  { title: "Trusted Member", description: "5+ people vouched for you", icon: <Award className="w-6 h-6" />, unlocked: true },
  { title: "Community Leader", description: "Vouch for 10+ people", icon: <Users className="w-6 h-6" />, unlocked: true },
  { title: "Trust Builder", description: "Maintain 700+ score for 6 months", icon: <CheckCircle2 className="w-6 h-6" />, unlocked: false },
  { title: "Super Voucher", description: "Help 25+ people build trust", icon: <Heart className="w-6 h-6" />, unlocked: false },
]

export default function CommunityVouching() {
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
          <span className="gradient-trust bg-clip-text text-transparent">Community Vouching</span> System
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Build trust through your network. Get vouched by people who know you. Vouch for others you trust.
          <span className="block mt-2 font-semibold text-foreground">समुदाय का विश्वास = आपका क्रेडिट</span>
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Vouch Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Your Vouchers</h3>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                <Users className="w-3 h-3 mr-1" />
                4 people
              </Badge>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {vouchers.map((voucher, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3 mb-3">
                      <Avatar className="w-12 h-12">
                        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                          {voucher.name.charAt(0)}
                        </div>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm truncate">{voucher.name}</h4>
                          {voucher.verified && (
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">{voucher.relation}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-xs text-muted-foreground">Their Score</span>
                      <span className="text-sm font-bold gradient-trust bg-clip-text text-transparent">
                        {voucher.score}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              <UserPlus className="w-4 h-4 mr-2" />
              Request More Vouches
            </Button>
          </Card>

          {/* How It Works */}
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
            <h3 className="text-xl font-bold mb-4">How Vouching Works</h3>
            <div className="space-y-4">
              <Step
                number={1}
                title="Request a Vouch"
                description="Ask family, friends, or colleagues who trust you to vouch for you"
              />
              <Step
                number={2}
                title="They Verify"
                description="They confirm they know you and trust your character"
              />
              <Step
                number={3}
                title="Boost Your Score"
                description="Each vouch from a verified user increases your Vishwas Score"
              />
            </div>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full gradient-trust flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Achievements</h3>
                <p className="text-xs text-muted-foreground">2 of 4 unlocked</p>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-4 rounded-lg border transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20'
                      : 'bg-muted/30 border-border opacity-60'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      achievement.unlocked
                        ? 'gradient-trust text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        {achievement.unlocked && (
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-yellow-500/10 to-orange-500/10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white text-2xl">
                🏆
              </div>
              <h4 className="font-bold mb-2">Community Leader</h4>
              <p className="text-sm text-muted-foreground mb-4">
                You're in the top 10% of trusted community members!
              </p>
              <Badge className="bg-yellow-500/20 text-yellow-700 border-yellow-500/30">
                +50 Bonus Points
              </Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

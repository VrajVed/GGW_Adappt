import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const actions = [
  { emoji: "💸", label: "Send Money", sublabel: "पैसे भेजें", color: "from-blue-500 to-cyan-500" },
  { emoji: "💰", label: "Check Balance", sublabel: "बैलेंस देखें", color: "from-green-500 to-emerald-500" },
  { emoji: "⚡", label: "Pay Bills", sublabel: "बिल भरें", color: "from-yellow-500 to-orange-500" },
  { emoji: "📱", label: "Recharge", sublabel: "रिचार्ज करें", color: "from-purple-500 to-pink-500" },
  { emoji: "🏦", label: "Bank Statement", sublabel: "खाता विवरण", color: "from-indigo-500 to-blue-500" },
  { emoji: "🔒", label: "Card Lock", sublabel: "कार्ड लॉक", color: "from-red-500 to-orange-500" },
]

export default function Level1Interface({ highContrast, largeFonts }) {
  return (
    <div>
      <Card className={`p-6 mb-6 ${highContrast ? 'bg-black text-white border-white' : ''}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className={`font-bold ${largeFonts ? 'text-2xl' : 'text-xl'}`}>Level 1: Beginner Mode</h3>
          <span className="text-2xl">🔰</span>
        </div>
        <p className={`text-muted-foreground ${highContrast ? 'text-gray-300' : ''} ${largeFonts ? 'text-lg' : 'text-sm'}`}>
          Large buttons, emoji icons, minimal options. Perfect for first-time users and seniors.
        </p>
      </Card>

      {/* Mock Phone Interface */}
      <div className="max-w-sm mx-auto">
        <Card className={`p-8 ${highContrast ? 'bg-black border-2 border-white' : 'bg-gradient-to-br from-primary/5 to-secondary/5'}`}>
          {/* Header */}
          <div className={`text-center mb-8 pb-6 border-b ${highContrast ? 'border-white' : 'border-border'}`}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl mb-3 ${largeFonts ? 'text-5xl' : ''}`}
            >
              👋
            </motion.div>
            <h2 className={`font-bold mb-1 ${largeFonts ? 'text-3xl' : 'text-2xl'} ${highContrast ? 'text-white' : ''}`}>
              Namaste!
            </h2>
            <p className={`${largeFonts ? 'text-xl' : 'text-lg'} ${highContrast ? 'text-gray-300' : 'text-muted-foreground'}`}>
              What would you like to do?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {actions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Button
                  className={`w-full h-auto flex flex-col items-center justify-center gap-3 p-6 rounded-2xl ${
                    highContrast
                      ? 'bg-white text-black hover:bg-gray-200 border-2 border-white'
                      : `bg-gradient-to-br ${action.color} hover:opacity-90 text-white border-0`
                  } ${largeFonts ? 'min-h-[140px]' : 'min-h-[120px]'}`}
                >
                  <span className={largeFonts ? 'text-5xl' : 'text-4xl'}>{action.emoji}</span>
                  <div className="text-center">
                    <p className={`font-bold ${largeFonts ? 'text-xl' : 'text-base'}`}>
                      {action.label}
                    </p>
                    <p className={`${largeFonts ? 'text-base' : 'text-xs'} opacity-90 mt-1`}>
                      {action.sublabel}
                    </p>
                  </div>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Help Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="mt-6"
          >
            <Button
              variant="outline"
              className={`w-full ${largeFonts ? 'text-xl py-8' : 'text-lg py-6'} rounded-xl ${
                highContrast ? 'border-2 border-white text-white hover:bg-white hover:text-black' : ''
              }`}
            >
              <span className="mr-2 text-2xl">🆘</span>
              Need Help?
            </Button>
          </motion.div>
        </Card>
      </div>

      {/* Features List */}
      <div className="grid md:grid-cols-3 gap-4 mt-8">
        <FeatureCard
          title="Large Touch Targets"
          description="Buttons are 120px+ for easy tapping"
          icon="👆"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Emoji Icons"
          description="Universal symbols everyone understands"
          icon="😊"
          highContrast={highContrast}
        />
        <FeatureCard
          title="Bilingual Labels"
          description="English + Hindi for clarity"
          icon="🌐"
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

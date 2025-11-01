import { Card } from "@/components/ui/card"
import { Mic, Shield, Layers, Heart, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const features = [
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Voice Banking",
    description: "Bank in Hindi, English, or your local language. Just speak naturally.",
    gradient: "from-primary to-secondary",
    link: "/voice-banking",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ScamShield",
    description: "Real-time fraud detection with educational alerts to keep you safe.",
    gradient: "from-destructive to-orange-500",
    link: "/scam-shield",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "3-Level Interface",
    description: "Choose your comfort: Simple, Standard, or Advanced banking UI.",
    gradient: "from-accent to-secondary",
    link: "/simple-banking",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Saathi AI Assistant",
    description: "Your personal banking buddy, guiding every step with patience.",
    gradient: "from-pink-500 to-rose-500",
    link: "/voice-banking",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Fully Accessible",
    description: "Screen reader support, high contrast modes, and dyslexia-friendly fonts.",
    gradient: "from-blue-500 to-cyan-500",
    link: "/simple-banking",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Verification",
    description: "Visual and voice confirmations for every transaction. No surprises.",
    gradient: "from-yellow-500 to-orange-500",
    link: "/voice-banking",
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Banking Made <span className="gradient-primary bg-clip-text text-transparent">Simple & Safe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed with accessibility, trust, and simplicity at its core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={feature.link}>
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


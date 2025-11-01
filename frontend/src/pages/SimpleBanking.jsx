import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import UILevelSwitcher from "@/components/UILevelSwitcher"
import { motion } from "framer-motion"
import { Layers, Eye, Hand, Volume2 } from "lucide-react"

export default function SimpleBankingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-hero">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Layers className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Adaptive Interface</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Banking at <span className="gradient-primary bg-clip-text text-transparent">Your Comfort Level</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Choose from 3 interface levels: Simple for beginners, Standard for everyday use, 
                or Advanced for power users. Switch anytime.
                <span className="block mt-2 font-semibold text-foreground">आपकी सुविधा। आपकी पसंद।</span>
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                <FeaturePill icon={<Layers />} text="3 UI Levels" />
                <FeaturePill icon={<Eye />} text="High Contrast" />
                <FeaturePill icon={<Hand />} text="Large Touch Targets" />
                <FeaturePill icon={<Volume2 />} text="Screen Reader" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* UI Level Switcher Demo */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <UILevelSwitcher />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function FeaturePill({ icon, text }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm">
      <div className="text-accent">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  )
}


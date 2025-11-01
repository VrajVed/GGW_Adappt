import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import TrustScoreDashboard from "@/components/TrustScoreDashboard"
import CreditBuilding from "@/components/CreditBuilding"
import CommunityVouching from "@/components/CommunityVouching"
import FraudShield from "@/components/FraudShield"
import { motion } from "framer-motion"
import { TrendingUp, Shield, Award } from "lucide-react"

export default function TrustScorePage() {
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
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Vishwas Score</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Build Your <span className="gradient-trust bg-clip-text text-transparent">Trust Score</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                No credit card? No problem. Build creditworthiness through everyday actions like bill payments,
                safe transactions, and community trust.
                <span className="block mt-2 font-semibold text-foreground">विश्वास बनाएं। क्रेडिट पाएं।</span>
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                <FeaturePill icon={<TrendingUp />} text="Build Credit" />
                <FeaturePill icon={<Shield />} text="Fraud Protection" />
                <FeaturePill icon={<Award />} text="Earn Rewards" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Dashboard */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <TrustScoreDashboard />
          </div>
        </section>

        {/* Credit Building */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <CreditBuilding />
          </div>
        </section>

        {/* Community Vouching */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <CommunityVouching />
          </div>
        </section>

        {/* Fraud Shield */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <FraudShield />
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


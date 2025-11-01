import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import VoiceInterface from "@/components/VoiceInterface"
import SaathiAssistant from "@/components/SaathiAssistant"
import { motion } from "framer-motion"
import { Mic, Globe, CheckCircle, AlertCircle } from "lucide-react"
import DisplayCards from "@/components/ui/display-cards"

export default function VoiceBankingPage() {
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Mic className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Bol ke Banking</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Bank in <span className="gradient-primary bg-clip-text text-transparent">Your Voice</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                No typing. No complex menus. Just speak naturally in Hindi, English, or your local language.
                Your Saathi AI assistant understands and helps every step of the way.
              </p>

              {/* Language Support Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                <LanguagePill lang="हिंदी" />
                <LanguagePill lang="English" />
                <LanguagePill lang="मराठी" />
                <LanguagePill lang="தமிழ்" />
                <LanguagePill lang="తెలుగు" />
                <LanguagePill lang="বাংলা" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Voice Demo */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <VoiceInterface />
          </div>
        </section>

        {/* Saathi Assistant Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Meet <span className="gradient-primary bg-clip-text text-transparent">Saathi</span> - Your Banking Buddy
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Patient, multilingual, and always ready to help. Saathi guides you through every transaction with care.
              </p>
            </div>
            
            <SaathiAssistant />
          </div>
        </section>

        {/* Features Section (replaced with stacked DisplayCards) */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <DisplayCards
              cards={[
                {
                  icon: <Mic className="w-8 h-8" />,
                  title: "Natural Speech",
                  description: "Speak naturally. No need to memorize commands or keywords.",
                  date: "",
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50",
                },
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "10+ Languages",
                  description: "Hindi, English, Tamil, Telugu, Marathi, Bengali, and more.",
                  date: "",
                  className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Visual Confirmation",
                  description: "See and confirm every action before it's executed.",
                  date: "",
                  className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                },
                {
                  icon: <AlertCircle className="w-8 h-8" />,
                  title: "Safety Checks",
                  description: "Automatic scam detection and fraud prevention on every command.",
                  date: "",
                  className: "[grid-area:stack] translate-x-48 translate-y-28 hover:translate-y-14",
                },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function LanguagePill({ lang }) {
  return (
    <div className="px-4 py-2 rounded-full bg-card border border-border shadow-sm flex items-center gap-2">
      <Globe className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium">{lang}</span>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-card border border-border shadow-sm"
    >
      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </motion.div>
  )
}


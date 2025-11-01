import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import TrustScorePreview from "@/components/TrustScorePreview"
import DisplayCards from "@/components/ui/display-cards"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
  <TrustScorePreview />
  <DisplayCards />
      <Footer />
    </div>
  )
}


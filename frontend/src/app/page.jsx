import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import TrustScorePreview from "@/components/TrustScorePreview"
import FeaturesGrid from "@/components/FeaturesGrid"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustScorePreview />
      <FeaturesGrid />
      <Footer />
    </div>
  )
}
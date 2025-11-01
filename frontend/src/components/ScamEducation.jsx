import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Mail, CreditCard, AlertTriangle, CheckCircle2, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const commonScams = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Fake Customer Care Calls",
    titleHi: "नकली कस्टमर केयर कॉल",
    description: "Scammers pretend to be bank officials asking for OTP or card details",
    descriptionHi: "स्कैमर बैंक अधिकारी होने का दिखावा करके OTP या कार्ड विवरण मांगते हैं",
    prevention: ["Never share OTP with anyone", "Banks never ask for PIN/CVV", "Verify caller identity"],
    preventionHi: ["किसी के साथ OTP साझा न करें", "बैंक कभी PIN/CVV नहीं मांगते", "कॉलर की पहचान सत्यापित करें"],
    color: "from-red-500 to-orange-500",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Phishing SMS/WhatsApp",
    titleHi: "फिशिंग SMS/WhatsApp",
    description: "Fake messages with malicious links claiming urgent action needed",
    descriptionHi: "दुर्भावनापूर्ण लिंक वाले नकली संदेश जो तत्काल कार्रवाई का दावा करते हैं",
    prevention: ["Don't click unknown links", "Check sender authenticity", "Report suspicious messages"],
    preventionHi: ["अज्ञात लिंक पर क्लिक न करें", "प्रेषक की प्रामाणिकता जांचें", "संदिग्ध संदेशों की रिपोर्ट करें"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Fake Payment Requests",
    titleHi: "नकली भुगतान अनुरोध",
    description: "Fraudulent UPI requests disguised as refunds or verifications",
    descriptionHi: "रिफंड या सत्यापन के रूप में छिपे धोखाधड़ी UPI अनुरोध",
    prevention: ["Verify merchant name", "Check transaction details", "Never accept unknown requests"],
    preventionHi: ["व्यापारी का नाम सत्यापित करें", "लेनदेन विवरण जांचें", "अज्ञात अनुरोध स्वीकार न करें"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Lottery/Prize Scams",
    titleHi: "लॉटरी/पुरस्कार स्कैम",
    description: "Emails claiming you won money but need to pay fees first",
    descriptionHi: "ईमेल दावा करते हैं कि आपने पैसे जीते लेकिन पहले शुल्क देना होगा",
    prevention: ["No legitimate prize needs payment", "Verify through official channels", "Report to authorities"],
    preventionHi: ["कोई वैध पुरस्कार भुगतान की मांग नहीं करता", "आधिकारिक चैनलों के माध्यम से सत्यापित करें", "अधिकारियों को रिपोर्ट करें"],
    color: "from-green-500 to-emerald-500",
  },
]

const safeTips = [
  {
    icon: "🔐",
    title: "Never Share OTP",
    titleHi: "OTP कभी साझा न करें",
    description: "OTP is like your password. Banks never ask for it.",
    descriptionHi: "OTP आपका पासवर्ड है। बैंक कभी इसे नहीं मांगते।",
  },
  {
    icon: "📞",
    title: "Verify Before Action",
    titleHi: "कार्रवाई से पहले सत्यापित करें",
    description: "Always call official numbers to confirm requests.",
    descriptionHi: "अनुरोधों की पुष्टि के लिए हमेशा आधिकारिक नंबर पर कॉल करें।",
  },
  {
    icon: "🔗",
    title: "Check Links Carefully",
    titleHi: "लिंक ध्यान से जांचें",
    description: "Hover over links to see actual URL before clicking.",
    descriptionHi: "क्लिक करने से पहले वास्तविक URL देखने के लिए लिंक पर होवर करें।",
  },
  {
    icon: "⏰",
    title: "Don't Rush Decisions",
    titleHi: "जल्दबाजी में निर्णय न लें",
    description: "Scammers create urgency. Take your time to verify.",
    descriptionHi: "स्कैमर जल्दबाजी बनाते हैं। सत्यापित करने के लिए समय लें।",
  },
]

export default function ScamEducation({ hindiMode }) {
  const [expandedScam, setExpandedScam] = useState(null)

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <BookOpen className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            {hindiMode ? "शिक्षा केंद्र" : "Education Center"}
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {hindiMode ? "आम स्कैम और बचाव" : "Common Scams & Protection"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {hindiMode
            ? "जानें कि कैसे स्कैमर काम करते हैं और अपनी सुरक्षा कैसे करें"
            : "Learn how scammers operate and how to protect yourself"}
        </p>
      </motion.div>

      {/* Common Scams */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {commonScams.map((scam, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${scam.color} flex items-center justify-center text-white flex-shrink-0`}>
                  {scam.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">
                    {hindiMode ? scam.titleHi : scam.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {hindiMode ? scam.descriptionHi : scam.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold">
                    {hindiMode ? "कैसे बचें:" : "How to Protect:"}
                  </span>
                </div>
                {(hindiMode ? scam.preventionHi : scam.prevention).map((tip, tipIndex) => (
                  <div key={tipIndex} className="flex items-start gap-2 pl-6">
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{tip}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => setExpandedScam(expandedScam === index ? null : index)}
              >
                {hindiMode ? "उदाहरण देखें" : "See Example"}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Safety Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {hindiMode ? "🛡️ सुरक्षा के सुनहरे नियम" : "🛡️ Golden Rules of Safety"}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-3">{tip.icon}</div>
                <h4 className="font-semibold mb-2">
                  {hindiMode ? tip.titleHi : tip.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {hindiMode ? tip.descriptionHi : tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Report Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12"
      >
        <Card className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="text-center max-w-2xl mx-auto">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              {hindiMode ? "स्कैम का शिकार हुए?" : "Fell for a Scam?"}
            </h3>
            <p className="text-muted-foreground mb-6">
              {hindiMode
                ? "तुरंत अपने बैंक को सूचित करें और साइबर अपराध पोर्टल पर रिपोर्ट करें"
                : "Immediately inform your bank and report to cybercrime portal"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="destructive">
                {hindiMode ? "बैंक को कॉल करें" : "Call Bank"}
              </Button>
              <Button size="lg" variant="outline">
                {hindiMode ? "साइबर क्राइम रिपोर्ट" : "Report Cybercrime"}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {hindiMode
                ? "राष्ट्रीय साइबर अपराध हेल्पलाइन: 1930"
                : "National Cybercrime Helpline: 1930"}
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

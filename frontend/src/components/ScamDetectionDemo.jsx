import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle2, XCircle, Phone, MessageSquare, Mail, CreditCard } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const scamScenarios = [
  {
    id: 1,
    type: "phone",
    icon: <Phone className="w-6 h-6" />,
    title: "Fake Bank Call",
    titleHi: "नकली बैंक कॉल",
    message: "Unknown number claiming to be from your bank asking for OTP",
    messageHi: "अनजान नंबर से कॉल आया है जो बैंक होने का दावा करता है और OTP मांग रहा है",
    riskLevel: "critical",
    indicators: ["Unknown number", "Asking for OTP", "Creating urgency"],
    indicatorsHi: ["अनजान नंबर", "OTP मांग रहा है", "जल्दबाजी बना रहा है"],
  },
  {
    id: 2,
    type: "sms",
    icon: <MessageSquare className="w-6 h-6" />,
    title: "KYC Update SMS",
    titleHi: "KYC अपडेट SMS",
    message: "SMS with link saying 'Your KYC will expire, update now'",
    messageHi: "SMS में लिंक है जो कहता है 'आपका KYC समाप्त हो जाएगा, अभी अपडेट करें'",
    riskLevel: "high",
    indicators: ["Suspicious link", "False urgency", "Poor grammar"],
    indicatorsHi: ["संदिग्ध लिंक", "झूठी जल्दबाजी", "खराब व्याकरण"],
  },
  {
    id: 3,
    type: "upi",
    icon: <CreditCard className="w-6 h-6" />,
    title: "Fake Payment Request",
    titleHi: "नकली भुगतान अनुरोध",
    message: "UPI request from unknown merchant for 'verification'",
    messageHi: "अनजान व्यापारी से UPI अनुरोध 'वेरिफिकेशन' के लिए",
    riskLevel: "high",
    indicators: ["Unknown merchant", "Verification claim", "Unusual amount"],
    indicatorsHi: ["अनजान व्यापारी", "वेरिफिकेशन का दावा", "असामान्य राशि"],
  },
  {
    id: 4,
    type: "email",
    icon: <Mail className="w-6 h-6" />,
    title: "Prize Winner Email",
    titleHi: "पुरस्कार विजेता ईमेल",
    message: "Email saying you won ₹10 lakhs, pay ₹5000 processing fee",
    messageHi: "ईमेल कहता है आपने ₹10 लाख जीता, ₹5000 प्रोसेसिंग फीस दें",
    riskLevel: "critical",
    indicators: ["Too good to be true", "Advance payment", "Poor formatting"],
    indicatorsHi: ["सच होने के लिए बहुत अच्छा", "अग्रिम भुगतान", "खराब फॉर्मेटिंग"],
  },
]

export default function ScamDetectionDemo({ hindiMode, textToSpeech }) {
  const [selectedScenario, setSelectedScenario] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [showResult, setShowResult] = useState(false)

  const handleAnalyze = (scenarioId) => {
    setSelectedScenario(scenarioId)
    setIsAnalyzing(true)
    setShowResult(false)

    if (textToSpeech) {
      // Simulate text-to-speech
      console.log("Text-to-speech: Analyzing transaction for scam indicators...")
    }

    setTimeout(() => {
      setIsAnalyzing(false)
      setShowResult(true)
    }, 2500)
  }

  const selectedScenarioData = scamScenarios.find(s => s.id === selectedScenario)

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
          {hindiMode ? "इंटरैक्टिव स्कैम डिटेक्शन" : "Interactive Scam Detection"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {hindiMode
            ? "देखें कि कैसे हमारा AI रियल-टाइम में स्कैम को पहचानता है"
            : "See how our AI identifies scams in real-time"}
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Scenario Selection */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">
              {hindiMode ? "स्कैम परिदृश्य चुनें" : "Choose a Scam Scenario"}
            </h3>
            <div className="space-y-3">
              {scamScenarios.map((scenario, index) => (
                <motion.button
                  key={scenario.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => handleAnalyze(scenario.id)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all hover:shadow-md ${
                    selectedScenario === scenario.id
                      ? 'border-destructive bg-destructive/5'
                      : 'border-border hover:border-destructive/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      scenario.riskLevel === 'critical'
                        ? 'bg-red-500/10 text-red-600'
                        : 'bg-yellow-500/10 text-yellow-600'
                    }`}>
                      {scenario.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">
                          {hindiMode ? scenario.titleHi : scenario.title}
                        </h4>
                        <Badge variant={scenario.riskLevel === 'critical' ? 'destructive' : 'secondary'} className="text-xs">
                          {scenario.riskLevel === 'critical' ? (hindiMode ? 'गंभीर' : 'Critical') : (hindiMode ? 'उच्च' : 'High')}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {hindiMode ? scenario.messageHi : scenario.message}
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Analysis Result */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 h-full">
            <h3 className="text-xl font-bold mb-4">
              {hindiMode ? "विश्लेषण परिणाम" : "Analysis Result"}
            </h3>

            <AnimatePresence mode="wait">
              {!selectedScenario ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-64 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                    <AlertTriangle className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {hindiMode
                      ? "विश्लेषण देखने के लिए एक परिदृश्य चुनें"
                      : "Select a scenario to see the analysis"}
                  </p>
                </motion.div>
              ) : isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center h-64"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent mb-4"
                  />
                  <p className="text-lg font-semibold">
                    {hindiMode ? "स्कैम संकेतकों के लिए विश्लेषण कर रहे हैं..." : "Analyzing for scam indicators..."}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : showResult && selectedScenarioData ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {/* Danger Alert */}
                  <Card className="p-4 bg-red-500/10 border-2 border-red-500/20">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-bold text-red-600 mb-1">
                          {hindiMode ? "⚠️ स्कैम का पता चला!" : "⚠️ SCAM DETECTED!"}
                        </h4>
                        <p className="text-sm text-red-600">
                          {hindiMode
                            ? "यह एक धोखाधड़ी का प्रयास है। इस लेनदेन को तुरंत रद्द करें।"
                            : "This is a fraudulent attempt. Cancel this transaction immediately."}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Indicators */}
                  <div>
                    <h4 className="font-semibold mb-3">
                      {hindiMode ? "पहचाने गए संकेतक:" : "Identified Indicators:"}
                    </h4>
                    <div className="space-y-2">
                      {(hindiMode ? selectedScenarioData.indicatorsHi : selectedScenarioData.indicators).map((indicator, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2 p-3 rounded-lg bg-muted"
                        >
                          <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0" />
                          <span className="text-sm">{indicator}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Risk Score */}
                  <Card className="p-4 bg-gradient-to-br from-red-500/10 to-orange-500/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">
                        {hindiMode ? "जोखिम स्कोर:" : "Risk Score:"}
                      </span>
                      <Badge variant="destructive" className="text-lg px-3 py-1">
                        {selectedScenarioData.riskLevel === 'critical' ? '95%' : '78%'}
                      </Badge>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: selectedScenarioData.riskLevel === 'critical' ? '95%' : '78%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </Card>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Button variant="destructive" className="w-full">
                      <XCircle className="w-4 h-4 mr-2" />
                      {hindiMode ? "रद्द करें" : "Block"}
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setShowResult(false)}>
                      {hindiMode ? "और जानें" : "Learn More"}
                    </Button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

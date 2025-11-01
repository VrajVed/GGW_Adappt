import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Volume2, CheckCircle, Send } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const demoCommands = [
  { text: "पैसे भेजो Rajesh को ₹500", translation: "Send ₹500 to Rajesh", lang: "Hindi" },
  { text: "Check my balance", translation: "Check my balance", lang: "English" },
  { text: "बिजली का बिल भरो", translation: "Pay electricity bill", lang: "Hindi" },
  { text: "माझे खाते शिल्लक दाखवा", translation: "Show my account balance", lang: "Marathi" },
]

export default function VoiceInterface() {
  const [isListening, setIsListening] = useState(false)
  const [selectedCommand, setSelectedCommand] = useState(0)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleVoiceCommand = (index) => {
    setSelectedCommand(index)
    setIsListening(true)
    
    setTimeout(() => {
      setIsListening(false)
      setShowConfirmation(true)
    }, 2000)
  }

  const handleConfirm = () => {
    setShowConfirmation(false)
    setTimeout(() => {
      setSelectedCommand(0)
    }, 1000)
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left: Voice Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-8 h-full">
          <h3 className="text-2xl font-bold mb-6">Try a Voice Command</h3>
          
          {/* Microphone Button */}
          <div className="flex flex-col items-center mb-8">
            <motion.button
              className={`w-32 h-32 rounded-full flex items-center justify-center shadow-2xl transition-all ${
                isListening ? 'gradient-primary' : 'bg-gradient-to-br from-muted to-muted/50'
              }`}
              onClick={() => handleVoiceCommand(selectedCommand)}
              whileTap={{ scale: 0.95 }}
              animate={isListening ? { scale: [1, 1.05, 1] } : {}}
              transition={{ repeat: isListening ? Infinity : 0, duration: 1 }}
            >
              {isListening ? (
                <Mic className="w-16 h-16 text-white" />
              ) : (
                <MicOff className="w-16 h-16 text-muted-foreground" />
              )}
            </motion.button>
            
            <motion.div
              className="mt-4 text-center"
              animate={isListening ? { opacity: [1, 0.5, 1] } : {}}
              transition={{ repeat: isListening ? Infinity : 0, duration: 1.5 }}
            >
              <p className="text-lg font-semibold">
                {isListening ? "Listening..." : "Tap to speak"}
              </p>
              <p className="text-sm text-muted-foreground">
                {isListening ? "Speak now in any language" : "Choose a demo command below"}
              </p>
            </motion.div>

            {/* Audio Wave Animation */}
            <AnimatePresence>
              {isListening && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex gap-2 mt-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 bg-primary rounded-full"
                      animate={{
                        height: [20, 40, 20],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Demo Commands */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground mb-3">Demo Commands:</p>
            {demoCommands.map((cmd, index) => (
              <button
                key={index}
                onClick={() => handleVoiceCommand(index)}
                className={`w-full p-4 rounded-lg border-2 text-left transition-all hover:border-primary hover:bg-primary/5 ${
                  selectedCommand === index ? 'border-primary bg-primary/5' : 'border-border'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold">{cmd.text}</p>
                      <Badge variant="secondary" className="text-xs">{cmd.lang}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{cmd.translation}</p>
                  </div>
                  <Volume2 className="w-5 h-5 text-primary flex-shrink-0" />
                </div>
              </button>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Right: Confirmation & Results */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-2xl font-bold mb-6">Transaction Preview</h3>
          
          <AnimatePresence mode="wait">
            {!showConfirmation ? (
              <motion.div
                key="waiting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-64 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Mic className="w-10 h-10 text-muted-foreground" />
                </div>
                <p className="text-lg text-muted-foreground">
                  Select or speak a command to see the confirmation
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="space-y-6"
              >
                {/* Command Recognition */}
                <div className="p-4 rounded-lg bg-background border border-border">
                  <p className="text-sm text-muted-foreground mb-2">You said:</p>
                  <p className="text-lg font-semibold">{demoCommands[selectedCommand].text}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "{demoCommands[selectedCommand].translation}"
                  </p>
                </div>

                {/* Transaction Details */}
                <div className="p-6 rounded-lg bg-card border-2 border-primary/20">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Confirm Transaction</h4>
                      {selectedCommand === 0 && (
                        <>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">To:</span>
                              <span className="font-medium">Rajesh Kumar</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Amount:</span>
                              <span className="font-bold text-lg">₹500</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Account:</span>
                              <span className="font-medium">••••5678</span>
                            </div>
                          </div>
                        </>
                      )}
                      {selectedCommand === 1 && (
                        <>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Account Balance:</span>
                              <span className="font-bold text-lg">₹12,450</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Available:</span>
                              <span className="font-medium">₹12,450</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Safety Badge */}
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-accent/10 border border-accent/20 mb-4">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="text-sm font-medium text-accent">Safe Transaction - No scam detected</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      onClick={() => setShowConfirmation(false)}
                      className="w-full"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleConfirm}
                      className="w-full gradient-primary text-white"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Confirm
                    </Button>
                  </div>
                </div>

                {/* Voice Confirmation */}
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Volume2 className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Voice Confirmation</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Say <span className="font-semibold text-foreground">"हां, भेजो"</span> or{" "}
                    <span className="font-semibold text-foreground">"Yes, send"</span> to confirm
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Card>
      </motion.div>
    </div>
  )
}


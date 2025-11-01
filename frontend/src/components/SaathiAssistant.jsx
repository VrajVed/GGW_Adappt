import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bot, User, Send, Mic, HelpCircle, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const quickQuestions = [
  { q: "How do I send money?", translation: "पैसे कैसे भेजें?" },
  { q: "What's my balance?", translation: "मेरा बैलेंस क्या है?" },
  { q: "Pay electricity bill", translation: "बिजली का बिल भरो" },
  { q: "How to use voice commands?", translation: "वॉयस कमांड कैसे करें?" },
]

export default function SaathiAssistant() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "saathi",
      text: "Namaste! I'm Saathi, your banking buddy. How can I help you today?",
      translation: "नमस्ते! मैं साथी हूं, आपका बैंकिंग दोस्त। आज मैं आपकी कैसे मदद कर सकता हूं?",
      suggestions: ["Send money", "Check balance", "Pay bills", "Learn more"],
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      text: text,
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const responses = [
        {
          text: "I understand you want to send money. I'll guide you through it step by step. First, who would you like to send money to?",
          translation: "मैं समझता हूं कि आप पैसे भेजना चाहते हैं। मैं आपको कदम दर कदम मार्गदर्शन करूंगा।",
          suggestions: ["Enter name", "Select from contacts", "Use voice", "Cancel"],
        },
        {
          text: "Your current balance is ₹12,450. You have no pending transactions. Would you like to see your transaction history?",
          translation: "आपका वर्तमान बैलेंस ₹12,450 है।",
          suggestions: ["Show history", "Download statement", "Done"],
        },
        {
          text: "I can help you with that! You can use voice commands in any language - just tap the microphone and speak naturally. Try saying 'पैसे भेजो' or 'Send money'.",
          translation: "मैं इसमें आपकी मदद कर सकता हूं!",
          suggestions: ["Try voice command", "See examples", "Learn more"],
        },
      ]

      const saathiMessage = {
        id: messages.length + 2,
        type: "saathi",
        ...responses[Math.floor(Math.random() * responses.length)],
      }
      
      setIsTyping(false)
      setMessages((prev) => [...prev, saathiMessage])
    }, 1500)
  }

  const handleQuickQuestion = (question) => {
    handleSend(question)
  }

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {/* Left: Quick Actions */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Saathi</h3>
              <Badge variant="secondary" className="text-xs">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Assistant
              </Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Your personal banking guide. Patient, multilingual, and always here to help.
          </p>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-primary" />
            Quick Questions
          </h4>
          <div className="space-y-2">
            {quickQuestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleQuickQuestion(item.q)}
                className="w-full p-3 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors text-left"
              >
                <p className="text-sm font-medium">{item.q}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.translation}</p>
              </button>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-secondary/10">
          <h4 className="font-semibold mb-2">Multi-Language Support</h4>
          <p className="text-sm text-muted-foreground mb-3">
            Saathi speaks Hindi, English, Marathi, Tamil, Telugu, Bengali, and more.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">हिंदी</Badge>
            <Badge variant="outline">English</Badge>
            <Badge variant="outline">मराठी</Badge>
            <Badge variant="outline">தமிழ்</Badge>
          </div>
        </Card>
      </motion.div>

      {/* Right: Chat Interface */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:col-span-2"
      >
        <Card className="h-[600px] flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Saathi AI</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <p className="text-xs text-muted-foreground">Always available</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
                >
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <div className={`w-full h-full flex items-center justify-center ${
                      message.type === "saathi" ? "gradient-primary" : "bg-muted"
                    }`}>
                      {message.type === "saathi" ? (
                        <Bot className="w-5 h-5 text-white" />
                      ) : (
                        <User className="w-5 h-5 text-foreground" />
                      )}
                    </div>
                  </Avatar>

                  <div className={`flex-1 ${message.type === "user" ? "flex justify-end" : ""}`}>
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.type === "saathi"
                          ? "bg-muted"
                          : "gradient-primary text-white"
                      } max-w-[80%]`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.translation && (
                        <p className={`text-xs mt-1 ${
                          message.type === "saathi" ? "text-muted-foreground" : "text-white/70"
                        }`}>
                          {message.translation}
                        </p>
                      )}
                    </div>

                    {message.suggestions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.suggestions.map((suggestion, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            onClick={() => handleSend(suggestion)}
                            className="text-xs"
                          >
                            {suggestion}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <Avatar className="w-8 h-8 flex-shrink-0">
                  <div className="w-full h-full gradient-primary flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                </Avatar>
                <div className="inline-block p-3 rounded-lg bg-muted">
                  <div className="flex gap-1">
                    <motion.div
                      className="w-2 h-2 rounded-full bg-muted-foreground"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-muted-foreground"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-2 h-2 rounded-full bg-muted-foreground"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="flex-shrink-0"
                aria-label="Voice input"
              >
                <Mic className="w-5 h-5" />
              </Button>
              <Input
                placeholder="Type your message... (हिंदी or English)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend(inputValue)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSend(inputValue)}
                className="gradient-primary text-white flex-shrink-0"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}


import { Card } from "@/components/ui/card"
import { Shield, Users, TrendingDown, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function ScamStats({ hindiMode }) {
  const stats = [
    {
      icon: <Shield className="w-6 h-6" />,
      value: "12,450",
      label: hindiMode ? "स्कैम रोके गए" : "Scams Blocked",
      subLabel: hindiMode ? "इस महीने" : "This month",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "2.5M+",
      label: hindiMode ? "सुरक्षित यूजर्स" : "Protected Users",
      subLabel: hindiMode ? "और बढ़ रहा है" : "And growing",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingDown className="w-6 h-6" />,
      value: "98.7%",
      label: hindiMode ? "डिटेक्शन रेट" : "Detection Rate",
      subLabel: hindiMode ? "उद्योग में सर्वश्रेष्ठ" : "Industry leading",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "₹45Cr",
      label: hindiMode ? "बचाए गए पैसे" : "Money Saved",
      subLabel: hindiMode ? "यूजर्स के लिए" : "For our users",
      color: "from-yellow-500 to-orange-500",
    },
  ]

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
          {hindiMode ? "हमारा प्रभाव" : "Our Impact"}
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {hindiMode
            ? "रियल-टाइम में हजारों स्कैम को रोकना और लाखों लोगों को सुरक्षित रखना"
            : "Blocking thousands of scams in real-time and keeping millions safe"}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className={`p-6 bg-gradient-to-br ${stat.color} text-white border-0 shadow-lg`}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  {stat.icon}
                </div>
              </div>
              <div className="mb-2">
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
              <p className="font-semibold text-lg mb-1">{stat.label}</p>
              <p className="text-sm text-white/80">{stat.subLabel}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


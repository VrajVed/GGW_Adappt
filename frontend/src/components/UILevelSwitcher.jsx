import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import Level1Interface from "@/components/Level1Interface"
import Level2Interface from "@/components/Level2Interface"
import Level3Interface from "@/components/Level3Interface"
import { Eye, Type, Volume2 } from "lucide-react"
import { motion } from "framer-motion"

export default function UILevelSwitcher() {
  const [highContrast, setHighContrast] = useState(false)
  const [largeFonts, setLargeFonts] = useState(false)
  const [screenReader, setScreenReader] = useState(false)

  return (
    <div className="space-y-6">
      {/* Accessibility Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <h3 className="text-xl font-bold mb-4">Accessibility Settings</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">High Contrast</p>
                  <p className="text-xs text-muted-foreground">Enhanced visibility</p>
                </div>
              </div>
              <Switch checked={highContrast} onCheckedChange={setHighContrast} />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Large Fonts</p>
                  <p className="text-xs text-muted-foreground">Easier reading</p>
                </div>
              </div>
              <Switch checked={largeFonts} onCheckedChange={setLargeFonts} />
            </div>
            
            <div className="flex items-center justify-between p-4 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Screen Reader</p>
                  <p className="text-xs text-muted-foreground">Audio assistance</p>
                </div>
              </div>
              <Switch checked={screenReader} onCheckedChange={setScreenReader} />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Level Switcher */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Tabs defaultValue="level1" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Choose Your Interface Level</h2>
          </div>
          
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="level1" className="text-base">
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold">Level 1</span>
                <Badge variant="secondary" className="text-xs">Beginner</Badge>
              </div>
            </TabsTrigger>
            <TabsTrigger value="level2" className="text-base">
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold">Level 2</span>
                <Badge variant="secondary" className="text-xs">Standard</Badge>
              </div>
            </TabsTrigger>
            <TabsTrigger value="level3" className="text-base">
              <div className="flex flex-col items-center gap-1">
                <span className="font-semibold">Level 3</span>
                <Badge variant="secondary" className="text-xs">Advanced</Badge>
              </div>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="level1">
            <Level1Interface highContrast={highContrast} largeFonts={largeFonts} />
          </TabsContent>
          
          <TabsContent value="level2">
            <Level2Interface highContrast={highContrast} largeFonts={largeFonts} />
          </TabsContent>
          
          <TabsContent value="level3">
            <Level3Interface highContrast={highContrast} largeFonts={largeFonts} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}


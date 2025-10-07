"use client"

import { useState } from "react"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { TaskBoard } from "@/components/task-board"
import { SettingsDialog } from "@/components/settings-dialog"
import { WarningPopup } from "@/components/warning-popup"
import { Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isExpanded, setIsExpanded] = useState(true)
  const [workTime, setWorkTime] = useState(25)
  const [breakTime, setBreakTime] = useState(5)

  const handleSaveSettings = (newWorkTime: number, newBreakTime: number) => {
    setWorkTime(newWorkTime)
    setBreakTime(newBreakTime)
  }

  return (
    <main className="h-screen w-screen overflow-y-auto bg-background p-2">
      <div className="w-full min-h-full flex flex-col rounded-lg border border-border">
        {/* Barra superior con título */}
        <div className="bg-white border-b border-border px-4 py-2 text-center">
          <h1 className="text-lg font-bold text-foreground">
            Super Pomodoro
            <span className="text-sm font-normal text-muted-foreground ml-1">by Intelligy Art's</span>
          </h1>
        </div>

        <div className="absolute top-4 left-4 z-10">
          <SettingsDialog workTime={workTime} breakTime={breakTime} onSave={handleSaveSettings} />
        </div>

        <div className="absolute top-4 right-4 z-10">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            size="sm"
            variant="outline"
            className="border-border bg-card/80 backdrop-blur-sm hover:bg-card"
          >
            {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>

        <PomodoroTimer
          isRunning={isTimerRunning}
          onToggle={() => setIsTimerRunning(!isTimerRunning)}
          isExpanded={isExpanded}
          workTime={workTime}
          breakTime={breakTime}
        />
        <TaskBoard />
        
        <WarningPopup />
      </div>
    </main>
  )
}

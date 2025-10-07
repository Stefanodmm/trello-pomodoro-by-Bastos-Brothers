"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

interface PomodoroTimerProps {
  isRunning: boolean
  onToggle: () => void
  isExpanded?: boolean
  workTime?: number
  breakTime?: number
}

export function PomodoroTimer({
  isRunning,
  onToggle,
  isExpanded = true,
  workTime = 25,
  breakTime = 5,
}: PomodoroTimerProps) {
  const [seconds, setSeconds] = useState(workTime * 60)
  const [mode, setMode] = useState<"work" | "break">("work")

  useEffect(() => {
    if (!isRunning) {
      setSeconds(mode === "work" ? workTime * 60 : breakTime * 60)
    }
  }, [workTime, breakTime, mode, isRunning])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1)
      }, 1000)
    } else if (seconds === 0) {
      if (mode === "work") {
        setMode("break")
        setSeconds(breakTime * 60)
      } else {
        setMode("work")
        setSeconds(workTime * 60)
      }
      onToggle()
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, seconds, mode, onToggle, workTime, breakTime])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  const totalSeconds = mode === "work" ? workTime * 60 : breakTime * 60
  const progress = ((totalSeconds - seconds) / totalSeconds) * 100

  const resetTimer = () => {
    setSeconds(mode === "work" ? workTime * 60 : breakTime * 60)
    if (isRunning) onToggle()
  }

  const toggleMode = () => {
    const newMode = mode === "work" ? "break" : "work"
    setMode(newMode)
    setSeconds(newMode === "work" ? workTime * 60 : breakTime * 60)
    if (isRunning) onToggle()
  }

  if (!isExpanded) {
    return (
      <div className="border-b border-border bg-card shrink-0">
        <div className="p-3">
          <div className="flex items-center justify-center mb-3">
            <button
              onClick={toggleMode}
              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {mode === "work" ? "Trabajo" : "Descanso"}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-2xl font-mono font-bold text-foreground shrink-0">
              {String(minutes).padStart(2, "0")}:{String(remainingSeconds).padStart(2, "0")}
            </div>

            <div className="h-2 bg-secondary/30 flex-1 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex gap-1 shrink-0">
              <Button onClick={onToggle} size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                {isRunning ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              </Button>
              <Button
                onClick={resetTimer}
                size="sm"
                variant="outline"
                className="border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                <RotateCcw className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-b border-border bg-card shrink-0">
      <div className="p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleMode}
              className="text-sm px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {mode === "work" ? "Trabajo" : "Descanso"}
            </button>
          </div>

          <div className="text-6xl font-mono font-bold text-foreground">
            {String(minutes).padStart(2, "0")}:{String(remainingSeconds).padStart(2, "0")}
          </div>

          <div className="h-2 bg-secondary/30 w-full rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear shadow-[0_0_8px_rgba(34,197,94,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex gap-2">
            <Button onClick={onToggle} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              {isRunning ? (
                <>
                  <Pause className="mr-2 h-4 w-4" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Iniciar
                </>
              )}
            </Button>
            <Button
              onClick={resetTimer}
              size="lg"
              variant="outline"
              className="border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reiniciar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

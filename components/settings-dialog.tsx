"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"

interface SettingsDialogProps {
  workTime: number
  breakTime: number
  onSave: (workTime: number, breakTime: number) => void
}

export function SettingsDialog({ workTime, breakTime, onSave }: SettingsDialogProps) {
  const [localWorkTime, setLocalWorkTime] = useState(workTime)
  const [localBreakTime, setLocalBreakTime] = useState(breakTime)
  const [open, setOpen] = useState(false)

  const handleSave = () => {
    onSave(localWorkTime, localBreakTime)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="border-border bg-card/80 backdrop-blur-sm hover:bg-card">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Ajustes del Pomodoro</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Configura los tiempos de trabajo y descanso en minutos
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="work-time" className="text-foreground">
              Tiempo de trabajo (minutos)
            </Label>
            <Input
              id="work-time"
              type="number"
              min="1"
              max="60"
              value={localWorkTime}
              onChange={(e) => setLocalWorkTime(Number(e.target.value))}
              className="bg-secondary border-border text-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="break-time" className="text-foreground">
              Tiempo de descanso (minutos)
            </Label>
            <Input
              id="break-time"
              type="number"
              min="1"
              max="30"
              value={localBreakTime}
              onChange={(e) => setLocalBreakTime(Number(e.target.value))}
              className="bg-secondary border-border text-foreground"
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)} className="border-border">
            Cancelar
          </Button>
          <Button onClick={handleSave} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Guardar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, ArrowRight, ArrowLeft } from "lucide-react"
import { TaskStats } from "@/components/task-stats"

interface Task {
  id: string
  text: string
  status: "todo" | "doing" | "done"
}

export function TaskBoard() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          text: newTask,
          status: "todo",
        },
      ])
      setNewTask("")
    }
  }

  const moveTask = (id: string, newStatus: "todo" | "doing" | "done") => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const todoTasks = tasks.filter((t) => t.status === "todo")
  const doingTasks = tasks.filter((t) => t.status === "doing")
  const doneTasks = tasks.filter((t) => t.status === "done")

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="p-3 border-b border-border shrink-0">
        <div className="flex gap-2">
          <Input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            placeholder="Nueva tarea..."
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground text-sm"
          />
          <Button
            onClick={addTask}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0 h-9 w-9"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <TaskStats todoCount={todoTasks.length} doingCount={doingTasks.length} doneCount={doneTasks.length} />

      <div className="p-4 border-b border-border shrink-0">
        <h3 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide text-center">Haciendo</h3>
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {doingTasks.length === 0 ? (
              <div className="aspect-[2/1] flex items-center justify-center text-xs text-muted-foreground bg-secondary/30 rounded-lg border border-dashed border-border">
                Arrastra una tarea aquí
              </div>
            ) : (
              <div className="space-y-3">
                {doingTasks.map((task) => (
                  <div
                    key={task.id}
                    className="aspect-[2/1] flex flex-col justify-center gap-3 p-4 rounded-lg bg-primary/10 border-2 border-primary/50 group shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all"
                  >
                    <span className="text-base text-foreground font-medium text-center leading-relaxed">
                      {task.text}
                    </span>
                    <div className="flex gap-2 justify-center">
                      <Button
                        onClick={() => moveTask(task.id, "todo")}
                        size="sm"
                        variant="ghost"
                        className="h-8 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                      >
                        <ArrowLeft className="h-3 w-3 mr-1" />
                        Volver
                      </Button>
                      <Button
                        onClick={() => moveTask(task.id, "done")}
                        size="sm"
                        className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ArrowRight className="h-3 w-3 mr-1" />
                        Completar
                      </Button>
                      <Button
                        onClick={() => deleteTask(task.id)}
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-2 gap-3 p-3 h-full">
          {/* Columna Por Hacer */}
          <div className="flex flex-col min-h-0">
            <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide sticky top-0 bg-background pb-2 text-center">
              Por hacer
              <span className="ml-2 text-muted-foreground font-normal">({todoTasks.length})</span>
            </h3>
            <div className="space-y-2 overflow-y-auto">
              {todoTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col gap-2 p-2.5 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                >
                  <span className="text-sm text-foreground break-words leading-relaxed">{task.text}</span>
                  <div className="flex gap-1">
                    <Button
                      onClick={() => moveTask(task.id, "doing")}
                      size="sm"
                      className="h-7 text-xs flex-1 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_12px_rgba(34,197,94,0.4)] transition-all"
                    >
                      Iniciar
                    </Button>
                    <Button
                      onClick={() => deleteTask(task.id)}
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Hecho */}
          <div className="flex flex-col min-h-0">
            <h3 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide sticky top-0 bg-background pb-2 text-center">
              Hecho
              <span className="ml-2 text-muted-foreground font-normal">({doneTasks.length})</span>
            </h3>
            <div className="space-y-2 overflow-y-auto">
              {doneTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col gap-2 p-2.5 rounded-lg bg-card border border-border opacity-60 group hover:opacity-80 transition-opacity"
                >
                  <span className="text-sm text-muted-foreground line-through break-words leading-relaxed">
                    {task.text}
                  </span>
                  <div className="flex gap-1">
                    <Button
                      onClick={() => moveTask(task.id, "todo")}
                      size="sm"
                      variant="ghost"
                      className="h-7 text-xs flex-1 text-muted-foreground hover:text-foreground"
                    >
                      Reabrir
                    </Button>
                    <Button
                      onClick={() => deleteTask(task.id)}
                      size="icon"
                      variant="ghost"
                      className="h-7 w-7 shrink-0 text-muted-foreground hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

interface TaskStatsProps {
  todoCount: number
  doingCount: number // agregando conteo de tareas en progreso
  doneCount: number
}

export function TaskStats({ todoCount, doingCount, doneCount }: TaskStatsProps) {
  const total = todoCount + doingCount + doneCount
  const percentage = total > 0 ? Math.round((doneCount / total) * 100) : 0

  return (
    <div className="flex items-center justify-center gap-3 py-3 px-4 bg-secondary/30 border-y border-border">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-primary">{percentage}%</div>
        <div className="text-xs text-muted-foreground">
          <div>Completado</div>
          <div className="text-[10px]">
            {doneCount} de {total} tareas
          </div>
        </div>
      </div>
      <div className="h-8 w-px bg-border" />
      <div className="flex-1 max-w-[200px]">
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  )
}

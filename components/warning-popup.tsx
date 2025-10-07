"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { AlertTriangle, CheckCircle } from "lucide-react"

export function WarningPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Mostrar el popup al cargar la página
    setIsOpen(true)
  }, [])

  const handleAccept = () => {
    setIsOpen(false)
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-card border-border max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-6 w-6 text-amber-500" />
            <AlertDialogTitle className="text-foreground text-lg">
              ⚠️ Advertencia Importante
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-muted-foreground text-sm leading-relaxed">
            Esta herramienta está diseñada para cumplir tareas en tiempo récord. Por ende, al salir de la página, 
            si aún no ha completado las tareas pendientes, las mismas se eliminarán.
            <br /><br />
            <strong className="text-foreground">Recomendación:</strong> Complete sus tareas antes de cerrar la aplicación 
            para maximizar su productividad.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={handleAccept}
            className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
          >
            <CheckCircle className="h-4 w-4 mr-2" />
            Entendido, continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

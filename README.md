# 🍅 Super Pomodoro

Aplicación web de productividad que combina la técnica Pomodoro con gestión de tareas estilo Kanban. Diseñada para ayudarte a cumplir tareas en tiempo récord mediante sesiones de trabajo enfocadas y seguimiento visual de tu progreso.

## ✨ Características

- ⏱️ **Timer Pomodoro Configurable**: Sesiones de trabajo y descanso personalizables
- 📋 **Gestión de Tareas Kanban**: Tres columnas (Por hacer, Haciendo, Hecho) para organizar tu trabajo
- 📊 **Estadísticas de Progreso**: Visualiza tu porcentaje de tareas completadas en tiempo real
- 💾 **Almacenamiento Local**: Tus tareas se guardan automáticamente en el navegador
- 📱 **PWA Ready**: Instalable como aplicación en dispositivos móviles
- 🎨 **Interfaz Moderna**: Diseño limpio y responsive con Tailwind CSS y shadcn/ui
- 🔄 **Modo Offline**: Funciona sin conexión gracias al Service Worker

## 🚀 Inicio Rápido

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Stefanodmm/SuperTrelloPomodoro.git

# Entrar al directorio
cd SuperTrelloPomodoro

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Compilar para Producción

```bash
npm run build
npm start
```

## 🛠️ Tecnologías

- **Next.js 15** - Framework React con App Router
- **TypeScript** - Tipado estático para mayor seguridad
- **Tailwind CSS** - Framework de estilos utility-first
- **shadcn/ui** - Componentes UI accesibles y personalizables
- **React 19** - Biblioteca de interfaz de usuario
- **Service Worker** - Funcionalidad offline y PWA

## 📱 Instalación como PWA

### Android (Chrome/Edge)
1. Abre la aplicación en Chrome o Edge
2. Toca el banner de "Instalar" o ve al menú → "Agregar a pantalla de inicio"
3. La app aparecerá en tu menú de aplicaciones

### iOS (Safari)
1. Abre la aplicación en Safari
2. Toca el botón de compartir → "Agregar a pantalla de inicio"
3. La app aparecerá en tu pantalla de inicio

## 🎯 Uso

1. **Configurar el Timer**: Haz clic en el ícono de configuración (⚙️) para ajustar los tiempos de trabajo y descanso
2. **Agregar Tareas**: Escribe una nueva tarea y presiona Enter o haz clic en el botón +
3. **Mover Tareas**: 
   - Desde "Por hacer" → "Haciendo" para iniciar una tarea
   - Desde "Haciendo" → "Hecho" para completarla
4. **Iniciar el Timer**: Presiona el botón "Iniciar" para comenzar una sesión Pomodoro
5. **Ver Progreso**: Observa el porcentaje de tareas completadas en la barra de estadísticas

## 📂 Estructura del Proyecto

```
SuperTrelloPomodoro/
├── app/                    # Páginas y layouts de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── pomodoro-timer.tsx # Timer Pomodoro
│   ├── task-board.tsx     # Tablero de tareas Kanban
│   ├── task-stats.tsx     # Estadísticas de tareas
│   └── ui/                # Componentes UI (shadcn/ui)
├── hooks/                 # Hooks personalizados
├── lib/                   # Utilidades
└── public/                # Archivos estáticos
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de Bastos brothers s.a

## 👨‍💻 Desarrollado por

**Bastos brothers s.a**

---

⭐ Si te gusta este proyecto, ¡dale una estrella!


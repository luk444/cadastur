# 🌴 CADASTUR - Agencia de Turismo en Brasil

Web profesional para agencia de turismo en Río de Janeiro y Búzios, Brasil.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)

## ✨ Características

- 🎨 **Diseño moderno y tropical** - Colores verde agua, azul océano y arena
- 📱 **Mobile-first** - Diseño responsive optimizado
- ⚡ **Alto rendimiento** - Construido con Vite para máxima velocidad
- 💬 **WhatsApp integrado** - Botón flotante y CTAs con mensaje predefinido
- 🎯 **Orientado a conversión** - CTAs estratégicos en toda la página
- 🔍 **SEO básico** - Meta tags y estructura semántica

## 🛠️ Tecnologías

- **ReactJS** (Vite)
- **Tailwind CSS** con colores personalizados
- **Componentes funcionales** reutilizables
- **Google Fonts**: Playfair Display + DM Sans

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx        # Navegación responsive
│   ├── Hero.jsx          # Sección principal
│   ├── About.jsx         # Presentación personal
│   ├── Services.jsx      # Servicios destacados
│   ├── Tours.jsx         # Galería de tours
│   ├── TourCard.jsx      # Card reutilizable
│   ├── Payment.jsx       # Medios de pago
│   ├── Contact.jsx       # Sección de contacto
│   ├── Footer.jsx        # Pie de página
│   └── WhatsAppButton.jsx # Botón flotante
├── data/
│   └── tours.js          # Datos de tours y servicios
├── App.jsx               # Componente principal
├── main.jsx              # Entry point
└── index.css             # Estilos globales
```

## 🚀 Instalación

```bash
# Clonar o descargar el proyecto
cd turismoweb

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🌐 Deploy

El proyecto está listo para deploy en:
- **Vercel**: `npx vercel`
- **Netlify**: Arrastra la carpeta `dist/` después de `npm run build`

## 📝 Personalización

### Cambiar datos de contacto
Editar `src/data/tours.js`:
```javascript
export const contactInfo = {
  whatsapp: "+5521XXXXXXXXX",
  whatsappMessage: "Tu mensaje personalizado",
  // ...
};
```

### Agregar/modificar tours
Editar el array `tours` en `src/data/tours.js`

### Colores personalizados
Modificar `tailwind.config.js` en la sección `theme.extend.colors`

## 📄 Licencia

© 2026 CADASTUR. Todos los derechos reservados.

---

Desarrollado con ❤️ para Brasil 🇧🇷


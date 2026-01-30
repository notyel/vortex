# VORTEX Renewables

Vortex Renewables es una compañía pionera  en soluciones energéticas 100% limpias.  Combinamos ingeniería, gestión ambiental y  experiencia jurídica para convertir vórtices  naturales en energía que impulsa comunidades  y empresas.

## 🛠️ Tecnologías

- **.NET 8.0** - Framework principal
- **ASP.NET Core MVC** - Patrón arquitectónico
- **C# 12.0** - Lenguaje de programación
- **Razor Views** - Motor de vistas
- **CSS3** - Estilos personalizados con sistema de variables CSS

## 🎨 Identidad de Marca

### Colores Primarios

**Color Corporativo**
- `#0077B6` (RGB: 0, 119, 182)

**Colores Acompañantes**
- `#0F9D58` (RGB: 15, 157, 88) - Acompañante principal
- `#73BE44` (RGB: 115, 190, 68) - Gradiente de #0F9D58
- `#6AB13D` (RGB: 106, 177, 61)

## 📁 Estructura del Proyecto

### Arquitectura de Carpetas

```
vortex.web/
├── Controllers/           # Controladores MVC
│   ├── LandingController.cs
│   ├── AboutUsController.cs
│   ├── ContactController.cs
│   ├── ServicesController.cs
│   └── LegalController.cs
├── Models/               # Modelos de datos
│   └── ErrorViewModel.cs
├── Views/                # Vistas Razor
│   ├── Landing/
│   │   ├── Components/   # Componentes de la landing
│   │   │   ├── _Hero.cshtml
│   │   │   ├── _About.cshtml
│   │   │   ├── _Services.cshtml
│   │   │   ├── _Values.cshtml
│   │   │   ├── _Stats.cshtml
│   │   │   └── _Contact.cshtml
│   │   └── Pages/
│   │       └── Index.cshtml
│   ├── AboutUs/
│   │   ├── Components/
│   │   └── Pages/
│   ├── Contact/
│   │   └── Pages/
│   ├── Services/
│   │   ├── Components/
│   │   └── Pages/
│   ├── Legal/
│   │   └── Pages/
│   └── Shared/
│       ├── Components/   # Componentes reutilizables
│       │   ├── _Header.cshtml
│       │   └── _Footer.cshtml
│       ├── Layouts/      # Layouts de página
│       │   └── _Layout.cshtml
│       └── Error.cshtml
├── wwwroot/              # Assets estáticos
│   ├── css/
│   │   ├── base/         # Estilos base (reset, variables, form)
│   │   │   ├── reset.css
│   │   │   ├── variables.css
│   │   │   └── form.css
│   │   ├── components/   # Estilos de componentes
│   │   │   └── components.css
│   │   ├── layout/       # Estilos de layout
│   │   │   ├── layout.css
│   │   │   ├── header.css
│   │   │   └── footer.css
│   │   └── pages/        # Estilos específicos de páginas
│   │       └── landing.css
│   ├── images/
│   └── js/
│       └── navigation.js
├── Program.cs
└── ...
```

## 🚀 Inicio Rápido

### Ejecutar el proyecto

```bash
dotnet run --project vortex.web
```

La aplicación estará disponible en: `https://localhost:5001` o `http://localhost:5000`

### Compilar el proyecto

```bash
dotnet build
```

## 📄 Documentación Adicional

- **[IMPLEMENTACION_LANDING.md](IMPLEMENTACION_LANDING.md)** - Documentación detallada de la implementación de la landing page
- **[CONTENIDO_WEB_VORTEX_RENEWABLES.md](CONTENIDO_WEB_VORTEX_RENEWABLES.md)** - Contenido estructurado de la web
- **[BUGS_CORREGIDOS.md](BUGS_CORREGIDOS.md)** - Lista de bugs identificados y corregidos
- **[MATERIAL_ICONS.md](MATERIAL_ICONS.md)** - Guía de implementación y uso de Material Icons
- **[TROUBLESHOOTING_ICONS.md](TROUBLESHOOTING_ICONS.md)** - Solución de problemas con iconos

## 🎯 Características Implementadas

### Landing Page
- ✅ Hero section con gradiente corporativo
- ✅ Sección Sobre Nosotros
- ✅ Servicios (4 categorías principales)
- ✅ Propuesta de Valor (4 valores)
- ✅ Experiencia Destacada (estadísticas)
- ✅ Información de Contacto

### Navegación
- ✅ Header fijo con scroll effect
- ✅ Menú responsive (mobile hamburger)
- ✅ Smooth scroll a secciones
- ✅ Active link según posición

### Estilos
- ✅ CSS modular y escalable
- ✅ Variables CSS para colores y tokens
- ✅ Sin dependencias externas (Bootstrap, Tailwind)
- ✅ Completamente responsive
- ✅ Material Icons integrados

## 🎨 Sistema de Diseño

### Variables CSS

Todas las variables están definidas en `wwwroot/css/base/variables.css`:

```css
/* Colores */
var(--color-corporate)        /* #0077B6 */
var(--color-accent-primary)   /* #0F9D58 */
var(--color-accent-gradient)  /* #73BE44 */
var(--color-accent-light)     /* #6AB13D */

/* Espaciado */
var(--spacing-xs)   /* 0.5rem */
var(--spacing-sm)   /* 1rem */
var(--spacing-md)   /* 1.5rem */
var(--spacing-lg)   /* 2rem */
var(--spacing-xl)   /* 3rem */

/* Tipografía */
var(--font-size-base)  /* 1rem */
var(--font-size-lg)    /* 1.125rem */
var(--font-size-xl)    /* 1.25rem */
var(--font-size-2xl)   /* 1.5rem */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
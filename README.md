# VORTEX Renewables

Vortex Renewables es una compañía pionera  en soluciones energéticas 100% limpias.  Combinamos ingeniería, gestión ambiental y  experiencia jurídica para convertir vórtices  naturales en energía que impulsa comunidades  y empresas.

## 🛠️ Tecnologías

- **.NET 8.0** - Framework principal
- **ASP.NET Core MVC** - Patrón arquitectónico
- **C# 12.0** - Lenguaje de programación
- **Razor Pages** - Motor de vistas
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
solpred.web/
├── Controllers/           # Controladores MVC
│   ├── ContactController.cs
│   └── ...
├── Models/               # Modelos de datos
│   ├── ContactFormModel.cs
│   └── ...
├── Views/                # Vistas Razor
│   ├── Contact/
│   │   └── Pages/
│   │       └── Index.cshtml
│   ├── Shared/
│   │   ├── Components/   # Componentes reutilizables
│   │   │   ├── ContactCard/
│   │   │   ├── ContactForm/
│   │   │   ├── ContactInfo/
│   │   │   └── PageHero/
│   │   └── Layouts/      # Layouts de página
│   └── ...
├── wwwroot/              # Assets estáticos
│   ├── css/
│   │   ├── base/         # Estilos base (reset, variables, form)
│   │   ├── components/   # Estilos de componentes
│   │   ├── domains/      # Estilos por dominio/sección
│   │   ├── layout/       # Estilos de layout
│   │   └── pages/        # Estilos específicos de páginas
│   ├── images/
│   └── js/
└── ...
```
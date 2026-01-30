# Material Icons - Implementación

## ? Material Icons Implementados

Se ha implementado **Material Symbols Outlined** en el proyecto VORTEX Renewables utilizando la fuente web oficial de Google Fonts.

---

## ?? Archivos Creados/Modificados

### Nuevos Archivos
- ? `wwwroot/css/base/icons.css` - Sistema de iconos Material

### Archivos Modificados
- ? `Views/Shared/Layouts/_Layout.cshtml` - Agregada referencia a icons.css
- ? `Views/Landing/Components/_Services.cshtml` - Iconos actualizados
- ? `Views/Landing/Components/_Values.cshtml` - Iconos actualizados
- ? `Views/Landing/Components/_Contact.cshtml` - Iconos actualizados
- ? `Views/Shared/Components/_Footer.cshtml` - Iconos actualizados
- ? `wwwroot/css/pages/landing.css` - Estilos de iconos
- ? `wwwroot/css/layout/footer.css` - Estilos de iconos en footer

---

## ?? Iconos Implementados

### Servicios
| Servicio | Icono | Código |
|----------|-------|--------|
| Desarrollo Utility-Scale | ? | `bolt` |
| Due Diligence | ?? | `search` |
| Generación Distribuida | ?? | `solar_power` |
| Electromovilidad | ?? | `ev_station` |

### Propuesta de Valor
| Valor | Icono | Código |
|-------|-------|--------|
| Servicios llave en mano | ?? | `vpn_key` |
| Equipo multidisciplinario | ?? | `groups` |
| Compromiso ambiental | ?? | `eco` |
| Innovación tecnológica | ?? | `lightbulb` |

### Contacto
| Tipo | Icono | Código |
|------|-------|--------|
| Sitio Web | ?? | `language` |
| Email | ?? | `email` |
| Teléfono | ?? | `phone` |
| LinkedIn | ?? | `business` |
| Ubicación Principal | ?? | `location_on` |
| Ubicación Secundaria | ?? | `place` |

---

## ?? Uso de Iconos

### Sintaxis Básica
```html
<span class="material-icons">icon_name</span>
```

### Tamaños Disponibles
```html
<span class="material-icons icon-sm">icon_name</span>   <!-- 18px -->
<span class="material-icons icon-md">icon_name</span>   <!-- 24px (default) -->
<span class="material-icons icon-lg">icon_name</span>   <!-- 36px -->
<span class="material-icons icon-xl">icon_name</span>   <!-- 48px -->
<span class="material-icons icon-2xl">icon_name</span>  <!-- 60px -->
```

### Colores
```html
<span class="material-icons text-primary">icon_name</span>  <!-- Azul corporativo -->
<span class="material-icons text-accent">icon_name</span>   <!-- Verde acompañante -->
<span class="material-icons text-white">icon_name</span>    <!-- Blanco -->
<span class="material-icons text-gradient">icon_name</span> <!-- Gradiente verde -->
```

---

## ?? Características Técnicas

### Fuente Utilizada
- **Familia:** Material Symbols Outlined
- **Peso:** 400 (Normal)
- **Formato:** WOFF2
- **Fuente:** Google Fonts

### Ventajas
- ? **Sin dependencias externas** - Carga desde Google Fonts
- ? **Ligero** - Solo ~15KB para la fuente completa
- ? **Escalable** - Vector, no pixelado
- ? **Personalizable** - CSS para colores y tamaños
- ? **Accesible** - Soporte para screen readers

### Características CSS
```css
.material-icons {
    font-family: 'Material Symbols Outlined';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'liga';
}
```

---

## ?? Catálogo de Iconos

Para ver todos los iconos disponibles de Material Symbols:
?? [Material Symbols](https://fonts.google.com/icons)

---

## ?? Ejemplos de Uso

### Icono Simple
```html
<span class="material-icons">home</span>
```

### Icono Grande con Color
```html
<span class="material-icons icon-xl text-primary">solar_power</span>
```

### Icono en Botón
```html
<button class="btn btn-primary">
    <span class="material-icons">download</span>
    Descargar
</button>
```

### Icono con Gradiente
```html
<span class="material-icons icon-2xl text-gradient">eco</span>
```

---

## ?? Iconos Sugeridos para Futuras Secciones

### Blog/Noticias
- `article` - Artículo
- `newspaper` - Noticias
- `rss_feed` - Feed RSS

### Proyectos
- `folder` - Carpeta de proyectos
- `engineering` - Ingeniería
- `construction` - Construcción

### Equipo
- `person` - Persona
- `badge` - Credencial
- `workspace_premium` - Premium

### Certificaciones
- `verified` - Verificado
- `award_star` - Premio
- `workspace_premium` - Premium

---

## ? Beneficios de Material Icons

1. **Consistencia Visual** - Diseño uniforme en toda la aplicación
2. **Profesionalismo** - Iconografía reconocida mundialmente
3. **Mantenibilidad** - Fácil de actualizar y modificar
4. **Rendimiento** - Una sola fuente para todos los iconos
5. **Accesibilidad** - Compatible con lectores de pantalla
6. **Responsive** - Escalan perfectamente en todos los dispositivos

---

## ?? Notas

- La fuente se carga desde Google Fonts CDN
- Se utilizó la variante "Outlined" para un look más limpio
- Todos los iconos son vectoriales (SVG path en fuente)
- Compatible con todos los navegadores modernos
- Fallback a texto si la fuente no carga

---

## ?? Migración de Emojis a Material Icons

| Antes (Emoji) | Después (Material Icon) |
|--------------|------------------------|
| ? | `bolt` |
| ?? | `search` |
| ?? | `solar_power` |
| ?? | `ev_station` |
| ?? | `vpn_key` |
| ?? | `groups` |
| ?? | `eco` |
| ?? | `lightbulb` |
| ?? | `language` |
| ?? | `email` |
| ?? | `phone` |
| ?? | `business` |
| ?? | `location_on` / `place` |

---

? **Implementación completada** - Todos los emojis han sido reemplazados por Material Icons profesionales.

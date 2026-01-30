# Solución de Problemas - Material Icons

## ? Problemas Corregidos

### 1. **Fuente Material Icons no se visualizaba**

**Problema:** Los iconos no se mostraban en la página.

**Soluciones aplicadas:**

#### A. Agregado link directo a Google Fonts en `_Layout.cshtml`
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
```

#### B. Simplificado `icons.css`
- Eliminada la declaración `@font-face` que causaba conflictos
- La fuente ahora se carga directamente desde Google Fonts CDN

#### C. Corregidos estilos duplicados
- Eliminado `font-size` de `.service-icon` y `.value-icon` que causaba conflicto
- Los iconos ahora usan sus propias clases de tamaño (`icon-xl`, `icon-2xl`)

#### D. Corregido checkmark en listas
- Cambiado de `content: '?'` a `content: '?'` en `.service-list li::before`

---

## ?? Verificación

### Prueba Rápida
1. Abrir `http://localhost:5000/test-icons.html` en el navegador
2. Deberías ver todos los iconos correctamente

### Inspeccionar en DevTools
1. Abrir Chrome DevTools (F12)
2. Ir a la pestaña "Network"
3. Recargar la página
4. Buscar la fuente: "Material+Symbols+Outlined"
5. Debería aparecer con status 200 (OK)

### Verificar en Consola
```javascript
// En la consola del navegador
window.getComputedStyle(document.querySelector('.material-icons')).fontFamily
// Debería retornar: "Material Symbols Outlined"
```

---

## ??? Si los iconos aún no se ven

### Opción 1: Limpiar caché del navegador
1. Presionar `Ctrl + Shift + Delete`
2. Seleccionar "Imágenes y archivos en caché"
3. Limpiar
4. Recargar la página (`Ctrl + F5`)

### Opción 2: Verificar conectividad
```bash
# En PowerShell
Test-NetConnection fonts.googleapis.com -Port 443
```

### Opción 3: Usar fuente local (sin CDN)

Si prefieres no depender de Google Fonts CDN:

1. Descargar la fuente desde: https://github.com/google/material-design-icons
2. Colocar en `wwwroot/fonts/MaterialSymbolsOutlined.woff2`
3. Actualizar `icons.css`:

```css
@font-face {
    font-family: 'Material Symbols Outlined';
    font-style: normal;
    font-weight: 100 700;
    src: url('/fonts/MaterialSymbolsOutlined.woff2') format('woff2');
}
```

### Opción 4: Verificar Content Security Policy

Si tienes CSP configurado en `Program.cs`:

```csharp
app.Use(async (context, next) =>
{
    context.Response.Headers.Add("Content-Security-Policy", 
        "default-src 'self'; " +
        "font-src 'self' https://fonts.gstatic.com; " +
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;");
    await next();
});
```

---

## ?? Checklist de Verificación

- [ ] Google Fonts link en `<head>` antes de otros CSS
- [ ] Clase `material-icons` correctamente aplicada
- [ ] Nombre del icono correcto (ver https://fonts.google.com/icons)
- [ ] No hay estilos `font-family` sobreescribiendo
- [ ] No hay bloqueadores de contenido activos
- [ ] Caché del navegador limpia

---

## ?? Estructura Correcta

### HTML
```html
<span class="material-icons">bolt</span>
<span class="material-icons icon-xl">search</span>
<span class="material-icons icon-2xl text-primary">eco</span>
```

### CSS en orden correcto
```html
<head>
    <!-- 1. Google Fonts primero -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/..." />
    
    <!-- 2. Luego tus CSS -->
    <link rel="stylesheet" href="~/css/base/icons.css" />
    <link rel="stylesheet" href="~/css/pages/landing.css" />
</head>
```

---

## ?? Errores Comunes

### ? Nombre de icono incorrecto
```html
<!-- MAL -->
<span class="material-icons">lightning</span>

<!-- BIEN -->
<span class="material-icons">bolt</span>
```

### ? Clase incorrecta
```html
<!-- MAL -->
<span class="material-icon">bolt</span>

<!-- BIEN -->
<span class="material-icons">bolt</span>
```

### ? Texto dentro del span
```html
<!-- MAL -->
<span class="material-icons">bolt icon text</span>

<!-- BIEN -->
<span class="material-icons">bolt</span>
```

### ? Font-size sobreescribiendo
```css
/* MAL - Causa que los iconos sean muy pequeños */
.material-icons {
    font-size: 12px !important;
}

/* BIEN - Usa las clases de tamaño */
<span class="material-icons icon-xl">bolt</span>
```

---

## ?? Resultado Esperado

Después de aplicar las correcciones:

- ? Iconos visibles en servicios (bolt, search, solar_power, ev_station)
- ? Iconos visibles en valores (vpn_key, groups, eco, lightbulb)
- ? Iconos visibles en contacto (language, email, phone, business, location_on, place)
- ? Iconos visibles en footer (business, email, phone)
- ? Todos los iconos con el tamaño correcto
- ? Todos los iconos con el color correcto

---

## ?? Soporte

Si después de seguir todos los pasos los iconos aún no aparecen:

1. Verificar que no hay bloqueador de ads activo
2. Probar en modo incógnito del navegador
3. Verificar la consola del navegador en busca de errores
4. Verificar que el archivo `test-icons.html` funciona correctamente

---

## ? Confirmación Final

Para confirmar que todo funciona:

1. Ejecutar: `dotnet run --project vortex.web`
2. Abrir: `http://localhost:5000`
3. Inspeccionar cualquier icono con DevTools
4. Debería verse la familia de fuente: "Material Symbols Outlined"

¡Los iconos deberían estar funcionando perfectamente ahora! ??

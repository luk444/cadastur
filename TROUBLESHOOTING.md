# 🔧 Troubleshooting - Página en Blanco en Netlify

## ✅ Soluciones Aplicadas

### 1. Headers de MIME Type
- ✅ Creado `public/_headers` con headers específicos para `/assets/*.js` y `/assets/*.css`
- ✅ Actualizado `netlify.toml` con headers adicionales
- ✅ Agregado `X-Content-Type-Options: nosniff` para prevenir MIME type sniffing

### 2. Configuración de Vite
- ✅ Base path configurado como `/`
- ✅ Assets en carpeta `assets/`
- ✅ Build optimizado sin sourcemaps

### 3. Redirecciones SPA
- ✅ `_redirects` configurado para redirigir todas las rutas a `/index.html`

## 🔍 Si la Página Sigue en Blanco

### Paso 1: Verificar los Logs de Build
1. Ve a tu dashboard de Netlify
2. Click en el deploy más reciente
3. Revisa la sección "Build log"
4. Verifica que no haya errores

### Paso 2: Verificar la Consola del Navegador
1. Abre tu sitio en Netlify
2. Presiona F12 para abrir DevTools
3. Ve a la pestaña **Console**
4. Busca errores en rojo
5. Ve a la pestaña **Network**
6. Verifica que los archivos `.js` y `.css` se carguen correctamente
7. Si algún archivo falla, verifica el Status Code (debe ser 200)

### Paso 3: Verificar Headers
1. En DevTools, ve a la pestaña **Network**
2. Click en el archivo `.js` (ej: `index-XXXXX.js`)
3. Ve a la pestaña **Headers**
4. Verifica que `Content-Type` sea `application/javascript` o `application/javascript; charset=utf-8`
5. Si dice `application/octet-stream`, los headers no se están aplicando

### Paso 4: Limpiar Cache
1. En Netlify Dashboard → Site settings → Build & deploy
2. Click en "Clear cache and deploy site"
3. Espera a que termine el deploy

### Paso 5: Verificar Archivos en Deploy
1. En Netlify Dashboard, ve al deploy
2. Click en "Deploy file browser"
3. Verifica que existan:
   - `index.html`
   - `_redirects`
   - `_headers`
   - `favicon.svg`
   - Carpeta `assets/` con archivos `.js` y `.css`

## 🐛 Errores Comunes

### Error: "Failed to load module script: Expected a JavaScript module but the server responded with a MIME type of 'application/octet-stream'"

**Solución**: Los headers no se están aplicando. Verifica que:
- El archivo `_headers` esté en `public/` (se copiará a `dist/`)
- El archivo `netlify.toml` tenga los headers configurados
- Después del deploy, verifica que `_headers` esté en el file browser

### Error: 404 en assets

**Solución**: Verifica que:
- Las rutas en `index.html` empiecen con `/assets/` (no `assets/`)
- El `base` en `vite.config.js` sea `/`

### Página completamente en blanco sin errores

**Solución**: 
1. Verifica que `index.html` tenga el `<div id="root"></div>`
2. Verifica que el script se esté cargando (Network tab)
3. Verifica que React se esté ejecutando (agrega un `console.log` en `main.jsx` temporalmente)

## 📝 Verificación Manual

Ejecuta estos comandos localmente para verificar:

```bash
# Build local
npm run build

# Verificar que _headers esté en dist
ls dist/_headers

# Verificar que los assets estén en dist/assets
ls dist/assets/

# Verificar el HTML generado
cat dist/index.html
```

## 🔄 Si Nada Funciona

1. **Verifica la configuración de Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (o superior)

2. **Prueba un deploy manual**:
   - Ejecuta `npm run build` localmente
   - Ve a Netlify Drop (https://app.netlify.com/drop)
   - Arrastra la carpeta `dist/`

3. **Contacta soporte de Netlify** con:
   - URL del sitio
   - Logs del build
   - Screenshot de la consola del navegador


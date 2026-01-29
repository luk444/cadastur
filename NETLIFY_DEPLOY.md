# 🚀 Guía de Deploy en Netlify - CADASTUR

## ✅ Configuración Completada

Se han creado los siguientes archivos para que el deploy funcione correctamente:

1. **`netlify.toml`** - Configuración principal de Netlify
2. **`public/_redirects`** - Redirecciones para SPA (Single Page Application)

## 📋 Pasos para Deploy en Netlify

### Opción 1: Deploy desde GitHub (Recomendado)

1. Ve a [Netlify](https://app.netlify.com)
2. Click en **"Add new site"** → **"Import an existing project"**
3. Conecta tu repositorio de GitHub: `luk444/cadastur`
4. Netlify detectará automáticamente la configuración:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click en **"Deploy site"**

### Opción 2: Deploy Manual (Drag & Drop)

1. Ejecuta localmente: `npm run build`
2. Ve a [Netlify Drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist/` al área de deploy

## ⚙️ Configuración en Netlify Dashboard

Si necesitas configurar manualmente:

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18` (o superior)

## 🔧 Solución de Problemas

### Si la página se ve en blanco:

1. **Verifica la consola del navegador** (F12) para ver errores
2. **Verifica que el build se complete correctamente** en los logs de Netlify
3. **Asegúrate de que el archivo `_redirects` esté en `dist/`** después del build
4. **Verifica que las rutas de los assets sean correctas** (deben empezar con `/`)

### Errores comunes:

- **404 en assets**: Verifica que `base: '/'` esté en `vite.config.js`
- **Página en blanco**: Verifica que `_redirects` esté en `public/` y se copie a `dist/`
- **Build falla**: Verifica que todas las dependencias estén en `package.json`

## 📝 Notas Importantes

- El archivo `_redirects` es **crítico** para que las rutas del SPA funcionen
- Netlify necesita el archivo `netlify.toml` para la configuración automática
- Las imágenes de Unsplash pueden tardar en cargar, esto es normal

## 🔄 Actualizar el Deploy

Cada vez que hagas `git push` a la rama `main`, Netlify hará un deploy automático si tienes la integración configurada.


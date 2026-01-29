# 🔧 Fix: Página en Blanco - Netlify sirviendo HTML fuente

## Problema Detectado

El HTML que se está sirviendo tiene:
```html
<script type="module" src="/src/main.jsx"></script>
```

Pero debería tener:
```html
<script type="module" crossorigin src="/assets/index-XXXXX.js"></script>
```

Esto significa que **Netlify está sirviendo el `index.html` fuente en lugar del compilado**.

## ✅ Solución

### Opción 1: Verificar Configuración en Netlify Dashboard

1. Ve a tu sitio en Netlify Dashboard
2. **Site settings** → **Build & deploy**
3. Verifica que:
   - **Base directory**: (vacío o `/`)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` ⚠️ **ESTO ES CRÍTICO**

### Opción 2: Forzar Rebuild

1. En Netlify Dashboard → **Deploys**
2. Click en el deploy más reciente
3. Click en **"Trigger deploy"** → **"Clear cache and deploy site"**

### Opción 3: Verificar que el Build se Ejecute

En los logs del deploy, verifica que aparezca:
```
✓ built in X.XXs
dist/index.html                   1.60 kB
dist/assets/index-XXXXX.js   188.76 kB
dist/assets/index-XXXXX.css   36.39 kB
```

Si NO ves esto, el build no se está ejecutando correctamente.

## 🔍 Verificación

Después del deploy, en el **Deploy file browser** de Netlify, verifica:

✅ `index.html` debe tener `<script src="/assets/index-XXXXX.js">`  
❌ NO debe tener `<script src="/src/main.jsx">`

Si ves `/src/main.jsx`, Netlify está sirviendo el HTML fuente, no el compilado.

## 📝 Nota Importante

El archivo `index.html` en la raíz del proyecto es solo para desarrollo.  
El archivo `dist/index.html` es el que Netlify debe servir en producción.


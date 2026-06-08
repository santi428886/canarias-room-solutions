# Canarias Room Solutions

Landing page premium para captación de **propietarios** e **inmobiliarias** en Gran Canaria. Diseño inspirado en inmobiliarias de lujo, optimizada para conversión vía WhatsApp.

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [Next.js](https://nextjs.org/) | 16 | App Router, SSR estático, SEO |
| [React](https://react.dev/) | 19 | Interfaz de usuario |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos y diseño responsive |

---

## Requisitos previos

- **Node.js** 20.x o superior ([descargar](https://nodejs.org/))
- **npm** 10+ (incluido con Node.js)
- Cuenta en [GitHub](https://github.com) (para el repositorio)
- Cuenta en [Vercel](https://vercel.com) (para el despliegue)

---

## Desarrollo local

```bash
# 1. Entrar en el proyecto
cd canarias-room-solutions

# 2. Instalar dependencias
npm install

# 3. (Opcional) Configurar URL del sitio
cp .env.example .env.local
# Editar NEXT_PUBLIC_SITE_URL si lo desea

# 4. Arrancar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run start` | Servir build de producción localmente |
| `npm run lint` | Análisis estático con ESLint |
| `npm run typecheck` | Verificación de tipos TypeScript |

---

## Estructura del proyecto

```
canarias-room-solutions/
├── public/                  # Assets estáticos
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Layout global, fuentes, metadata SEO
│   │   ├── page.tsx         # Landing page principal
│   │   ├── not-found.tsx    # Página 404 personalizada
│   │   ├── robots.ts        # robots.txt dinámico
│   │   ├── sitemap.ts       # sitemap.xml dinámico
│   │   └── globals.css      # Tema Tailwind y estilos globales
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Hero, Owners, RealEstateAgencies, HowItWorks, Contact
│   │   └── ui/              # Button, SectionHeading, WhatsAppButton
│   └── lib/
│       ├── constants.ts     # Datos de marca, navegación y contenido
│       └── site.ts          # URL del sitio (SEO y dominio)
├── .env.example             # Plantilla de variables de entorno
├── next.config.ts           # Configuración Next.js
├── postcss.config.mjs       # PostCSS + Tailwind v4
└── package.json
```

---

## Rutas

| Ruta | Tipo | Descripción |
|------|------|-------------|
| `/` | Estática | Landing page principal |
| `/sitemap.xml` | Generada | Mapa del sitio para buscadores |
| `/robots.txt` | Generada | Directivas para crawlers |
| `/*` (no existente) | 404 | Página de error personalizada |

---

## Identidad visual

| Elemento | Valor |
|----------|-------|
| Azul marino | `#071B35` |
| Dorado | `#C8A15A` |
| Blanco roto | `#F7F4ED` |
| Tipografía titulares | Playfair Display |
| Tipografía cuerpo | Lato |

---

## Contacto y WhatsApp

Todos los enlaces de WhatsApp apuntan a:

- **Número:** +34 643 170 374
- **URL:** `https://wa.me/34643170374`

El formulario de contacto redirige a WhatsApp con los datos del lead pre-rellenados. El botón flotante está siempre visible en la esquina inferior derecha.

---

## Variables de entorno

| Variable | Obligatoria | Descripción |
|----------|-------------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL pública del sitio (sin `/` final). Usada en SEO, Open Graph, sitemap y robots.txt |

**¿Es obligatoria para desplegar?** No. El proyecto funciona sin ella usando `https://canariasroomsolutions.com` como valor por defecto.

**¿Cuándo configurarla?** Al conectar un dominio propio o si la URL de Vercel difiere del dominio final.

```bash
# .env.local (desarrollo) o Vercel → Settings → Environment Variables (producción)
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

No se requieren API keys, bases de datos ni secretos para el funcionamiento actual.

---

## Subir el proyecto a GitHub

### Opción A — Repositorio dedicado (recomendado)

Este proyecto debe desplegarse como **repositorio independiente**, no dentro de `trader-hub`.

```bash
# 1. Entrar en la carpeta del proyecto
cd canarias-room-solutions

# 2. Inicializar Git (si aún no está inicializado)
git init

# 3. Añadir todos los archivos
git add .

# 4. Crear el primer commit
git commit -m "Initial commit: landing page Canarias Room Solutions"

# 5. Crear repositorio en GitHub
#    → Ir a https://github.com/new
#    → Nombre sugerido: canarias-room-solutions
#    → Público o privado, SIN README (ya existe en el proyecto)
#    → Crear repositorio

# 6. Conectar y subir (reemplace USUARIO por su usuario de GitHub)
git branch -M main
git remote add origin https://github.com/USUARIO/canarias-room-solutions.git
git push -u origin main
```

### Opción B — Monorepo (carpeta dentro de otro repo)

Si el proyecto vive dentro de un repositorio mayor (como `trader-hub`):

1. Suba todo el repositorio padre a GitHub con normalidad.
2. En Vercel, configure **Root Directory** = `canarias-room-solutions`.
3. Vercel solo desplegará esa subcarpeta.

---

## Desplegar en Vercel

### Paso 1 — Importar proyecto

1. Entrar en [vercel.com](https://vercel.com) e iniciar sesión.
2. Clic en **Add New… → Project**.
3. Seleccionar el repositorio de GitHub `canarias-room-solutions`.
4. Autorizar acceso a GitHub si es la primera vez.

### Paso 2 — Configurar build

Vercel detecta Next.js automáticamente. Verificar:

| Campo | Valor |
|-------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `.` (repo dedicado) o `canarias-room-solutions` (monorepo) |
| **Build Command** | `npm run build` |
| **Output Directory** | *(dejar por defecto)* |
| **Install Command** | `npm install` |

### Paso 3 — Variables de entorno (opcional)

En **Environment Variables**, añadir si ya tiene dominio:

```
NEXT_PUBLIC_SITE_URL = https://canariasroomsolutions.com
```

Aplicar a: **Production**, **Preview** y **Development**.

### Paso 4 — Desplegar

1. Clic en **Deploy**.
2. Esperar 1–2 minutos.
3. Vercel asignará una URL temporal: `https://canarias-room-solutions.vercel.app`

### Paso 5 — Verificar producción

Comprobar manualmente:

- [ ] La página principal carga correctamente
- [ ] Navegación por anclas (`#propietarios`, `#contacto`, etc.)
- [ ] Botón flotante de WhatsApp abre chat con +34 643 170 374
- [ ] Formulario de contacto redirige a WhatsApp con datos
- [ ] Diseño responsive en móvil
- [ ] `/robots.txt` y `/sitemap.xml` accesibles

### Despliegues automáticos

Cada `git push` a `main` genera un nuevo despliegue en producción. Las pull requests generan **preview deployments** con URL única.

---

## Conectar dominio propio

### En Vercel

1. Ir a **Project → Settings → Domains**.
2. Añadir dominio: `canariasroomsolutions.com` (y opcionalmente `www.canariasroomsolutions.com`).
3. Vercel mostrará los registros DNS necesarios.

### En su registrador de dominio

**Opción recomendada — Registro A:**

```
Tipo: A
Nombre: @
Valor: 76.76.21.21
```

**Para subdominio www — CNAME:**

```
Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

> Los valores exactos los muestra Vercel al añadir el dominio. Pueden variar ligeramente.

### Tras propagación DNS (5 min – 48 h)

1. Vercel activará **SSL automático** (HTTPS).
2. Actualizar `NEXT_PUBLIC_SITE_URL` en Vercel con el dominio definitivo.
3. Redesplegar: **Deployments → ⋯ → Redeploy**.

---

## Checklist de producción

- [x] `npm run build` compila sin errores
- [x] `npm run lint` sin advertencias
- [x] TypeScript estricto activado
- [x] Tailwind v4 configurado vía PostCSS
- [x] Metadata SEO (title, description, Open Graph)
- [x] `robots.txt` y `sitemap.xml` generados
- [x] Página 404 personalizada
- [x] Diseño responsive (mobile-first)
- [x] Enlaces WhatsApp centralizados en `constants.ts`
- [ ] Favicon personalizado *(pendiente — usa favicon.ico por defecto)*
- [ ] Imagen Open Graph *(pendiente — mejora al compartir en redes)*

---

## Próximos pasos sugeridos

1. **Favicon e imagen OG** — Refuerzo de marca al compartir enlaces.
2. **Fotografías premium** — Hero y secciones con imágenes de Gran Canaria.
3. **Google Analytics / Tag Manager** — Medición de tráfico y conversiones.
4. **Backend de formulario** — Email automático o CRM (Formspree, Resend, Supabase).

---

## Licencia

Proyecto privado © Canarias Room Solutions. Todos los derechos reservados.

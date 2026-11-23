# Sistema de Diseño Visual y Paleta de ClickJr

Documento correspondiente a la **Tarea T11** (Definición del diseño visual general). Reúne los criterios estéticos, la paleta cromática para temas claro y oscuro, la tipografía y los tokens semánticos compartidos adoptados por el equipo para la landing page.

---

## 1. Criterios de Identidad y Marca

De conformidad con la decisión formal [DEC-013](decisiones.md#dec-013-mantenimiento-exclusivo-de-la-identidad-institucional-de-clickjr) y los requisitos oficiales (`REQ-LAN-04`):

- Se mantiene y aplica de manera **exclusiva la identidad visual original de ClickJr**, respetando su logotipo, imagotipo y colores institucionales.
- Se descarta la creación o uso de marcas, logotipos o nombres de consultora adicionales generados con IA, concentrando todos los esfuerzos en la presentación profesional y didáctica del caso.
- El logotipo oficial cuenta con dos variantes vectoriales SVG en `public/assets/clickjr/`:
  - `clickjr-logo.svg` (para tema claro).
  - `clickjr-logo-dark.svg` (variante adaptada para mantener legibilidad y contraste sobre fondo oscuro).

---

## 2. Paleta Cromática y Tokens Globales

El sistema visual implementa variables CSS nativas centralizadas en `:root` dentro de `src/styles/global.css`, con soporte adaptativo para temas claro y oscuro (`[data-theme='dark']`) y persistencia en `localStorage`.

### 2.1. Colores de Marca ClickJr

| Variable | Valor Hex | Descripción |
|---|---|---|
| `--brand-orange` | `#fc9663` | Naranja cálido distintivo de la marca ClickJr. |
| `--brand-coral` | `#f7755e` | Tono coral complementario para realces y transiciones. |
| `--brand-purple` | `#3d3157` | Púrpura profundo institucional para tipografía y fondos oscuros. |
| `--brand-cream` | `#faf8ec` | Crema suave para superficies de fondo claro. |

### 2.2. Esquema Tema Claro (Light Theme)

| Token | Valor Hex / Expresión | Uso principal |
|---|---|---|
| `--bg` | `#faf8ec` | Fondo general de la página. |
| `--surface` | `#ffffff` | Fondo de tarjetas, paneles y contenedores. |
| `--surface-2` | `#f3eedc` | Superficies secundarias y áreas de resalto sutil. |
| `--border` | `#e6dfc9` | Bordes regulares y líneas divisorias. |
| `--border-strong` | `#8a809f` | Bordes con mayor contraste o estado activo. |
| `--text` | `#2a2140` | Color primario de texto y encabezados. |
| `--text-muted` | `#5e5478` | Texto secundario, descripciones y leyendas. |
| `--primary` | `#3d3157` | Color de énfasis principal y botones. |
| `--on-primary` | `#faf8ec` | Texto sobre elementos de color primario. |
| `--accent` | `#b3451a` | Color de acento cálido para enlaces y llamadas a la acción. |
| `--accent-soft` | `#ffe9dc` | Fondo suave para etiquetas y badges destacados. |
| `--danger` | `#c2452f` | Estados de error, advertencia crítica o excepción. |

### 2.3. Esquema Tema Oscuro (Dark Theme)

| Token | Valor Hex / Expresión | Uso principal |
|---|---|---|
| `--bg` | `#171126` | Fondo general oscuro con matiz púrpura profundo. |
| `--surface` | `#221a38` | Superficie de tarjetas y paneles. |
| `--surface-2` | `#2c2347` | Superficie secundaria para elevaciones visuales. |
| `--border` | `#3a3057` | Bordes oscuros integrados. |
| `--border-strong` | `#6f6590` | Bordes activos o de foco con mayor visibilidad. |
| `--text` | `#faf8ec` | Texto principal claro y legible. |
| `--text-muted` | `#b9b0ce` | Texto secundario y leyendas auxiliares. |
| `--primary` | `#fc9663` | Color de énfasis adaptado a tonos cálidos visibles. |
| `--on-primary` | `#171126` | Texto oscuro sobre botones de acento primario. |
| `--accent` | `#ffa877` | Acento luminoso para enlaces y elementos interactivos. |
| `--accent-soft` | `#3a2638` | Fondos de etiquetas y acentos suaves en tema oscuro. |
| `--danger` | `#ff8a75` | Estados de error adaptados para contraste oscuro. |

---

## 3. Tokens Semánticos para Diagramas de Flujo

Definidos en `src/components/flujo/flujo-tokens.css` y compartidos por los módulos interactivos de **AutoPost** (R1) y **PostuAyuda** (R2). Emplean la función CSS `color-mix` para generar fondos suaves (`-soft`) y textos legibles (`-text`) que responden automáticamente al tema activo.

| Token Base | Tema Claro | Tema Oscuro | Significado Semántico en el Flujo |
|---|---|---|---|
| `--flujo-ok` | `#2e9e5b` | `#3fbf7a` | Cumplimiento pleno, confirmación, paso exitoso o postulación lista. |
| `--flujo-warn` | `#d98b1f` | `#e5a03a` | Falta de datos, espera de respuesta, retención preventiva o caso pausado. |
| `--flujo-bad` | `#c2452f` | `#ff8a75` | Condición no cumplida, vacante inactiva, vencimiento o no viable. |
| `--flujo-human` | `#8b5cc6` | `#a98be0` | Punto de intervención humana o revisión por equipo de ClickJr. |
| `--flujo-info` | `#3b82c4` | `#5aa0e0` | Datos de entrada, verificación preliminar o consulta de catálogo. |
| `--flujo-link` | `#5b6bc0` | `#8392e0` | Derivación inter-módulo (handoff AutoPost ↔ PostuAyuda). |
| `--flujo-decision` | `#b3451a` | `#b3451a` | Nodo de decisión o evaluación condicional bifurcada. |

---

## 4. Tipografía y Jerarquía Textual

- **Familia tipográfica principal:** `Arial, Helvetica, sans-serif` (definida en `:root`). Tipografía de sistema con alta legibilidad, carga inmediata sin latencia ni dependencias de fuentes externas.
- **Optimizaciones de renderizado:** `font-synthesis: none;` y `text-rendering: optimizeLegibility;` para máxima nitidez en pantallas de escritorio.
- **Jerarquía:**
  - Encabezados principales (`h1`, `h2`): peso semibold / bold, color `--text`.
  - Sentencias lógicas oficiales: destacadas mediante el componente `SentenceCard` con tipografía estilizada, comillas tipográficas y contenedor elevado.
  - Explicaciones de tramos y supuestos: texto estructurado con rótulos claros para diferenciar lo normativo de las decisiones de diseño.

---

## 5. Criterios de Maquetación y Responsividad

- **Ancho máximo de contenido (`--content-width`):** `1120px` centrado con márgenes simétricos.
- **Enfoque de evaluación (`REQ-LAN-08`):** La evaluación se centra en resolución de escritorio (_desktop_, referencia 1280 px).
- **Adaptación complementaria:**
  - Breakpoint en `768px`: en pantallas anchas se presenta la navegación segmentada en el encabezado; en pantallas angostas se despliega la barra de navegación inferior tipo dock (`MobileNavigation`).
  - En los módulos de flujo (R1 y R2), en pantallas reducidas se dispone la explicación arriba y el diagrama abajo con desplazamiento horizontal contenido para no romper la visualización de los grafos.

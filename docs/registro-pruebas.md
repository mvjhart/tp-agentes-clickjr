# Registro de Pruebas, Verificaciones y Revisión Integral

Documento formal correspondiente a la **Tarea T13** (Pruebas y revisión general). Registra el protocolo de pruebas, el entorno de ejecución, los resultados de la inspección sobre la landing page integrada y el detalle de las observaciones e incidencias detectadas por el equipo.

---

## 1. Información General y Entorno de Evaluación

- **Fecha de ejecución:** 2026-11-23.
- **Participantes:** Los cuatro integrantes del equipo (Federico Acosta Maneiro, Candelaria Chazarreta, Marcos Aquino y Victoria Mariani).
- **Entorno del sistema operativo:** Linux Fedora (entorno de escritorio KDE Plasma).
- **Navegadores web evaluados:**
  - Mozilla Firefox.
  - Brave Browser.
- **Resolución de pantalla de prueba:** Formato de escritorio (_desktop_, referencia principal 1280 px de ancho), conforme a la restricción `REQ-LAN-08`.
- **Estado de integración del código:** Todos los módulos integrados (`src/pages/Inicio/`, `src/pages/PropuestaR1/`, `src/pages/PropuestaR2/`, `src/components/flujo/`, `src/components/layout/` y navegación centralizada).

---

## 2. Matriz de Verificaciones de la Landing Page

A continuación se detalla la comprobación punto por punto respecto de los requisitos de la consigna (`REQ-xxx`):

| Requisito / Área | Aspecto evaluado | Resultado | Observaciones del equipo |
|---|---|---|---|
| **`REQ-LAN-01`** | Presentación de ClickJr, origen IFTS 16 y sentencias textuales R1 y R2. | **Conforme** | Se constató la redacción textual exacta en `SentenceCard`, el reconocimiento del IFTS 16 en `ContextCard` y la descripción del servicio. |
| **`REQ-LAN-02`** | Diagramas de flujo agénticos gráficos y legibles en R1 y R2. | **Conforme** | Ambos módulos renderizan los tramos en HTML/CSS y el diagrama completo en Mermaid con la simbología y colores acordados. Exportación a SVG corregida en modo portable (PR #34). |
| **`REQ-LAN-03`** | Desplegables interactivos y accesibilidad por teclado. | **Conforme** | Apertura/cierre fluido con mouse y teclado (`Tab`, `Enter`, `Espacio`), foco visible en chips de salto inter-tramo y desplazamiento automático hacia el tramo de destino. |
| **`REQ-LAN-04`** | Logotipo original de ClickJr y temas claro y oscuro. | **Conforme** | Visualización correcta del imagotipo y variantes clara y oscura. Persistencia del tema en `localStorage` comprobada al recargar en ambos navegadores. |
| **`REQ-LAN-05`** | Recorrido lógico: camino del sí, camino del no y distinción de supuestos. | **Conforme** | Se verificaron los recorridos de cumplimiento pleno y de retención/excepción. Los supuestos adicionales están rotulados explícitamente frente a las sentencias normativas. |
| **`REQ-LAN-06`** | Estructura agéntica: herramientas, datos, reglas e intervención humana. | **Conforme** | Ambos módulos especifican herramientas conceptuales de consulta y puntos de intervención humana. |
| **`REQ-LAN-07`** | Denominaciones institucionales y beneficios en 2–3 frases. | **Conforme** | Presentación clara de **AutoPost** (R1) y **PostuAyuda** (R2) con sus títulos y resúmenes de beneficio. |
| **`REQ-LAN-08`** | Maquetación y lectura en escritorio (_desktop_). | **Conforme** | Contenido centrado a 1120 px (`--content-width`) con márgenes simétricos y tipografía legible sin desbordes horizontales no controlados. |
| **Automatización** | Análisis estático (`npm run lint`) y build (`npm run build`). | **Conforme** | 0 errores de ESLint; compilación limpia de Vite completada en modo producción. |

---

## 3. Incidencias Detectadas y Acciones Requeridas

Durante las pruebas integrales se identificaron dos incidencias técnicas/visuales y una oportunidad de mejora:

### Incidencia 1: Descarga del SVG completo con cajas geométricas vacías (sin texto)
- **Módulo afectado:** `PropuestaR1` y `PropuestaR2` (botón «Descargar SVG completo» en `DiagramaCompleto.jsx`).
- **Problema detectado:** Al descargar el archivo SVG generado por Mermaid y abrirlo en visores externos de imágenes o navegadores, se descargan los rectángulos y conectores gráficos pero sin el texto de los nodos (cajas vacías).
- **Diagnóstico técnico:** En `src/utils/mermaidSvg.js`, la inicialización de Mermaid utilizaba `flowchart: { htmlLabels: true }`. Esto renderizaba las etiquetas de texto mediante elementos HTML embebidos (`<foreignObject><div>...</div></foreignObject>`) que dependen de hojas de estilos externas del DOM activo. Al serializar el SVG aislado para la descarga, los visores externos no procesaban el HTML dentro de `<foreignObject>`, resultando en texto invisible.
- **Acción aplicada:** Se actualizó `src/utils/mermaidSvg.js` para admitir `{ tema, portable }` (`htmlLabels: !portable` y `useMaxWidth: !portable`), y `DiagramaCompleto.jsx` pasó a invocar la descarga con `{ tema: 'light', portable: true }`, generando un SVG nativo con tamaño real y sin `<foreignObject>`.
- **Estado:** Resuelta (PR #34, commit `c819290`).

### Incidencia 2: Centrado dispar del bloque de encabezado en `/propuesta-r2`
- **Módulo afectado:** `src/pages/PropuestaR2/PropuestaR2.module.css`.
- **Problema detectado:** En la página de PostuAyuda (`/propuesta-r2`), el primer bloque (encabezado con título y descripción) había quedado centrado respecto al ancho total de la pantalla, mientras que en AutoPost (`/propuesta-r1`) y en el resto de los tramos del acordeón el texto se alinea con el margen izquierdo de la columna de lectura.
- **Diagnóstico técnico:** En `src/pages/PropuestaR2/PropuestaR2.module.css`, la clase `.encabezado` contaba con la propiedad `margin-inline: auto;`, a diferencia de `src/pages/PropuestaR1/PropuestaR1.module.css` que no la incluye.
- **Acción aplicada:** Se eliminó `margin-inline: auto;` en `PropuestaR2.module.css` y se normalizó el formato del archivo con Prettier, unificando la alineación izquierda entre `/propuesta-r1` y `/propuesta-r2`.
- **Estado:** Resuelta (PR #36, commit `d25a6ba`, y ajuste de formato posterior).

### Oportunidad de Mejora 3: Títulos dinámicos de pestaña en el navegador
- **Componente afectado:** `src/components/layout/PageTitle.jsx`, `src/components/layout/Layout.jsx` y `src/components/navigation/navigation.js`.
- **Observación:** Todas las rutas mantenían originalmente el título estático `<title>ClickJr</title>` en la pestaña del navegador. Se incorporó la actualización dinámica del título según la ruta activa (`ClickJr`, `ClickJr | AutoPost`, `ClickJr | PostuAyuda` y `ClickJr | Página no encontrada`).
- **Estado:** Implementada (PR #35, commit `ba28f5f`).

---

## 4. Dictamen Final del Equipo

El funcionamiento general de la landing page, su navegación interactiva, accesibilidad por teclado, sistema de temas y lógica de las sentencias agénticas se encuentran **aprobados por el equipo**, con las dos incidencias detectadas y la mejora de títulos dinámicos ya resueltas en `master` y verificadas en el despliegue de Vercel (Tarea T15). Resta únicamente completar el registro de evidencia de iteración en `README.md` (Tarea T14).

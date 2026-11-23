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
| **`REQ-LAN-02`** | Diagramas de flujo agénticos gráficos y legibles en R1 y R2. | **Conforme en pantalla** | Ambos módulos renderizan los tramos en HTML/CSS y el diagrama completo en Mermaid con la simbología y colores acordados. |
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
- **Diagnóstico técnico:** En `src/utils/mermaidSvg.js`, la inicialización de Mermaid utiliza `flowchart: { htmlLabels: true }`. Esto renderiza las etiquetas de texto mediante elementos HTML embebidos (`<foreignObject><div>...</div></foreignObject>`) que dependen de hojas de estilos externas del DOM activo. Al serializar el SVG aislado para la descarga, los visores externos no procesan el HTML dentro de `<foreignObject>`, resultando en texto invisible.
- **Acción requerida:** Ajustar la utilidad de exportación o la configuración de Mermaid para asegurar que las etiquetas de texto se rendericen mediante elementos nativos `<text>` de SVG (`htmlLabels: false`) o incrustar las reglas CSS requeridas al exportar.
- **Estado:** Informado al equipo para su corrección.

### Incidencia 2: Centrado dispar del bloque de encabezado en `/propuesta-r2`
- **Módulo afectado:** `src/pages/PropuestaR2/PropuestaR2.module.css`.
- **Problema detectado:** En la página de PostuAyuda (`/propuesta-r2`), el primer bloque (encabezado con título y descripción) quedó centrado respecto al ancho total de la pantalla, mientras que en AutoPost (`/propuesta-r1`) y en el resto de los tramos del acordeón el texto se alinea con el margen izquierdo de la columna de lectura.
- **Diagnóstico técnico:** En `src/pages/PropuestaR2/PropuestaR2.module.css`, la clase `.encabezado` cuenta con la propiedad `margin-inline: auto;`, a diferencia de `src/pages/PropuestaR1/PropuestaR1.module.css` que no la incluye.
- **Acción requerida:** Remover `margin-inline: auto;` en `PropuestaR2.module.css` para unificar la alineación de todas las páginas secundarias.
- **Estado:** Informado a Marcos Aquino / equipo para su ajuste.

### Oportunidad de Mejora 3: Títulos dinámicos de pestaña en el navegador
- **Componente afectado:** `index.html` y enrutador (`src/App.jsx` o hook de título).
- **Observación:** Actualmente todas las rutas mantienen el título estático `<title>Clickjr</title>` en la pestaña del navegador. Se evaluó conveniente actualizar dinámicamente el título según la ruta activa (p. ej., `ClickJr · Inicio`, `ClickJr · Propuesta R1 (AutoPost)`, `ClickJr · Propuesta R2 (PostuAyuda)`).
- **Estado:** Anotada para evaluación grupal según conveniencia y tiempo disponible antes de la entrega.

---

## 4. Dictamen Final del Equipo

El funcionamiento general de la landing page, su navegación interactiva, accesibilidad por teclado, sistema de temas y lógica de las sentencias agénticas se encuentran **aprobados por el equipo**, quedando la versión final sujeta a la corrección de las dos incidencias visuales y de exportación reportadas.

# Estado del Proyecto y Pendientes

Documento vivo para el seguimiento del trabajo diario, sincronización entre sesiones y registro de definiciones requeridas.

---

## 1. Tareas en curso y pendientes

### Tareas inmediatas (en curso)

- **Ninguna al momento.** Todas las tareas planificadas (T1–T15) se encuentran completadas y verificadas.

### Completadas

- [x] Diseñar y acordar la estructura del sistema de documentación persistente y el protocolo para agentes (Aprobado: 2026-11-04, DEC-001).
- [x] Crear la infraestructura base de documentación: `.gitignore`, `AGENTS.md`, `docs/contexto.md`, `docs/decisiones.md`, `docs/estado.md` y `docs/historial.md`.
- [x] Establecer convenciones de commits, granularidad y verificaciones obligatorias (`docs/convenciones-commits.md` y `AGENTS.md`).
- [x] Incorporar verificación inicial obligatoria del repositorio y reporte de inicio de sesión en `AGENTS.md`.
- [x] Analizar y catalogar la consigna oficial completa y el caso asignado ClickJr en `docs/consigna.md`.
- [x] Actualizar `docs/contexto.md` con la información confirmada del TP, la startup ClickJr y sus sentencias.
- [x] Elaborar e incorporar la propuesta integral de organización del trabajo colaborativo en `docs/organizacion.md`.
- [x] Validar y aprobar grupalmente la organización del trabajo colaborativo, confirmando los cuatro integrantes y asignando sus roles coordinadores (Aprobado: 2026-11-16).
- [x] Recuperar e incorporar el logo original de ClickJr y preparar las variantes necesarias para su visualización en temas claro y oscuro. La variante oscura conserva el diseño original y adapta uno de sus colores para mantener la legibilidad (Tarea T2).
- [x] Definir y aprobar React como stack tecnológico frontend de la landing page (Aprobado: 2026-11-16, DEC-002).
- [x] Definir y aprobar Vercel como plataforma de despliegue web (Aprobado: 2026-11-16, DEC-003).
- [x] Definir y aprobar Vite como herramienta de scaffolding y build para React (Aprobado: 2026-11-16, DEC-004).
- [x] Definir Prettier como herramienta de formateo del código (DEC-005).
- [x] Definir ESLint como herramienta de análisis estático y detección de problemas en el código (DEC-006).
- [x] Definir React Router como solución de navegación y enrutamiento de la aplicación (DEC-007).
- [x] Definir CSS Modules como estrategia de organización y encapsulamiento de estilos por componente o página (DEC-008).
- [x] Definir el sistema de temas claro y oscuro mediante variables CSS y preferencia del sistema operativo, con posibilidad de selección explícita (DEC-009).
- [x] Definir una estructura modular para organizar componentes, layout, páginas y estilos globales (DEC-010).
- [x] Inicializar el proyecto React con Vite e incorporar las dependencias y configuración base del entorno de desarrollo.
- [x] Preparar la estructura inicial de directorios, componentes y páginas de la aplicación.
- [x] Configurar la navegación inicial y las rutas principales de la landing page.
- [x] Incorporar los archivos gráficos de ClickJr al proyecto: logo principal y favicon en formato SVG.
- [x] Implementar la estructura inicial del encabezado y su adaptación a dispositivos móviles.
- [x] Incorporar la base de estilos globales, variables visuales y soporte para temas claro y oscuro.
- [x] Crear el `README.md` principal del repositorio con la estructura de orientación, presentación del caso, nómina del equipo, protocolo de agentes y tablas para aportes e IA.
- [x] Redactar e incorporar la guía de contribución del repositorio en `docs/CONTRIBUTING.md`.
- [x] Definir e implementar el workflow de integración continua (CI) con GitHub Actions para validar ESLint y build ante pushes y PRs (DEC-011).
- [x] Implementar la estructura y navegación general de la landing page: navegación segmentada para escritorio, dock inferior para dispositivos móviles, configuración centralizada de rutas, componente compartido de íconos, selector de temas claro/oscuro con preferencia del sistema y persistencia en localStorage, footer con identidad visual y repositorio, y metadatos Open Graph con carga optimizada sin destello visual (Tarea T7 / Victoria Mariani).
- [x] Configurar y poner en marcha el despliegue continuo en Vercel (https://tp-agentes-clickjr.vercel.app/), verificando la accesibilidad pública sin credenciales ni autenticación (DEC-003, REQ-PUB-01).
- [x] Elaborar la ficha de análisis lógico de la sentencia R1: desglose de condiciones, datos necesarios y consecuencia, con las interpretaciones rotuladas frente a los supuestos de diseño del grupo (Tarea T3 / Candelaria Chazarreta · `docs/analisis-r1.md`, rama `feat/propuesta-r1`).
- [x] Redactar la propuesta conceptual de solución agéntica para R1: herramientas de consulta, alternativas de confirmación y privacidad, orden de evaluación ante fallas múltiples, caso límite y puntos de coordinación con R2 (Tarea T5 / Candelaria Chazarreta · `docs/propuesta-r1.md`, rama `feat/propuesta-r1`).
- [x] Desarrollar el módulo de presentación de ClickJr: logo original con variantes clara y oscura, servicio y problema que atiende, origen en IFTS 16, bloque asignado, equipo IFTS 29 y las dos sentencias originales con su redacción exacta mediante `SentenceCard` y tarjetas de contexto `ContextCard` (Tarea T8 / Federico Acosta Maneiro y Victoria Mariani · `src/pages/Inicio/`, integrado en `master`).
- [x] Elaborar la ficha de análisis lógico de la sentencia R2 (Tarea T4 / Marcos Aquino · `docs/analisis-r2.md`).
- [x] Redactar la propuesta conceptual de solución agéntica para R2 (Tarea T6 / Marcos Aquino · `docs/propuesta-r2.md`).
- [x] Desarrollar el módulo de la propuesta R1 con su diagrama y desplegable (Tarea T9 / Candelaria Chazarreta · `src/pages/PropuestaR1/`). Incluye acordeón interactivo, diagramas HTML/CSS, suite compartida `src/components/flujo/` y descarga del diagrama completo en SVG mediante Mermaid ([DEC-012](decisiones.md#dec-012-adopción-de-mermaid-para-el-renderizado-de-diagramas-de-flujo)).
- [x] Desarrollar el módulo de la propuesta R2 con su diagrama y desplegable (Tarea T10 / Marcos Aquino · `src/pages/PropuestaR2/`). Reutiliza los componentes compartidos de flujo, acordeón de 4 tramos y diagrama Mermaid interactivo de PostuAyuda.
- [x] Definir y acordar el diseño visual general de la landing page, paleta de colores, tipografía, variables de tema claro/oscuro y tokens compartidos para diagramas de flujo (Tarea T11 / Los cuatro integrantes · `docs/diseno-visual.md`).
- [x] Coordinar la integración técnica final de todos los módulos y componentes en la landing page (Inicio, PropuestaR1, PropuestaR2, navegación, layout y soporte responsive) (Tarea T12 / Victoria Mariani).
- [x] Definir y ratificar el mantenimiento exclusivo de la identidad institucional de ClickJr, descartando la creación de logos o identidades de consultora con IA ([DEC-013](decisiones.md#dec-013-mantenimiento-exclusivo-de-la-identidad-institucional-de-clickjr)).
- [x] Realizar las pruebas, verificaciones y revisión integral del proyecto en múltiples navegadores desktop, documentando los casos evaluados, incidencias detectadas y ajustes pendientes (Tarea T13 / Los cuatro integrantes · `docs/registro-pruebas.md`).
- [x] Subsanar las incidencias detectadas en T13 e incorporar mejora de títulos dinámicos: exportación SVG portable en `mermaidSvg.js`/`DiagramaCompleto.jsx` (PR #34), componente `PageTitle` para títulos por ruta (PR #35), alineación del encabezado en `/propuesta-r2` (PR #36) y normalización de formato con Prettier.
- [x] Comprobar la accesibilidad pública y el correcto funcionamiento en producción de la landing page integrada en Vercel (`https://tp-agentes-clickjr.vercel.app/`), completando la verificación final (Tarea T15 - `REQ-PUB-01` y `REQ-PUB-02`).
- [x] Completar la documentación del proyecto y el registro de aportes y evidencias de iteración de IA de los cuatro integrantes en el `README.md` (Tarea T14 / Los cuatro integrantes).

---

## 2. Dudas y decisiones que requieren aprobación humana

### Estado actual de definiciones
- **Ninguna al momento.** Todas las decisiones técnicas, metodológicas y de identidad se encuentran acordadas por el equipo y formalizadas en [`docs/decisiones.md`](decisiones.md).

---

## 3. Próximos pasos recomendados

- Proyecto completo (T1–T15 finalizadas). Realizar únicamente la revisión final de la rama/commits y entrega por el canal indicado por la cátedra el 26/11/2026.

---

**Nota de seguimiento:** Los roles asignados identifican responsabilidades de coordinación y referencia para cada tarea, pero no representan una división exclusiva del trabajo. Todos los integrantes pueden colaborar, revisar y contribuir a las distintas actividades, de acuerdo con la organización acordada en `docs/organizacion.md`.

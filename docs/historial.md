# Historial de Cambios Relevantes

Bitácora cronológica y concisa de hitos y modificaciones significativas del proyecto. Complementa el historial granular de Git.

---

## [2026-11-19] - Módulo de presentación de ClickJr en la página de inicio (Tarea T8)

- **Resumen:**
  - Rediseño de la página de inicio como módulo de presentación: logo original de ClickJr con variantes para tema claro y oscuro, descripción del servicio y del problema que atiende, reconocimiento del origen en IFTS 16, bloque asignado y equipo IFTS 29.
  - Incorporación de las dos sentencias originales (R1 y R2) con su redacción exacta, mediante el nuevo componente `SentenceCard`.
  - Verificación con `npm run lint` y `npm run build` sin errores. `npm run format:check` reporta advertencias en todo el proyecto por saltos de línea CRLF locales en Windows (`core.autocrlf=true`); no afecta a lo commiteado, que se guarda en LF.
  - Trabajo realizado en la rama `feat/modulo-presentacion`, aún no integrado en `master`.
- **Archivos creados:**
  - `src/pages/Inicio/SentenceCard.jsx`
  - `src/pages/Inicio/SentenceCard.module.css`
- **Archivos modificados:**
  - `src/pages/Inicio/Inicio.jsx`
  - `src/pages/Inicio/Inicio.module.css`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-18] - Análisis lógico y propuesta conceptual de la solución agéntica de R1 (Tareas T3 y T5)

- **Resumen:**
  - Creación de la ficha de análisis lógico de la sentencia R1 (`docs/analisis-r1.md`): transcripción textual, desglose de la conjunción de seis condiciones (C1 a C6), datos necesarios y consecuencia («solicita el envío»), con las interpretaciones rotuladas y delimitadas respecto de los supuestos de diseño del grupo.
  - Creación de la propuesta conceptual de solución agéntica de R1 (`docs/propuesta-r1.md`): herramientas conceptuales de consulta, tres alternativas de confirmación y privacidad antes de transmitir datos, orden de evaluación ante fallas simultáneas con derivación a R2 condicionada a C1, C2 y C6, caso límite de cambio de estado entre la verificación y el envío, intervención humana y opciones de título.
  - Registro de los puntos a coordinar con Marcos Aquino (Rol 3 · R2) y de las decisiones de diseño pendientes de acuerdo del equipo.
  - Actualización de `README.md` (aportes, registro de herramientas de IA con evidencia de iteración, estructura y tabla de documentación), `docs/estado.md` y `docs/historial.md`.
  - Trabajo realizado en la rama `feat/propuesta-r1` (commits `f108694`, `41f2e10` y `8b247b9`), aún no integrado en `master`.
- **Archivos creados:**
  - `docs/analisis-r1.md`
  - `docs/propuesta-r1.md`
- **Archivos modificados:**
  - `README.md`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-17] - Estructura y navegación general de la landing page y despliegue en Vercel (Tarea T7)

- **Resumen:**
  - Centralización de las opciones y rutas de navegación en una configuración modular compartida (`navigation.js`).
  - Creación de componentes reutilizables: enlace de navegación con estados activos (`NavigationLink`) y renderizado de íconos SVG vectoriales (`Icon`).
  - Implementación de navegación segmentada para resoluciones de escritorio y dock inferior (`MobileNavigation`) para dispositivos móviles.
  - Actualización del layout general y encabezado con espaciado responsive (breakpoint de 768 px).
  - Incorporación del selector de tema claro/oscuro (`ThemeToggle`) con detección de preferencia del sistema y persistencia en `localStorage`.
  - Actualización del footer con el isotipo de ClickJr, créditos institucionales (Grupo 11 - IFTS Nº 29) y enlace externo al repositorio.
  - Incorporación de metadatos Open Graph e imagen de vista previa (`clickjr-og.webp`).
  - Optimización de la carga inicial en `index.html` trasladando los estilos globales y aplicando un script en cabecera para prevenir destellos visuales (FOUC).
  - Puesta en marcha y verificación del despliegue continuo en Vercel en la URL pública https://tp-agentes-clickjr.vercel.app/ ([`DEC-003`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md), `REQ-PUB-01`).
  - Verificación integral satisfactoria con `npm run format:check`, `npm run lint` y `npm run build`.
- **Archivos creados:**
  - `public/assets/clickjr/clickjr-og.webp`
  - `src/components/layout/MobileNavigation.jsx`
  - `src/components/layout/MobileNavigation.module.css`
  - `src/components/navigation/navigation.js`
  - `src/components/navigation/NavigationLink.jsx`
  - `src/components/navigation/NavigationLink.module.css`
  - `src/components/shared/Icon.jsx`
  - `src/components/theme/ThemeToggle.jsx`
  - `src/components/theme/ThemeToggle.module.css`
- **Archivos modificados:**
  - `index.html`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/Footer.module.css`
  - `src/components/layout/Header.jsx`
  - `src/components/layout/Header.module.css`
  - `src/components/layout/Layout.jsx`
  - `src/components/layout/Layout.module.css`
  - `src/main.jsx`

---

## [2026-11-16] - Automatización de Integración Continua con GitHub Actions

- **Resumen:**
  - Configuración del flujo de integración continua en `.github/workflows/ci.yml`.
  - Automatización de instalación limpia de dependencias (`npm ci`), verificación estática con ESLint (`npm run lint`) y compilación de producción con Vite (`npm run build`).
  - Activación automática del flujo ante eventos de `push` y `pull_request` hacia la rama `master`.
  - Formalización de la decisión técnica [`DEC-011`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) en `docs/decisiones.md`.
- **Archivos creados:**
  - `.github/workflows/ci.yml`
- **Archivos modificados:**
  - `docs/decisiones.md`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-16] - Actualización del README y documentación del entorno de desarrollo

- **Resumen:**
  - Actualización del `README.md` como guía de entrada al proyecto, reflejando el estado actual del repositorio y de la aplicación.
  - Incorporación de la estructura vigente de directorios y archivos de React, componentes, páginas, estilos y recursos gráficos de ClickJr.
  - Actualización de las referencias a las decisiones técnicas aprobadas: React, Vite, React Router y CSS Modules.
  - Documentación de las herramientas de calidad y formato del código: ESLint y Prettier.
  - Incorporación de instrucciones verificadas para instalar dependencias, iniciar el servidor de desarrollo, generar la compilación, previsualizarla y ejecutar las verificaciones disponibles.
  - Conservación de las secciones de organización, protocolo de agentes, integrantes y registro de herramientas de IA.

- **Archivos modificados:**
  - `README.md`
  - `docs/historial.md`

---

## [2026-11-16] - Preparación de estructura, navegación y entorno de desarrollo de ClickJr

- **Resumen:**
  - Inicialización del entorno de desarrollo con Vite y React, configurando ESLint y Prettier como herramientas de calidad y formato.
  - Implementación de la estructura base de componentes de layout (`Header`, `Footer`, `Layout`), estilos con CSS Modules y temas claro/oscuro.
  - Configuración del enrutamiento con React Router (`/`, `/propuesta-r1`, `/propuesta-r2`, ruta 404).
  - Incorporación de los recursos de marca originales de ClickJr en `public/assets/clickjr/`.
- **Archivos creados:**
  - `eslint.config.js`
  - `index.html`
  - `package.json`
  - `public/assets/clickjr/clickjr-favicon.svg`
  - `public/assets/clickjr/clickjr-logo-dark.svg`
  - `public/assets/clickjr/clickjr-logo.svg`
  - `src/App.jsx`
  - `src/components/layout/Footer.jsx`
  - `src/components/layout/Footer.module.css`
  - `src/components/layout/Header.jsx`
  - `src/components/layout/Header.module.css`
  - `src/components/layout/Layout.jsx`
  - `src/components/layout/Layout.module.css`
  - `src/main.jsx`
  - `src/pages/Inicio/Inicio.jsx`
  - `src/pages/Inicio/Inicio.module.css`
  - `src/pages/NoEncontrada/NoEncontrada.jsx`
  - `src/pages/NoEncontrada/NoEncontrada.module.css`
  - `src/pages/PropuestaR1/PropuestaR1.jsx`
  - `src/pages/PropuestaR1/PropuestaR1.module.css`
  - `src/pages/PropuestaR2/PropuestaR2.jsx`
  - `src/pages/PropuestaR2/PropuestaR2.module.css`
  - `src/styles/global.css`
  - `vite.config.js`
- **Archivos modificados:**
  - `.gitignore`
  - `docs/historial.md`

---

## [2026-11-16] - Incorporación de la guía de contribución al repositorio

- **Resumen:**
  - Redacción y publicación de `docs/CONTRIBUTING.md` para estandarizar el flujo colaborativo, trabajo con ramas, commits, Pull Requests y revisiones entre pares.
  - Documentación de pautas para la interacción de los integrantes con agentes de programación y sincronización con GitHub Issues y Projects.
- **Archivos creados:**
  - `docs/CONTRIBUTING.md`
- **Archivos modificados:**
  - `docs/historial.md`

---

## [2026-11-16] - Mantenimiento documental permanente en protocolo agéntico, adopción de Vite y plantilla de Pull Requests

- **Resumen:**
  - Ampliación de `AGENTS.md` incorporando la obligación de revisión documental continua en cada tarea, informe obligatorio de impacto documental y autorización procedimental permanente y limitada para el cierre factual en `docs/historial.md` y `docs/estado.md` con prevalencia de instrucciones restrictivas humanas.
  - Registro formal de la decisión arquitectónica [`DEC-004`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) en `docs/decisiones.md`: adopción de Vite como herramienta de scaffolding y build para la aplicación React ([`DEC-002`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md)).
  - Creación de la plantilla colaborativa de Pull Requests en `.github/pull_request_template.md` con checklist de construcción agéntica, impacto documental y convenciones de commits.
  - Actualización de referencias en `docs/contexto.md` y `docs/estado.md`.
- **Archivos creados:**
  - `.github/pull_request_template.md`
- **Archivos modificados:**
  - `AGENTS.md`
  - `docs/contexto.md`
  - `docs/decisiones.md`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-16] - Creación del README principal, confirmación de integrantes y aprobación de decisiones técnicas

- **Resumen:**
  - Creación del `README.md` principal del repositorio como puerta de entrada y guía de orientación, estructurado según los requisitos oficiales (`REQ-DOC-01` a `REQ-DOC-04`): presentación de ClickJr, sentencias textuales R1 y R2, delimitación conceptual, protocolos operativos y tablas para aportes e IA.
  - Incorporación de la nómina completa y confirmada del equipo (Federico Acosta Maneiro, Candelaria Chazarreta, Marcos Aquino y Victoria Mariani) con enlaces a sus perfiles de GitHub y asignación formal de los cuatro roles coordinadores acordados en `docs/organizacion.md`.
  - Formalización de las decisiones técnicas aprobadas por el equipo en `docs/decisiones.md`: React como tecnología frontend de la landing page ([`DEC-002`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md)) y Vercel como plataforma de despliegue web ([`DEC-003`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md)).
  - Actualización de `docs/contexto.md` y `docs/estado.md` para reflejar los integrantes confirmados, las tecnologías adoptadas, las tareas completadas y la priorización de los próximos pasos inmediatos.
- **Archivos creados:**
  - `README.md`
- **Archivos modificados:**
  - `docs/contexto.md`
  - `docs/decisiones.md`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-04] - Incorporación de la consigna oficial y propuesta de organización colaborativa

- **Resumen:**
  - Análisis y catalogación de la consigna oficial del TP y del caso asignado ClickJr (bloque Postulación y permisos) en `docs/consigna.md`.
  - Actualización de `docs/contexto.md` con objetivos, alcance y delimitaciones conceptuales.
  - Incorporación de la propuesta integral de organización de trabajo colaborativo en `docs/organizacion.md` (4 roles coordinadores, 15 tareas en 5 etapas, metodología paralela con Git y futuras GitHub Issues).
  - Actualización del estado de tareas y definiciones requeridas en `docs/estado.md`.
- **Archivos creados:**
  - `docs/consigna.md`
  - `docs/organizacion.md`
- **Archivos modificados:**
  - `docs/contexto.md`
  - `docs/estado.md`
  - `docs/historial.md`

---

## [2026-11-04] - Protocolo de verificación obligatoria del repositorio al iniciar sesión

- **Resumen:**
  - Incorporación a `AGENTS.md` de la rutina obligatoria de verificación inicial del repositorio y reporte estructurado al comienzo de cada sesión.
  - Especificación del comportamiento frente a repositorios exclusivamente locales y con remotos configurados (consulta no destructiva vía `fetch`, prohibición de integración automática).
  - Definición de reglas de seguridad, concurrencia y preservación del árbol de trabajo.
- **Archivos modificados:**
  - `AGENTS.md`
  - `docs/historial.md`

---

## [2026-11-04] - Inicialización del sistema de documentación persistente

- **Resumen:**
  - Configuración inicial del repositorio con reglas para control de versiones y agentes de IA.
  - Creación del protocolo unificado para agentes en `AGENTS.md` (agnóstico de proveedores y con soporte para trabajo colaborativo).
  - Creación de la estructura base de documentación en `docs/`: contexto, registro de decisiones (ADRs), estado de tareas y este historial.
  - Configuración de `.gitignore` para excluir el espacio de trabajo personal `.local/` y archivos auxiliares de sistema operativo.
  - Ajuste de autoría e identificación: registro de Victoria Mariani (usuario técnico Git/GitHub: `mvjhart`) como iniciadora del espacio de trabajo y aprobación de DEC-001, e incorporación de la regla de distinción entre nombres e identificadores técnicos en `AGENTS.md`.
  - Definición de convenciones de commits, reglas de granularidad, plantilla y verificaciones obligatorias en `docs/convenciones-commits.md`, e integración al protocolo en `AGENTS.md`.
- **Archivos creados:**
  - `.gitignore`
  - `AGENTS.md`
  - `docs/contexto.md`
  - `docs/convenciones-commits.md`
  - `docs/decisiones.md`
  - `docs/estado.md`
  - `docs/historial.md`

# Historial de Cambios Relevantes

Bitácora cronológica y concisa de hitos y modificaciones significativas del proyecto. Complementa el historial granular de Git.

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

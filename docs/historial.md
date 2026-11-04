# Historial de Cambios Relevantes

Bitácora cronológica y concisa de hitos y modificaciones significativas del proyecto. Complementa el historial granular de Git.

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

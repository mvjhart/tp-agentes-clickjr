# Contexto del Proyecto

Este documento reúne la información central, objetivos, requisitos y convenciones del trabajo práctico. Es de lectura obligatoria al iniciar cualquier sesión de trabajo.

---

## 1. Información General del Proyecto
- **Proyecto:** Desafío de Construcción 100% Agéntica
- **Institución:** IFTS 29 (desarrollo basado en casos de lógica formulados en IFTS 16)
- **Repositorio:** [TP-Agentes](file:///home/riajhart/Proyectos/TP-Agentes)
- **Integrantes confirmados:**
  - Federico Acosta Maneiro (Git/GitHub: `federicosd06-dev`) — Rol 1: Presentación y contenido de ClickJr.
  - Candelaria Chazarreta (Git/GitHub: `kndxt`) — Rol 2: Análisis y propuesta de solución R1.
  - Marcos Aquino (Git/GitHub: `Marcos028`) — Rol 3: Análisis y propuesta de solución R2.
  - Victoria Mariani (inició este espacio de trabajo y su sistema de documentación; usuario técnico de Git/GitHub: `mvjhart`) — Rol 4: Estructura e integración técnica.
- **Fecha de Entrega:** 26/11/2026 (canal a definir por el docente).
- **Documento oficial de referencia:** [`docs/consigna.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/consigna.md) (contiene el catálogo de requisitos REQ-xxx y la rúbrica de evaluación).

---

## 2. Caso Asignado: Startup «ClickJr»
- **Startup:** ClickJr (portal de empleo junior enfocado en búsqueda de vacantes y seguimiento de postulaciones).
- **Origen:** Proyecto formulado por estudiantes del IFTS 16 (requiere mención y reconocimiento en la landing).
- **Bloque Asignado:** Postulación y permisos.
- **Sentencias lógicas asignadas:**
  - **Frase 1 (R1):** Postulación automática bajo cumplimiento pleno de condiciones y permisos.
  - **Frase 2 (R2):** Solicitud interactiva de información/permisos pendientes y retención de postulación.
  *(El detalle textual íntegro se encuentra en `docs/consigna.md`).*

---

## 3. Objetivo General y Alcance
- **Objetivo Principal:** Diseñar y construir una landing page que presente a ClickJr y exponga claramente dos propuestas de soluciones agénticas para sus sentencias lógicas, mediante diagramas de flujo y paneles desplegables interactivos.
- **Metodología de Desarrollo:** Construcción 100% agéntica. Las personas dirigen, especifican requerimientos y validan; los agentes de programación generan y modifican el código. No se permite la edición manual de código.
- **Alcance y Delimitación:** La landing cumple una función expositiva y explicativa. **No debe integrar IA operativa, ejecutar agentes, conectar APIs ni implementar un backend real.**

---

## 4. Requisitos y Restricciones Principales
- **Visualización y UX:** Evaluación exclusiva en formato de escritorio (desktop). Navegación de desplegables operable mediante clic y teclado.
- **Logo oficial:** Obligatoriedad de incluir el logo original de ClickJr completo y legible (material provisto por cátedra).
- **Tecnología Frontend y Herramientas:** React como framework/biblioteca frontend (decisión aprobada en [`docs/decisiones.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) - DEC-002) y Vite como herramienta de scaffolding y build ([`docs/decisiones.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) - DEC-004).
- **Publicación y entrega:** Repositorio público y sitio web desplegado en Vercel (decisión aprobada en [`docs/decisiones.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) - DEC-003), accesibles sin necesidad de autenticación ni inicio de sesión.
- **README obligatorio:** Documentar integrantes, aportes concretos y registro detallado de herramientas de IA utilizadas (aplicación, modelo exacto, uso y cambios solicitados).

---

## 5. Convenciones y Reglas de Trabajo
- **Idioma de la documentación:** Español.
- **Protocolo de agentes de IA:** Obligatoriedad de seguir las pautas detalladas en [`AGENTS.md`](file:///home/riajhart/Proyectos/TP-Agentes/AGENTS.md).
- **Convenciones de commits:** Obligatoriedad de seguir las pautas, plantilla y verificaciones detalladas en [`docs/convenciones-commits.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/convenciones-commits.md).
- **Gestión de versiones (Git):**
  - Los archivos compartidos se mantienen y coordinan en el repositorio Git.
  - La carpeta `.local/` está excluida del control de versiones para preservar la privacidad y el trabajo personal de cada integrante.
- **Trazabilidad de cambios:** Toda decisión arquitectónica o funcional debe quedar registrada formalmente en [`docs/decisiones.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md) tras su aprobación humana.

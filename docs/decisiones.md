# Registro de Decisiones de Arquitectura y Diseño (ADRs)

Este archivo almacena el historial cronológico de decisiones técnicas, funcionales y de diseño confirmadas para el proyecto.

### Reglas de este registro:
1. **Trazabilidad histórica:** Las decisiones pasadas no se eliminan ni se modifican retroactivamente sin justificación; se preservan para mantener la memoria del proyecto.
2. **Reemplazo:** Si una decisión cambia tras la revisión y acuerdo del equipo, se crea una nueva entrada con su propio ID indicando cuál reemplaza y justificando el cambio.
3. **Aprobación humana:** Solo se registran decisiones explícitamente aprobadas por integrantes del equipo. Las propuestas previas se mantienen en `docs/estado.md`.

---

### Plantilla para nuevas decisiones

```markdown
### [DEC-XXX] Título de la decisión
- **Fecha:** AAAA-MM-DD
- **Estado:** [Vigente | Reemplazada por DEC-YYY]
- **Propuesto por:** Integrante / Agente
- **Aprobado por:** Integrante humano
- **Decisión:** Descripción concisa y clara de la decisión tomada.
- **Justificación y alternativas:** Motivos técnicos o funcionales por los que se adoptó esta opción y qué alternativas fueron descartadas.
- **Reemplaza a:** N/A (o ID de la decisión que sustituye)
```

---

## Decisiones Registradas

### [DEC-001] Adopción de sistema de documentación persistente y protocolo de agentes
- **Fecha:** 2026-11-04
- **Estado:** Vigente
- **Propuesto por:** Agente de IA / Victoria Mariani
- **Aprobado por:** Victoria Mariani
- **Decisión:** Establecer una estructura de documentación persistente en `docs/` (`contexto.md`, `decisiones.md`, `estado.md`, `historial.md`), complementada por un protocolo unificado y agnóstico de proveedor en `AGENTS.md` y la exclusión en `.gitignore` de la carpeta de trabajo personal `.local/`.
- **Justificación y alternativas:** Asegurar la continuidad y preservación del contexto del proyecto a lo largo de múltiples sesiones y entre diferentes agentes o herramientas de IA utilizadas por el equipo. Permite trazabilidad estricta de decisiones, separación clara entre propuestas y acuerdos confirmados, y aislamiento del trabajo preliminar/personal de cada integrante.
- **Reemplaza a:** N/A

### [DEC-002] Adopción de React como tecnología frontend para la landing page
- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Equipo de trabajo
- **Aprobado por:** Federico Acosta Maneiro, Candelaria Chazarreta, Marcos Aquino, Victoria Mariani
- **Decisión:** Desarrollar la landing page interactiva utilizando React como biblioteca/framework frontend.
- **Justificación y alternativas:** La modularidad de componentes de React facilita la construcción independiente y reutilizable de los módulos asignados a cada integrante (diagramas de flujo y paneles desplegables de R1 y R2). Se evaluó la alternativa de HTML/CSS/JavaScript plano, pero el equipo optó por React para optimizar la componentización e integración técnica final (Rol 4).
- **Reemplaza a:** N/A

### [DEC-003] Adopción de Vercel como plataforma de despliegue web
- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Equipo de trabajo
- **Aprobado por:** Federico Acosta Maneiro, Candelaria Chazarreta, Marcos Aquino, Victoria Mariani
- **Decisión:** Publicar y hospedar la landing page del proyecto en la plataforma Vercel.
- **Justificación y alternativas:** Integración nativa y optimizada con aplicaciones React, automatización de compilación/despliegue mediante ramas y garantía de acceso público inmediato sin requerir inicio de sesión ni permisos especiales (`REQ-PUB-01`). Se evaluaron GitHub Pages y Netlify, seleccionando Vercel por su compatibilidad directa y simplicidad de configuración con el ecosistema React.
- **Reemplaza a:** N/A

### [DEC-004] Adopción de Vite como herramienta de scaffolding y build para React
- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani
- **Aprobado por:** Victoria Mariani
- **Decisión:** Utilizar Vite como herramienta de inicialización (scaffolding), servidor de desarrollo y empaquetador (build tool) para la aplicación frontend en React ([`DEC-002`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md)). Vercel continúa siendo la plataforma aprobada para el despliegue y hospedaje web ([`DEC-003`](file:///home/riajhart/Proyectos/TP-Agentes/docs/decisiones.md)). La adopción de esta herramienta establece el estándar técnico de construcción, pero no implica que el proyecto React ya se encuentre inicializado.
- **Justificación y alternativas:** Vite ofrece tiempos de arranque y Hot Module Replacement (HMR) extremadamente rápidos mediante ES Modules nativos, configuración mínima y compatibilidad directa y sin fricciones con el pipeline de compilación de Vercel. Se evaluaron alternativas como Create React App (obsoleta y sin mantenimiento activo) y frameworks como Next.js (descartada al no requerir renderizado del lado del servidor ni arquitectura backend, conforme a la delimitación del TP).
- **Reemplaza a:** N/A

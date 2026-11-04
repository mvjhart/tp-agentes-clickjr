# Registro de Decisiones de Arquitectura y Diseño (ADRs)

Este archivo almacena el historial inmutable de decisiones técnicas, funcionales y de diseño confirmadas para el proyecto.

### Reglas de este registro:
1. **Inmutabilidad:** Las decisiones pasadas **nunca se eliminan ni se modifican retroactivamente**.
2. **Reemplazo:** Si una decisión cambia, se crea una nueva entrada con su propio ID indicando cuál reemplaza y justificando el cambio.
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

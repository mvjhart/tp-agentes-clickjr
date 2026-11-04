# Estado del Proyecto y Pendientes

Documento vivo para el seguimiento del trabajo diario, sincronización entre sesiones y registro de definiciones requeridas.

---

## 1. Tareas en curso y pendientes

### Tareas inmediatas (pueden iniciarse)
- [ ] Obtener y verificar el archivo gráfico del logo original de ClickJr provisto por la cátedra (Responsable: [Pendiente]).
- [ ] Elaborar las fichas lógicas de las sentencias R1 y R2 de ClickJr según el paso 2.3 de la consigna (Responsable: [Pendiente]).
- [ ] Redactar el borrador conceptual de las dos propuestas de automatización agéntica (paso 2.4) (Responsable: [Pendiente]).

### Tareas pendientes de definición del equipo (bloqueadas o condicionadas)
- [ ] Validar y aprobar grupalmente la propuesta de organización del trabajo colaborativo (`docs/organizacion.md`).
- [ ] Confirmar nómina completa de integrantes del grupo (4 personas) y asignar referentes a los 4 roles y responsables a las tareas T1 a T15.
- [ ] Definir el stack tecnológico de la landing page (HTML/CSS/JS plano vs framework como React).
- [ ] Definir el formato técnico para los diagramas de flujo (SVG / HTML+CSS / imágenes acompañadas de texto).
- [ ] Definir si el grupo utilizará la opción de identidad propia (nombre de grupo/consultora y logo con IA).
- [ ] Crear las GitHub Issues para las tareas acordadas *(bloqueada hasta validación grupal de docs/organizacion.md)*.
- [ ] Construir la landing page 100% mediante agentes de programación (Estructura -> Contenido/Diagramas -> Diseño/Estilos) *(bloqueada hasta definir stack y propuestas)*.
- [ ] Redactar el `README.md` con integrantes, aportes y registro de aplicaciones/modelos de IA utilizados *(bloqueada hasta avanzar en el desarrollo)*.
- [ ] Publicar la landing page y comprobar accesibilidad pública sin sesión de ambos enlaces *(bloqueada hasta finalizar la landing)*.

### Completadas
- [x] Diseñar y acordar la estructura del sistema de documentación persistente y el protocolo para agentes (Aprobado: 2026-11-04).
- [x] Crear la infraestructura base de documentación: `.gitignore`, `AGENTS.md`, `docs/contexto.md`, `docs/decisiones.md`, `docs/estado.md` y `docs/historial.md`.
- [x] Establecer convenciones de commits, granularidad y verificaciones obligatorias (`docs/convenciones-commits.md` y `AGENTS.md`).
- [x] Incorporar verificación inicial obligatoria del repositorio y reporte de inicio de sesión en `AGENTS.md`.
- [x] Analizar y catalogar la consigna oficial completa y el caso asignado ClickJr en `docs/consigna.md`.
- [x] Actualizar `docs/contexto.md` con la información confirmada del TP, la startup ClickJr y sus sentencias.
- [x] Elaborar e incorporar la propuesta integral de organización del trabajo colaborativo en [`docs/organizacion.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/organizacion.md).

---

## 2. Dudas y decisiones que requieren aprobación humana

### Propuestas técnicas y arquitectónicas en evaluación
1. **Stack tecnológico frontend:**
   - *Alternativa A:* HTML5, CSS y JavaScript plano (sin dependencias, sin pasos de compilación complejos, despliegue directo e inmediato en GitHub Pages).
   - *Alternativa B:* React + Vite (componentización modular de diagramas y desplegables, pero introduce herramientas de empaquetado; React es explícitamente opcional).
2. **Formato de los diagramas de flujo:**
   - *Alternativa A:* SVG interactivo o estilizado (escalable, liviano y accesible).
   - *Alternativa B:* Componentes HTML/CSS con flexbox/grid.
   - *Alternativa C:* Imágenes generadas/exportadas acompañadas de texto explicativo.
3. **Identidad del grupo (opcional):**
   - Evaluar si el equipo desea crear una identidad de consultora y logo propio con IA, o enfocarse exclusivamente en la presentación de ClickJr.
4. **Propuesta de organización y distribución del trabajo (`docs/organizacion.md`):**
   - Esquema de 4 roles coordinadores no exclusivos: Rol 1 (Presentación y contenido de ClickJr), Rol 2 (Análisis y propuesta R1), Rol 3 (Análisis y propuesta R2), Rol 4 (Estructura general e integración técnica).
   - Desglose en 15 tareas (T1 a T15) organizadas en 5 etapas (A a E) y 6 fases temporales.
   - Flujo de trabajo con ramas independientes, PRs y posterior apertura de GitHub Issues.
   - *Estado:* Pendiente de revisión, validación grupal y asignación de integrantes a roles/tareas.

### Preguntas bloqueantes / Definiciones necesarias
- ¿Quiénes son los restantes 3 integrantes del grupo y qué rol/tareas coordinará cada uno?
- ¿Aprueba el equipo la propuesta de organización, etapas y tareas de `docs/organizacion.md`?
- ¿Dónde está disponible el archivo gráfico original del logo de ClickJr para incorporarlo al proyecto?
- ¿Qué plataforma de despliegue prefiere el equipo (GitHub Pages, Vercel, Netlify)?

---

## 3. Próximos pasos recomendados

1. Validar y aprobar en equipo la propuesta de organización de [`docs/organizacion.md`](file:///home/riajhart/Proyectos/TP-Agentes/docs/organizacion.md), confirmando la nómina de 4 integrantes y asignando referentes a los roles.
2. Definir el stack tecnológico y registrar las decisiones correspondientes en `docs/decisiones.md`.
3. Incorporar el logo original de ClickJr (Tarea T2).
4. Proceder con el análisis lógico de R1 y R2 (Tareas T3 y T4) y la formulación de propuestas conceptuales (Tareas T5 y T6).
5. Desglosar las tareas acordadas en GitHub Issues una vez aprobada la organización.

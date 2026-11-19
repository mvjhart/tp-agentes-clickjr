# Estado del Proyecto y Pendientes

Documento vivo para el seguimiento del trabajo diario, sincronización entre sesiones y registro de definiciones requeridas.

---

## 1. Tareas en curso y pendientes

### Tareas inmediatas (pueden iniciarse)

- [ ] Elaborar la ficha lógica de la sentencia R2 de ClickJr según el paso 2.3 de la consigna (Responsable: Marcos Aquino / Rol 3 - Tarea T4).
- [ ] Redactar el borrador conceptual de la propuesta agéntica R2 (paso 2.4 - Tarea T6) (Responsable: Marcos Aquino / Rol 3).

### Tareas pendientes de definición del equipo o condicionadas

- [ ] Definir el formato técnico para los diagramas de flujo en React (componentes SVG / HTML+CSS / imágenes acompañadas de texto).
- [ ] Definir si el grupo utilizará la opción de identidad propia (nombre de grupo/consultora y logo con IA).
- [ ] Desarrollar el módulo de la propuesta R1 con su diagrama y desplegable (Tarea T9 / Candelaria Chazarreta), una vez acordados con Marcos Aquino los puntos indicados en la sección 2.
- [ ] Desarrollar el módulo de la propuesta R2 con su diagrama y desplegable (Tarea T10 / Marcos Aquino).
- [ ] Completar el diseño visual de la landing page (Tarea T11), en coordinación con el contenido y los módulos.
- [ ] Integrar los componentes y módulos en la landing page (Tarea T12).
- [ ] Realizar las pruebas, verificaciones y revisión integral del proyecto (Tarea T13).
- [ ] Completar el registro de aportes y herramientas de IA en el `README.md` a medida que avance el desarrollo (Tarea T14).
- [ ] Comprobar la accesibilidad pública y el correcto funcionamiento en producción de la landing page y todos sus módulos integrados tras completar el desarrollo (Tarea T15 - `REQ-PUB-01` y `REQ-PUB-02`).

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
- [x] Redactar la propuesta conceptual de solución agéntica para R1: herramientas de consulta, alternativas de confirmación y privacidad, orden de evaluación ante fallas múltiples, caso límite y puntos de coordinación con R2 (Tarea T5 / Candelaria Chazarreta · `docs/propuesta-r1.md`, rama `feat/propuesta-r1`). Las decisiones entre alternativas siguen pendientes de acuerdo del equipo.
- [x] Desarrollar la primera versión del módulo de presentación de ClickJr: logo original con variantes clara y oscura, servicio y problema que atiende, origen en IFTS 16, bloque asignado, equipo IFTS 29 y las dos sentencias originales con su redacción exacta (Tarea T8 / Federico Acosta Maneiro · `src/pages/Inicio/`, rama `feat/modulo-presentacion`). Pendiente de revisión e integración en `master`.

---

## 2. Dudas y decisiones que requieren aprobación humana

### Propuestas técnicas y arquitectónicas en evaluación

1. **Formato de los diagramas de flujo en React:**
   - Alternativa A: componentes SVG interactivos o estilizados (escalables, livianos y accesibles).
   - Alternativa B: componentes HTML/CSS modulares con Flexbox/Grid.
   - Alternativa C: imágenes generadas o exportadas acompañadas de texto explicativo estructurado.

2. **Identidad del grupo (opcional):**
   - Evaluar si el equipo desea crear una identidad de consultora y un logo propio con IA, o enfocarse exclusivamente en la presentación institucional de ClickJr.

3. **Decisiones de diseño de la propuesta R1 que requieren acuerdo del equipo** (`docs/propuesta-r1.md`, sección 8): política de confirmación antes de transmitir datos (confirmación siempre, condicionada al alcance de los datos, o sin confirmación con datos mínimos y registro), orden de evaluación ante fallas simultáneas y derivación a R2 solo si C1, C2 y C6 se cumplen, tratamiento de cada condición que falla, cómputo de estados intermedios frente a C6, equivalencia entre «cumple sus requisitos» (R1) y «es compatible» (R2), y título de la propuesta.

### Preguntas pendientes

- ¿Qué formato técnico prefiere el equipo para los diagramas de flujo dentro de React?
- ¿El grupo desea incorporar una identidad propia opcional o mantener exclusivamente la identidad institucional de ClickJr?
- ¿Qué opción adopta el equipo para cada decisión de diseño de la propuesta R1, de modo que pueda construirse el diagrama (T9)?

---

## 3. Próximos pasos recomendados

1. Completar el análisis lógico y la propuesta de R2 (Tareas T4 y T6 / Marcos Aquino). Las de R1 (T3 y T5) están redactadas y esperan el acuerdo del equipo sobre las decisiones de diseño.
2. Definir en equipo el formato de los diagramas de flujo para orientar el desarrollo de los módulos.
3. Desarrollar los módulos de R1 y R2 (Tareas T9 y T10).
4. Completar el diseño visual de la landing page (Tarea T11).
5. Integrar los módulos y componentes desarrollados (Tarea T12).
6. Realizar las pruebas, verificaciones y revisión integral (Tarea T13).
7. Completar la documentación y el registro de aportes y herramientas de IA en el `README.md` (Tarea T14).
8. Desplegar el proyecto en Vercel y verificar el acceso público a los enlaces requeridos (Tarea T15).

---

**Nota de seguimiento:** Los roles asignados identifican responsabilidades de coordinación y referencia para cada tarea, pero no representan una división exclusiva del trabajo. Todos los integrantes pueden colaborar, revisar y contribuir a las distintas actividades, de acuerdo con la organización acordada en `docs/organizacion.md`.

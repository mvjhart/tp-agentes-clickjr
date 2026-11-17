# Estado del Proyecto y Pendientes

Documento vivo para el seguimiento del trabajo diario, sincronización entre sesiones y registro de definiciones requeridas.

---

## 1. Tareas en curso y pendientes

### Tareas inmediatas (pueden iniciarse)

- [ ] Elaborar la ficha lógica de la sentencia R1 de ClickJr según el paso 2.3 de la consigna (Responsable: Candelaria Chazarreta / Rol 2 - Tarea T3).
- [ ] Elaborar la ficha lógica de la sentencia R2 de ClickJr según el paso 2.3 de la consigna (Responsable: Marcos Aquino / Rol 3 - Tarea T4).
- [ ] Redactar el borrador conceptual de la propuesta agéntica R1 (paso 2.4 - Tarea T5) (Responsable: Candelaria Chazarreta / Rol 2).
- [ ] Redactar el borrador conceptual de la propuesta agéntica R2 (paso 2.4 - Tarea T6) (Responsable: Marcos Aquino / Rol 3).
- [ ] Mantener la estructura general y coordinar la recepción de módulos para la landing page (Responsable: Victoria Mariani / Rol 4 - Tarea T7).

### Tareas pendientes de definición del equipo o condicionadas

- [ ] Definir el formato técnico para los diagramas de flujo en React (componentes SVG / HTML+CSS / imágenes acompañadas de texto).
- [ ] Definir si el grupo utilizará la opción de identidad propia (nombre de grupo/consultora y logo con IA).
- [ ] Completar el desarrollo de los módulos correspondientes a las propuestas R1 y R2 (Tareas T8 y T9), una vez disponibles sus definiciones y propuestas conceptuales.
- [ ] Completar la presentación y el diseño visual de la landing page (Tareas T10 y T11), en coordinación con el contenido y los módulos.
- [ ] Integrar los componentes y módulos en la landing page (Tarea T12).
- [ ] Realizar las pruebas, verificaciones y revisión integral del proyecto (Tarea T13).
- [ ] Completar el registro de aportes y herramientas de IA en el `README.md` a medida que avance el desarrollo (Tarea T14).
- [ ] Desplegar la landing page en Vercel y comprobar la accesibilidad pública sin sesión de ambos enlaces (Tarea T15 - `REQ-PUB-01`).

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

---

## 2. Dudas y decisiones que requieren aprobación humana

### Propuestas técnicas y arquitectónicas en evaluación

1. **Formato de los diagramas de flujo en React:**
   - Alternativa A: componentes SVG interactivos o estilizados (escalables, livianos y accesibles).
   - Alternativa B: componentes HTML/CSS modulares con Flexbox/Grid.
   - Alternativa C: imágenes generadas o exportadas acompañadas de texto explicativo estructurado.

2. **Identidad del grupo (opcional):**
   - Evaluar si el equipo desea crear una identidad de consultora y un logo propio con IA, o enfocarse exclusivamente en la presentación institucional de ClickJr.

### Preguntas pendientes

- ¿Qué formato técnico prefiere el equipo para los diagramas de flujo dentro de React?
- ¿El grupo desea incorporar una identidad propia opcional o mantener exclusivamente la identidad institucional de ClickJr?

---

## 3. Próximos pasos recomendados

1. Avanzar con el análisis lógico de R1 y R2 (Tareas T3 y T4) y la formulación de sus propuestas conceptuales (Tareas T5 y T6 / Candelaria Chazarreta y Marcos Aquino).
2. Continuar el desarrollo de la estructura general y navegación de la landing page (Tarea T7 / Victoria Mariani).
3. Definir en equipo el formato de los diagramas de flujo para orientar el desarrollo de los módulos.
4. Desarrollar los módulos correspondientes a R1 y R2 (Tareas T8 y T9).
5. Completar la presentación y el diseño visual de la landing page (Tareas T10 y T11).
6. Integrar los módulos y componentes desarrollados (Tarea T12).
7. Realizar las pruebas, verificaciones y revisión integral (Tarea T13).
8. Completar la documentación y el registro de aportes y herramientas de IA en el `README.md` (Tarea T14).
9. Desplegar el proyecto en Vercel y verificar el acceso público a los enlaces requeridos (Tarea T15).

---

**Nota de seguimiento:** Los roles asignados identifican responsabilidades de coordinación y referencia para cada tarea, pero no representan una división exclusiva del trabajo. Todos los integrantes pueden colaborar, revisar y contribuir a las distintas actividades, de acuerdo con la organización acordada en `docs/organizacion.md`.
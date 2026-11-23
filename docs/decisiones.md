# Registro de Decisiones de Arquitectura y Diseño (ADRs)

Este archivo almacena el historial cronológico de decisiones técnicas, funcionales y de diseño confirmadas para el proyecto.

### Reglas de este registro

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
- **Decisión:** Utilizar Vite como herramienta de inicialización (scaffolding), servidor de desarrollo y empaquetador (build tool) para la aplicación frontend en React ([DEC-002](#dec-002-adopción-de-react-como-tecnología-frontend-para-la-landing-page)). Vercel continúa siendo la plataforma aprobada para el despliegue y hospedaje web ([DEC-003](#dec-003-adopción-de-vercel-como-plataforma-de-despliegue-web)). La adopción de esta herramienta establece el estándar técnico de construcción, pero no implica que el proyecto React ya se encuentre inicializado.
- **Justificación y alternativas:** Vite ofrece tiempos de arranque y Hot Module Replacement (HMR) extremadamente rápidos mediante ES Modules nativos, configuración mínima y compatibilidad directa y sin fricciones con el pipeline de compilación de Vercel. Se evaluaron alternativas como Create React App (obsoleta y sin mantenimiento activo) y frameworks como Next.js (descartada al no requerir renderizado del lado del servidor ni arquitectura backend, conforme a la delimitación del TP).
- **Reemplaza a:** N/A

### [DEC-005] Adopción de Prettier para el formateo del código

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Utilizar Prettier como herramienta de formateo automático del código fuente y los archivos compatibles del proyecto.
- **Justificación y alternativas:** Mantener un formato consistente y predecible en los archivos del repositorio, independientemente del agente o integrante que haya generado o modificado el código. Se adopta una herramienta de formateo dedicada en lugar de depender exclusivamente del formato producido por cada editor o agente. Prettier se ocupa de la presentación y consistencia del formato, sin asumir las funciones de análisis de calidad de ESLint.
- **Reemplaza a:** N/A

### [DEC-006] Adopción de ESLint para el análisis estático del código

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Utilizar ESLint para analizar estáticamente el código JavaScript y React, detectar problemas y mantener criterios de calidad y consistencia en el desarrollo.
- **Justificación y alternativas:** Incorporar verificaciones automatizadas que permitan detectar errores potenciales y problemas de código antes de integrar los cambios. ESLint complementa a Prettier: el primero se ocupa del análisis estático y las reglas de calidad, mientras que el segundo se ocupa del formato. Se evita utilizar ambas herramientas como si cumplieran la misma función.
- **Reemplaza a:** N/A

### [DEC-007] Adopción de React Router para la navegación de la aplicación

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Utilizar React Router para gestionar la navegación declarativa y las rutas de la landing page.
- **Justificación y alternativas:** Permitir la navegación entre las distintas secciones de la aplicación sin recargar completamente la página y mantener las rutas organizadas de acuerdo con la estructura modular de React. Se opta por una biblioteca de enrutamiento en lugar de implementar manualmente la navegación y el manejo de rutas.
- **Reemplaza a:** N/A

### [DEC-008] Adopción de CSS Modules para la organización de estilos

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Utilizar CSS Modules para encapsular los estilos asociados a los componentes y páginas de la aplicación, manteniendo una hoja de estilos global para las reglas y variables compartidas.
- **Justificación y alternativas:** Reducir conflictos entre clases CSS, facilitar el mantenimiento de los estilos y permitir que los componentes y páginas conserven sus propias reglas de presentación. Se prefiere esta organización frente a concentrar todos los estilos en una única hoja global. Los estilos globales quedan reservados para los criterios visuales compartidos por toda la aplicación.
- **Reemplaza a:** N/A

### [DEC-009] Adopción de un sistema de temas claro y oscuro

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Implementar un sistema visual con temas claro y oscuro, basado en variables CSS compartidas y adaptable a la preferencia de apariencia del sistema operativo. La aplicación contempla la posibilidad de establecer explícitamente un tema mediante el atributo `data-theme` en el elemento raíz.
- **Justificación y alternativas:** Mantener una identidad visual coherente y legible en ambos esquemas de apariencia, centralizando los colores y demás valores visuales compartidos mediante propiedades personalizadas de CSS. La detección de la preferencia del sistema permite adaptar la presentación sin requerir una configuración manual inicial. El atributo `data-theme` permite establecer un tema explícito cuando corresponda.
- **Reemplaza a:** N/A

### [DEC-010] Adopción de una estructura modular para la organización del frontend

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Organizar el código frontend mediante una estructura modular que separe los componentes reutilizables, los componentes de layout, las páginas y los estilos globales. Cada página y componente mantiene sus archivos relacionados agrupados en su correspondiente directorio.
- **Justificación y alternativas:** Facilitar el desarrollo paralelo de las distintas secciones, la reutilización de componentes y la integración de los módulos de R1 y R2. La separación por responsabilidades permite localizar y mantener los archivos sin concentrar toda la aplicación en una única estructura o componente. Se prioriza una organización que pueda evolucionar con las necesidades reales del proyecto, evitando incorporar capas o abstracciones innecesarias de manera anticipada.
- **Reemplaza a:** N/A

### [DEC-011] Adopción de GitHub Actions para Integración Continua (CI)

- **Fecha:** 2026-11-16
- **Estado:** Vigente
- **Propuesto por:** Victoria Mariani / Agente de IA
- **Aprobado por:** Victoria Mariani
- **Decisión:** Implementar un flujo automatizado de integración continua utilizando GitHub Actions (`.github/workflows/ci.yml`), que ejecute la instalación limpia de dependencias (`npm ci`), el análisis estático (`npm run lint`) y la compilación de producción (`npm run build`) ante cada evento de `push` y `pull_request` sobre la rama `master`.
- **Justificación y alternativas:** Garantizar de forma automática que ningún cambio integrado a la rama principal rompa las reglas de calidad de código ni impida la compilación exitosa de la aplicación. Se evaluaron alternativas de integración continua externa (como servicios independientes de CI), optando por GitHub Actions debido a su integración nativa con el repositorio, soporte directo para ramas protegidas y nula necesidad de configuración de infraestructura adicional.
- **Reemplaza a:** N/A

### [DEC-012] Adopción de Mermaid para el renderizado de diagramas de flujo

- **Fecha:** 2026-11-21
- **Estado:** Vigente
- **Propuesto por:** Candelaria Chazarreta / Agente de IA
- **Aprobado por:** Marcos Aquino
- **Decisión:** Utilizar la biblioteca Mermaid como dependencia de producción para renderizar el diagrama de flujo completo de la propuesta R1 (y potencialmente R2), permitiendo su exportación a formato SVG mediante código declarativo.
- **Justificación y alternativas:** Se evaluó construir el diagrama completo dibujando SVG a mano (como en la primera versión), pero Mermaid facilita la representación de grafos complejos con múltiples ramas y retornos, reduciendo la cantidad de código necesario para su mantenimiento. Se importa de forma dinámica para no afectar el tamaño del bundle inicial.
- **Reemplaza a:** N/A

### [DEC-013] Mantenimiento exclusivo de la identidad institucional de ClickJr

- **Fecha:** 2026-11-23
- **Estado:** Vigente
- **Propuesto por:** Equipo de trabajo / Victoria Mariani
- **Aprobado por:** Victoria Mariani
- **Decisión:** Conservar y aplicar de manera exclusiva la identidad gráfica, imagotipo y colores institucionales originales de la startup ClickJr, descartando la creación o incorporación de un nombre y logotipo de consultora o grupo generado con IA.
- **Justificación y alternativas:** La consigna (`REQ-LAN-04`) exige el uso estricto y visible del logotipo oficial de ClickJr y establece la identidad grupal como una alternativa opcional. El equipo resolvió enfocar todos los recursos visuales y de desarrollo en la representación clara, legible y profesional de ClickJr y en la explicación didáctica de las sentencias agénticas asignadas, evitando duplicidad marcaria o elementos accesorios que no aporten valor explicativo.
- **Reemplaza a:** N/A

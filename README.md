# TP · Construcción 100 % agéntica — ClickJr

Proyecto desarrollado para el **IFTS 29** (Instituto de Formación Técnica Superior N.º 29), correspondiente al trabajo práctico grupal centrado en el diseño y presentación de soluciones agénticas para la startup conceptual **ClickJr**.

- **Institución:** IFTS 29 (desarrollo basado en casos de lógica formulados en IFTS 16).
- **Caso asignado:** ClickJr.
- **Bloque asignado:** Postulación y permisos (Sentencias lógicas R1 y R2).
- **Tecnología frontend aprobada:** React.
- **Herramienta de construcción:** Vite.
- **Plataforma de despliegue aprobada:** Vercel.
- **Fecha de entrega:** 26/11/2026.
- **Repositorio Git:** [https://github.com/mvjhart/tp-agentes-clickjr](https://github.com/mvjhart/tp-agentes-clickjr)
- **Landing page publicada:** Enlace público al sitio web a incorporar tras el despliegue efectivo en Vercel.

---

## 1. Presentación del Caso: Startup ClickJr

**ClickJr** es un portal conceptual de empleo orientado a perfiles junior, enfocado en facilitar la búsqueda de vacantes laborales y el seguimiento ordenado de postulaciones. El caso de estudio fue ideado originalmente por estudiantes del **IFTS 16** y asignado a nuestro equipo para el desarrollo de propuestas de automatización agéntica.

El bloque temático asignado es **Postulación y permisos**, cuyas reglas de negocio están definidas por dos sentencias lógicas oficiales que se conservan en su redacción textual exacta:

> **Sentencia 1 (Frase 1 · R1):**
>
> «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»

> **Sentencia 2 (Frase 2 · R2):**
>
> «Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.»

El catálogo completo de requisitos (`REQ-xxx`) y el desglose preliminar de premisas se encuentran en [`docs/consigna.md`](docs/consigna.md).

---

## 2. Objetivo del Trabajo y Alcance

El trabajo práctico tiene como objetivo diseñar y construir una **landing page explicativa e interactiva** que:

1. Presente a la startup ClickJr y reconozca su origen institucional en el IFTS 16.
2. Exponga dos propuestas de solución agéntica (una para R1 y otra para R2), indicando sus títulos y el beneficio concreto de cada una en dos o tres frases.
3. Incorpore dos **diagramas de flujo agénticos gráficos y legibles** que representen el recorrido de cada solución (entradas, condiciones, decisiones rotuladas, acciones, excepciones y puntos de intervención humana).
4. Presente **paneles desplegables interactivos** que detallen la estructura de cada solución y resulten plenamente operables tanto mediante clic como a través de navegación por teclado.

### Metodología y Delimitaciones del Alcance

- **Construcción 100 % agéntica (`REQ-MET-01`):** Todo el código fuente del proyecto es generado, modificado y corregido exclusivamente por agentes de programación asistidos por IA. Los integrantes del equipo dirigen el desarrollo, establecen requerimientos y validan resultados, sin realizar edición manual de código.
- **Alcance estrictamente conceptual (`REQ-ALC-01`):** La landing page cumple una función informativa y didáctica. **No debe integrar IA operativa, ejecutar agentes en backend, conectar APIs externas ni implementar automatizaciones reales**.
- **Entorno de visualización (`REQ-LAN-08`):** La evaluación se realiza de forma exclusiva en resolución de escritorio (*desktop*), sin requerimiento de diseño adaptable a dispositivos móviles (*mobile responsive*).
- **Distinción de supuestos propios (`REQ-LAN-05`):** Cualquier comportamiento o decisión ante escenarios no contemplados por las sentencias textuales (como el tratamiento de alternativas frente a condiciones no cumplidas) se explicita como un supuesto de diseño formulado por el equipo.

---

## 3. Estructura del Repositorio

El repositorio organiza la documentación compartida, las configuraciones de desarrollo y el código fuente de la aplicación bajo la siguiente estructura:

```text
TP-Agentes/
├── .github/                         # Configuración y recursos de GitHub
├── public/
│   └── assets/
│       └── clickjr/
│           ├── clickjr-favicon.svg
│           ├── clickjr-logo.svg
│           └── clickjr-logo-dark.svg
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Footer.jsx
│   │       ├── Footer.module.css
│   │       ├── Header.jsx
│   │       ├── Header.module.css
│   │       ├── Layout.jsx
│   │       └── Layout.module.css
│   ├── pages/
│   │   ├── Inicio/
│   │   │   ├── Inicio.jsx
│   │   │   └── Inicio.module.css
│   │   ├── NoEncontrada/
│   │   │   ├── NoEncontrada.jsx
│   │   │   └── NoEncontrada.module.css
│   │   ├── PropuestaR1/
│   │   │   ├── PropuestaR1.jsx
│   │   │   └── PropuestaR1.module.css
│   │   └── PropuestaR2/
│   │       ├── PropuestaR2.jsx
│   │       └── PropuestaR2.module.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── docs/
│   ├── github/
│   │   ├── issues.md
│   │   └── etiquetas.md
│   ├── consigna.md
│   ├── contexto.md
│   ├── decisiones.md
│   ├── estado.md
│   ├── organizacion.md
│   ├── historial.md
│   └── convenciones-commits.md
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── AGENTS.md
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

La estructura se organiza en tres áreas principales:

- **`docs/`:** documentación persistente, planificación y seguimiento del proyecto.
- **`src/`:** código fuente de la aplicación React, organizado en componentes, páginas y estilos.
- **`public/`:** recursos estáticos, incluyendo el logotipo original de ClickJr y sus variantes.

Los directorios generados durante la instalación o compilación, como `node_modules/` y `dist/`, no forman parte de la estructura fuente versionada.

---

## 4. Documentación del Proyecto

La documentación compartida en `docs/` centraliza la memoria persistente del proyecto para coordinar el trabajo humano y agéntico:

| Documento | Propósito | Cuándo consultarlo |
|---|---|---|
| [`docs/contexto.md`](docs/contexto.md) | Marco general del proyecto, resumen del caso ClickJr y reglas base. | Al iniciar cualquier sesión de trabajo. |
| [`docs/consigna.md`](docs/consigna.md) | Catálogo oficial de requisitos (`REQ-xxx`), entregables y rúbrica de evaluación. | Para verificar el cumplimiento de los criterios de cátedra. |
| [`docs/decisiones.md`](docs/decisiones.md) | Registro histórico de decisiones técnicas y arquitectónicas confirmadas (ADRs). | Para comprobar qué acuerdos técnicos están vigentes. |
| [`docs/estado.md`](docs/estado.md) | Seguimiento de tareas inmediatas, actividades en curso y definiciones pendientes. | Para conocer el estado real de avance y los próximos pasos. |
| [`docs/organizacion.md`](docs/organizacion.md) | Estructura acordada de 4 roles coordinadores y 15 tareas en 5 etapas. | Para coordinar asignaciones y flujo de integración con Git. |
| [`docs/historial.md`](docs/historial.md) | Bitácora de modificaciones significativas y evolución del repositorio. | Al finalizar una sesión relevante de trabajo. |
| [`docs/convenciones-commits.md`](docs/convenciones-commits.md) | Pautas de confirmación, plantilla obligatoria y chequeos pre-commit. | Antes de preparar y confirmar cualquier cambio en Git. |
| [`docs/github/issues.md`](docs/github/issues.md) | Planificación de los Issues del proyecto, con sus objetivos, actividades, entregables, criterios de aceptación y dependencias. | Al crear, asignar, actualizar o revisar las tareas en GitHub. |
| [`docs/github/etiquetas.md`](docs/github/etiquetas.md) | Catálogo de etiquetas para clasificar los Issues por tipo, etapa y área de trabajo. | Al crear o actualizar etiquetas e Issues en GitHub. |

---

## 5. Cómo Comenzar (Guía para Integrantes)

Para integrarse al flujo de trabajo del repositorio:

1. **Lectura orientadora inicial:**
   - Consultar [`docs/contexto.md`](docs/contexto.md) para conocer la visión global del caso ClickJr.
   - Revisar [`docs/consigna.md`](docs/consigna.md) para comprender los entregables, las restricciones del alcance y la rúbrica de aprobación.

2. **Revisión del estado de situación:**
   - Comprobar en [`docs/decisiones.md`](docs/decisiones.md) las decisiones técnicas y arquitectónicas aprobadas.
   - Verificar en [`docs/estado.md`](docs/estado.md) qué tareas están listas para comenzar y qué aspectos continúan pendientes de desarrollo.

3. **Coordinación de tareas:**
   - Revisar [`docs/organizacion.md`](docs/organizacion.md) para consultar las responsabilidades del rol coordinador asignado y el flujo de integración de ramas.
   - Consultar [`docs/github/issues.md`](docs/github/issues.md) para conocer el desglose operativo de las tareas.

4. **Interacción con agentes de IA:**
   - Asegurarse de que toda sesión con un agente de programación cumpla rigurosamente el protocolo establecido en la sección siguiente.

---

## 6. Protocolo de Trabajo con Agentes de IA

Cualquier agente de programación que intervenga en el repositorio debe operar bajo las directivas establecidas en [`AGENTS.md`](AGENTS.md):

1. **Lectura obligatoria del protocolo compartido:** Antes de proponer o ejecutar cualquier cambio, el agente debe leer [`AGENTS.md`](AGENTS.md) en la raíz del repositorio.
2. **Rutina de inicio de sesión:** El agente debe inspeccionar el estado del repositorio Git, consultar la documentación compartida (`docs/contexto.md`, `docs/decisiones.md`, `docs/estado.md` y `docs/convenciones-commits.md`) y presentar al usuario el informe estructurado obligatorio antes de comenzar.
3. **Iniciativa del integrante:** Si el entorno o herramienta de IA no carga automáticamente las directivas al inicio de la sesión, el integrante debe solicitárselo expresamente antes de permitir cualquier modificación en los archivos.
4. **Distinción entre memoria compartida e instrucciones personales:**
   - [`AGENTS.md`](AGENTS.md) contiene las reglas compartidas, obligatorias y versionadas de todo el equipo.
   - Cualquier archivo de instrucciones personales (como un eventual `.local/AGENTS.md` o notas privadas del usuario) reside fuera del control de versiones (excluido en `.gitignore`). **Es estrictamente personal y no debe integrarse, compartirse ni versionarse en el repositorio**.
5. **Separación entre propuestas y decisiones:** Ningún agente puede dar por aprobada una propuesta técnica ni registrarla en `docs/decisiones.md` por su cuenta. Toda decisión requiere aprobación explícita de un integrante humano.

---

## 7. Organización del Trabajo Colaborativo

El equipo acordó la organización del proyecto según lo establecido en [`docs/organizacion.md`](docs/organizacion.md). Los roles coordinadores establecen referentes principales para cada área, pero **no representan áreas de trabajo exclusivas ni impiden la colaboración cruzada o la participación en las decisiones generales**:

- **Distribución de Roles Coordinadores:**
  - **Rol 1 — Presentación y contenido de la startup:** Coordinado por **Federico Acosta Maneiro**. Responsable de coordinar la elaboración de la presentación de ClickJr, recuperación del logo original, contexto del servicio y sentencias textuales.
  - **Rol 2 — Análisis y propuesta de solución R1:** Coordinado por **Candelaria Chazarreta**. Responsable de coordinar el análisis lógico de la sentencia R1, la definición conceptual de la solución agéntica, el diagrama de flujo y su desplegable interactivo.
  - **Rol 3 — Análisis y propuesta de solución R2:** Coordinado por **Marcos Aquino**. Responsable de coordinar el análisis lógico de la sentencia R2, la definición conceptual de la solución agéntica, el diagrama de flujo y su desplegable interactivo.
  - **Rol 4 — Estructura e integración técnica:** Coordinado por **Victoria Mariani**. Responsable de coordinar la arquitectura general de la landing en React, la navegación, la coherencia de estilos y la integración técnica de los módulos desarrollados.
- **División en 15 tareas y 5 etapas:** Planificación modular que abarca desde la preparación inicial y recuperación de materiales (Etapa A), análisis lógico y propuestas conceptuales (Etapa B), desarrollo de módulos en paralelo (Etapa C), diseño e integración (Etapa D), hasta pruebas, documentación y publicación (Etapa E).
- **Flujo de trabajo con Git:** Desarrollo en ramas independientes por módulo o funcionalidad, integración coordinada mediante Pull Requests, revisiones cruzadas entre pares y posterior seguimiento de tareas mediante GitHub Issues.
- **Pautas de confirmación:** Todo commit debe respetar la estructura y verificaciones pre-commit obligatorias fijadas en [`docs/convenciones-commits.md`](docs/convenciones-commits.md).

---

## 8. Integrantes y Registro de Aportes

> Requisito obligatorio según `REQ-DOC-01` y la rúbrica de evaluación. La asignación de un rol coordinador no equivale al aporte concreto; los aportes específicos de cada integrante reflejan el trabajo efectivamente ejecutado y validado en el repositorio, y se completarán a medida que avancen las tareas correspondientes (Tarea T14).

### Nómina del Equipo y Aportes Concretos

| Integrante | Perfil GitHub | Rol coordinador asignado | Aporte concreto al proyecto |
|---|---|---|---|
| **Federico Acosta Maneiro** | [federicosd06-dev](https://github.com/federicosd06-dev) | Rol 1 (Presentación y contenido de ClickJr) | *Pendiente de registrar a medida que avance el desarrollo de sus tareas* |
| **Candelaria Chazarreta** | [kndxt](https://github.com/kndxt) | Rol 2 (Análisis y propuesta de solución R1) | *Pendiente de registrar a medida que avance el desarrollo de sus tareas* |
| **Marcos Aquino** | [Marcos028](https://github.com/Marcos028) | Rol 3 (Análisis y propuesta de solución R2) | *Pendiente de registrar a medida que avance el desarrollo de sus tareas* |
| **Victoria Mariani** | [mvjhart](https://github.com/mvjhart) | Rol 4 (Estructura e integración técnica) | Inicialización del repositorio Git, diseño del sistema de documentación persistente (`docs/`), redacción de `AGENTS.md` y `docs/convenciones-commits.md`, catalogación inicial de la consigna y actualización del estado documental. |

---

## 9. Registro de Herramientas de Inteligencia Artificial

> Requisito obligatorio según `REQ-DOC-03` y dimensión 5 de la rúbrica de evaluación. Registra el entorno, el modelo utilizado, la tarea asignada y las iteraciones realizadas. Se irá actualizando colaborativamente por cada integrante a lo largo del desarrollo.

| Integrante | Entorno / Aplicación | Modelo exacto | Tarea / Uso específico | Modificaciones o ajustes solicitados |
|---|---|---|---|---|
| Federico Acosta Maneiro | *Pendiente* | *Pendiente* | *Pendiente de registrar durante el desarrollo de su módulo* | *Pendiente* |
| Candelaria Chazarreta | *Pendiente* | *Pendiente* | *Pendiente de registrar durante el desarrollo de su módulo* | *Pendiente* |
| Marcos Aquino | *Pendiente* | *Pendiente* | *Pendiente de registrar durante el desarrollo de su módulo* | *Pendiente* |
| Victoria Mariani | Antigravity / CLI | Gemini 3.8 Flash | Configuración inicial de infraestructura documental, catálogo de consigna oficial y protocolos operativos | Ajustes en las pautas de verificación inicial de Git y estructuración del reporte obligatorio de inicio de sesión |

---

## 10. Despliegue y Reproducción Local

De acuerdo con las decisiones técnicas aprobadas por el equipo ([`DEC-002`](docs/decisiones.md) y [`DEC-003`](docs/decisiones.md)), la landing page se desarrolla utilizando **React** y será desplegada en la plataforma **Vercel**. La herramienta de construcción y servidor de desarrollo utilizada es **Vite** ([`DEC-004`](docs/decisiones.md)).

### Tecnologías y herramientas de desarrollo

- **React:** biblioteca para construir la interfaz de usuario.
- **Vite:** herramienta de construcción y servidor de desarrollo.
- **React Router:** gestión de navegación y rutas de la aplicación.
- **CSS Modules:** organización de estilos encapsulados por componente o página.
- **ESLint:** análisis estático del código para detectar problemas y mantener criterios de calidad.
- **Prettier:** formateo automático del código y los archivos de configuración incluidos en sus scripts.

### Reproducción y Ejecución Local

**Requisitos previos:** tener instalado Node.js y npm.

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/mvjhart/tp-agentes-clickjr.git
   ```

2. Ingresar al directorio del proyecto:

   ```bash
   cd tp-agentes-clickjr
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

4. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

Vite mostrará en la terminal la dirección local desde la que se puede acceder a la aplicación.

### Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite. |
| `npm run build` | Genera la compilación de producción en `dist/`. |
| `npm run preview` | Permite previsualizar localmente la compilación generada. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |
| `npm run format` | Aplica Prettier a los archivos incluidos en el script de formateo. |
| `npm run format:check` | Comprueba con Prettier el formato de los archivos incluidos, sin modificarlos. |

Antes de integrar cambios, se recomienda ejecutar las verificaciones correspondientes:

```bash
npm run format:check
npm run lint
npm run build
```

### Despliegue en Vercel

- **Plataforma:** Vercel.
- **Estado del despliegue:** Pendiente de configuración tras la finalización de los módulos integrados (Tarea T15).
- **Accesibilidad pública:** Conforme a `REQ-PUB-01` y `REQ-PUB-02`, el despliegue final será accesible de forma libre y pública, sin requerir inicio de sesión ni autenticación.

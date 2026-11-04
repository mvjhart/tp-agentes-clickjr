# Consigna Oficial del Proyecto: Construcción 100% Agéntica

Este documento constituye la transcripción estructurada y referencia obligatoria de la consigna oficial del Trabajo Práctico (IFTS 29). No reemplaza las decisiones de diseño del equipo, sino que establece el marco de requisitos, restricciones, entregables y criterios de evaluación fijados por la cátedra.

---

## 1. Información General y Metodología

- **Trabajo Práctico:** Desafío de Construcción 100% Agéntica.
- **Institución:** IFTS 29 (propuesta de solución sobre casos originados por estudiantes del IFTS 16).
- **Modalidad:** Grupal (misma modalidad de trabajo de TP1 y TP2).
- **Fecha de Entrega:** 26/11/2026.
- **Canal de Entrega:** Será informado por el docente.
- **Evaluación:** Sin nota numérica. Calificación: **Aprobado / Desaprobado** (según niveles: *No cumple*, *Cumple*, *Propone*).
- **Regla Metodológica Central:** **Construcción 100% agéntica.**
  - El grupo dirige, define instrucciones, verifica la lógica y revisa los resultados.
  - El agente genera y modifica el código fuente.
  - **Prohibición expresa:** No editar código manualmente.

---

## 2. Caso Asignado: Startup «ClickJr»

- **Nombre de la Startup:** ClickJr.
- **Origen:** Startup ideada en el IFTS 16 (requiere reconocimiento explícito en la presentación).
- **Rubro:** Empleo y desarrollo profesional.
- **Objetivo de la Startup:** Portal de empleo junior que ayuda a encontrar vacantes y seguir postulaciones.
- **Bloque Asignado:** Postulación y permisos.
- **Material asignado requerido:** Logo original de ClickJr (completo y legible).

### Sentencias Lógicas Originales Asignadas
Las sentencias deben conservarse con su **redacción textual exacta**:

1. **Sentencia 1 (Frase 1 · R1):**
   > «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»

2. **Sentencia 2 (Frase 2 · R2):**
   > «Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.»

---

## 3. Catálogo de Requisitos Oficiales

| ID | Requisito / Descripción | Carácter | Etapa / Entregable | Sección Original |
|---|---|---|---|---|
| **REQ-MET-01** | **Construcción 100% agéntica:** No editar código manualmente; todo cambio de código debe ser solicitado y ejecutado por agentes de IA. | Obligatorio | Desarrollo continuo | Sec. 0 y 8 |
| **REQ-MET-02** | **Herramientas de IA gratuitas:** Uso de agentes de programación (Cursor, Antigravity, Codex, OpenCode, etc.) aprovechando planes gratuitos; no se exige plan de pago. | Informativo | Desarrollo | Sec. 0 |
| **REQ-MET-03** | **Trabajo grupal y participación:** Todos los integrantes deben participar activamente, comprender la propuesta y poder explicarla. | Obligatorio | General | Sec. 2.1 y 7.1 |
| **REQ-CAS-01** | **Conservación textual de sentencias:** Conservar la redacción original exacta de las sentencias R1 y R2 de ClickJr. | Obligatorio | Landing / Contenido | Sec. 2.2 |
| **REQ-CAS-02** | **Inclusión del logo original:** Incorporar el logo original de ClickJr completo y legible. | Obligatorio | Landing / Presentación | Sec. 2.2 y 4.1 |
| **REQ-CAS-03** | **Reconocimiento del origen en IFTS 16:** Reconocer explícitamente en la landing que ClickJr proviene del trabajo de estudiantes del IFTS 16. | Obligatorio | Landing / Presentación | Sec. 4.1 |
| **REQ-ALC-01** | **Alcance estrictamente conceptual:** La landing presenta y explica dos propuestas de automatización; **no debe integrar IA, ejecutar agentes, conectar APIs ni implementar backend o automatizaciones reales**. | Restricción Obligatoria | Arquitectura / Landing | Sec. 0, 1 y 5 |
| **REQ-LAN-01** | **Presentación de la startup:** Presentar a ClickJr indicando su nombre, logo original, servicio, breve descripción del problema, bloque y el equipo del IFTS 29. | Obligatorio | Landing / UI | Sec. 4.1 |
| **REQ-LAN-02** | **Presentación de las dos propuestas:** Una solución agéntica para cada sentencia, con título propio y explicación del beneficio en 2 o 3 frases. | Obligatorio | Landing / UI | Sec. 2.4 y 4.2 |
| **REQ-LAN-03** | **Dos diagramas de flujo agénticos:** Incorporar en la página dos diagramas gráficos legibles (SVG, HTML/CSS o imagen con texto) que representen el recorrido de cada solución. | Obligatorio | Landing / UI | Sec. 2.5 y 4.3 |
| **REQ-LAN-04** | **Estructura del diagrama de flujo:** Cada flujo debe mostrar inicio, datos de entrada, evaluación de condición/decisión con alternativas rotuladas, acciones, intervención humana (si aplica) y resultado. | Obligatorio | Flujos / UI | Sec. 1, 2.5 y 3 |
| **REQ-LAN-05** | **Distinción de supuestos propios:** Si el grupo agrega alternativas que la regla lógica original no define (ej. qué hacer ante el "NO"), debe aclararse explícitamente como una decisión de diseño del grupo. | Obligatorio | Flujos / UI | Sec. 2.5, 3 y 7.4 |
| **REQ-LAN-06** | **Desplegables interactivos:** Incluir desplegables con detalles de cada solución (datos de entrada, decisión, acción propuesta, resultado esperado, excepciones, cuándo interviene una persona). | Obligatorio | Landing / UI | Sec. 2.6 y 4.4 |
| **REQ-LAN-07** | **Accesibilidad de desplegables:** Los desplegables deben poder abrirse y cerrarse tanto con clic como mediante navegación por teclado. | Obligatorio | Landing / UX | Sec. 2.7 y 6.2 |
| **REQ-LAN-08** | **Optimización exclusiva desktop:** La página debe visualizarse y recorrerse correctamente en computadoras de escritorio (desktop) sin desbordes. No se exige diseño mobile responsive. | Obligatorio | Landing / UX | Sec. 2.7, 6.2 y 7.3 |
| **REQ-LAN-09** | **Tecnología de la landing:** Construcción con HTML, CSS y JavaScript plano o mediante framework (React es opcional, no obligatorio). | Informativo / Opcional | Frontend | Sec. 2.6 y 5 |
| **REQ-LAN-10** | **Identidad propia del grupo (opcional):** El grupo puede presentarse como consultora/startup con logo propio generado por IA, manteniendo clara distinción con ClickJr. | Opcional | Landing / Marca | Sec. 4.5 |
| **REQ-DOC-01** | **README - Datos de equipo:** Detallar en el README el nombre del grupo, nómina de integrantes y aporte concreto de cada uno. | Obligatorio | Repositorio | Sec. 2.1 y 2.8 |
| **REQ-DOC-02** | **README - Identificación del caso:** Registrar la startup ClickJr y el bloque «Postulación y permisos». | Obligatorio | Repositorio | Sec. 2.8 |
| **REQ-DOC-03** | **README - Registro de herramientas de IA:** Distinguir entre aplicación (entorno) y modelo seleccionado tal cual figura (o indicar «modelo no informado»). Detallar para qué se utilizó y qué cambios se pidieron. | Obligatorio | Repositorio | Sec. 2.8 y 7.5 |
| **REQ-DOC-04** | **README - Enlace de publicación:** Incluir en el README el enlace funcional a la landing page pública. | Obligatorio | Repositorio | Sec. 2.9 |
| **REQ-PUB-01** | **Publicación web accesible:** La landing debe estar publicada en la web y ser accesible públicamente sin requerir inicio de sesión ni permisos especiales. | Obligatorio | Despliegue | Sec. 2.9 y 7.2 |
| **REQ-PUB-02** | **Repositorio accesible:** El repositorio Git debe ser accesible para el docente sin requerir inicio de sesión. | Obligatorio | Despliegue | Sec. 2.9 y 7.2 |

---

## 4. Estructura de Entregables Solicitados

### Entregable 1: Repositorio Git
- Código fuente generado 100% mediante agentes.
- Historial de commits que refleje el trabajo iterativo.
- `README.md` estructurado según `REQ-DOC-01` a `REQ-DOC-04`.
- Accesible en modo incógnito/sin sesión.

### Entregable 2: Landing Page Publicada
- Hospedada en plataforma pública (ej. GitHub Pages u homólogo).
- Contenidos visuales completos:
  1. Header / Presentación: ClickJr, logo original, rubro, necesidad, equipo IFTS 29, mención a IFTS 16.
  2. Sección de Propuestas: Frase 1 (R1) y Frase 2 (R2) con sus títulos y explicaciones de beneficio.
  3. Sección de Diagramas: Flujos agénticos gráficos legibles de cada recorrido.
  4. Sección de Desplegables: Detalles estructurados (entradas, decisiones, acciones, salidas, excepciones, factor humano) operables con teclado y clic.
- Probada y validada en entorno desktop.

---

## 5. Rúbrica y Criterios de Aprobación

La calificación final es binaria: **Aprobado / Desaprobado**.
Para alcanzar el nivel **Cumple** (aprobación) y aspirar a **Propone** en cada dimensión, se establecen los siguientes criterios:

```
+------------------------------------+------------------------------------------+-------------------------------------------------------------+
| Dimensión                          | Nivel CUMPLE (Aprobación)                | Nivel PROPONE (Superador)                                   |
+------------------------------------+------------------------------------------+-------------------------------------------------------------+
| 1. Participación del grupo         | Todos participan, explican y tienen      | Documentan revisión entre pares y una mejora concreta       |
|                                    | aportes registrados en el README.        | derivada de la colaboración.                                |
| 2. Repositorio y Landing           | Ambos enlaces accesibles sin sesión;     | README permite reproducir el proyecto e incluye             |
|                                    | landing muestra la versión final.        | comprobación clara de enlaces y funcionamiento.             |
| 3. Landing según consigna          | Presenta ClickJr, logo original, 2       | Organiza con especial claridad y agrega recursos de         |
|                                    | sentencias, propuestas y desplegables OK.| navegación o explicación adicionales.                       |
| 4. Dos flujos gráficos             | Dos diagramas legibles y coherentes;     | Explica caso límite o excepción en cada flujo, mostrando    |
|                                    | distingue supuestos agregados.           | su resolución e intervención humana.                        |
| 5. Registro de IA (README)         | Detalla aplicaciones, modelos (o «no     | Presenta evidencia de iteración: instrucción inicial, fallo |
|                                    | informado»), uso y cambios pedidos.      | detectado, pedido de mejora y explicación del cambio.       |
+------------------------------------+------------------------------------------+-------------------------------------------------------------+
```

---

## 6. Desglose Lógico Preliminar del Caso ClickJr (Paso 2.3)

*Esta sección refleja el análisis de las sentencias antes de formular las propuestas agénticas:*

### Ficha Sentencia 1 (R1)
- **Texto original:** «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»
- **Datos necesarios:** Estado de la vacante, requisitos de la vacante, perfil del usuario, completitud de datos del perfil, autorización explícita de postulación automática, estado de preguntas obligatorias, historial de postulaciones previas del usuario.
- **Condición lógica compuesta (conjunción `Y` de 6 premisas):**
  1. Vacante = activa `Y`
  2. Perfil = cumple requisitos `Y`
  3. Datos del usuario = completos `Y`
  4. Autorización automática = otorgada `Y`
  5. Preguntas obligatorias = sin pendientes `Y`
  6. Postulación previa = no existe.
- **Consecuencia:** El sistema solicita el envío de la postulación.
- **Supuestos de diseño requeridos (diseño del grupo):** ¿Qué ocurre si alguna de las 6 premisas no se cumple? (La sentencia no lo explicita; el flujo debe definir el camino del "NO").

### Ficha Sentencia 2 (R2)
- **Texto original:** «Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.»
- **Datos necesarios:** Estado de la vacante, compatibilidad de la vacante con el perfil, historial de postulaciones previas, estado de autorización, completitud de información del perfil, estado de preguntas obligatorias.
- **Condición lógica compuesta:**
  - Condiciones base necesarias (`Y`): Vacante activa `Y` Vacante compatible `Y` No existe postulación previa.
  - Condición de faltante (`O` inclusivo): Falta autorización `O` Falta información `O` Falta respuesta obligatoria.
- **Consecuencia:** El sistema solicita lo pendiente `Y` no envía la postulación.
- **Supuestos de diseño requeridos (diseño del grupo):** Cómo se solicita lo pendiente al usuario (notificación, formulario interactivo) y qué sucede si la vacante no está activa o ya existía postulación previa.

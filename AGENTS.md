# Protocolo General de Operación para Agentes de IA

Este documento establece las directivas operativas y de colaboración para cualquier agente de IA (independientemente del entorno, IDE o proveedor) que trabaje en este repositorio.

---

## 1. Al comenzar cada sesión

Antes de proponer, planificar o ejecutar cualquier modificación en el código o en la documentación, el agente debe cumplimentar rigurosamente los siguientes pasos:

### 1.1. Lectura obligatoria del contexto compartido
- Consultar `docs/contexto.md` para conocer los objetivos del proyecto, la consigna, requisitos, restricciones y convenciones vigentes.
- Consultar `docs/decisiones.md` para verificar qué decisiones técnicas y arquitectónicas están aprobadas y vigentes.
- Consultar `docs/estado.md` para conocer el estado actual de las tareas, los responsables asignados, las dudas pendientes y las definiciones requeridas.
- Consultar `docs/convenciones-commits.md` para conocer las pautas de confirmación, formato de mensajes y verificaciones obligatorias.

### 1.2. Verificación inicial del repositorio Git
El agente debe inspeccionar el estado del repositorio ejecutando las comprobaciones correspondientes:
1. **Identificación local:** Identificar el repositorio, la ruta de trabajo y la rama local actual (`git branch --show-current`).
2. **Rama principal:** Identificar la rama principal del proyecto si puede determinarse (p. ej., `master` o `main`).
3. **Historial reciente:** Consultar el último commit registrado (`git log -1`) y los commits recientes.
4. **Estado del árbol de trabajo (`git status`):**
   - Archivos modificados con seguimiento.
   - Archivos nuevos sin seguimiento (*untracked*).
   - Cambios preparados en el área de preparación (*staged*).
   - Estado general del directorio de trabajo (limpio o con modificaciones pendientes).
5. **Configuración remota:** Comprobar si existe un repositorio remoto configurado (`git remote -v`).
6. **Ramas y URLs remotas:** Si existe un remoto, identificar su URL y las ramas remotas disponibles.
7. **Sincronización remota:** Cuando sea posible consultar el remoto, comprobar si existen cambios entrantes (*behind*), cambios salientes (*ahead*) o divergencias entre la rama local y la rama remota correspondiente.
8. **Commits en la rama principal remota:** Comprobar si la rama principal remota cuenta con commits nuevos que aún no fueron incorporados a la rama local actual.

### 1.3. Comportamiento según el estado del remoto
- **Mientras no exista un remoto configurado:**
  - Informar de manera explícita que el repositorio es exclusivamente local.
  - Presentar la rama actual y el estado local.
  - No intentar realizar operaciones de red ni sincronización remota.
  - La ausencia de información remota no debe considerarse un error bajo ninguna circunstancia.
- **Cuando exista un remoto configurado:**
  - Consultar las referencias remotas actualizadas mediante `git fetch --prune`, siempre que la conexión esté disponible y la operación esté permitida.
  - **Prohibición de sincronización destructiva o automática:** No ejecutar `git pull`, `git merge`, `git rebase`, `git reset` ni ninguna operación que altere el historial o integre cambios automáticamente.
  - **Determinación de la rama principal:** Identificar la rama principal real configurada en el remoto; nunca asumir arbitrariamente que se denomina `main` o `master`.
  - **Comparación rigurosa:** Comparar referencias locales y remotas para detectar commits pendientes de integrar o publicar.
  - **Honestidad operativa:** Si no se pudo consultar el remoto (por falta de red, permisos o fallos de conexión), indicar claramente que la información puede estar desactualizada. Nunca afirmar que el repositorio está sincronizado sin haberlo verificado efectivamente.

### 1.4. Informe obligatorio al iniciar cada sesión
Antes de comenzar cualquier propuesta o tarea técnica, el agente debe presentar de forma visible al usuario un informe breve, estructurado según la siguiente plantilla (si una sección no corresponde, indicar el motivo explícito en lugar de omitirla silenciosamente):

```text
**Estado del repositorio**
- Rama local actual: [nombre de la rama]
- Rama principal: [nombre de la rama principal o motivo si no se puede determinar]
- Último commit: [hash corto y título del último commit]
- Estado del directorio de trabajo: [limpio / con cambios pendientes]

**Sincronización**
- Remoto configurado: [URL del remoto o "Ninguno (repositorio exclusivamente local)"]
- Rama remota correspondiente: [nombre o "No aplica"]
- Estado de sincronización: [al día / adelantado / retrasado / divergiendo / no verificable]
- Cambios nuevos en la rama principal pendientes de incorporar: [cantidad y lista de commits, o "Ninguno" / "No aplica"]

**Cambios locales**
- Archivos modificados: [lista o "Ninguno"]
- Archivos nuevos: [lista o "Ninguno"]
- Cambios preparados para commit: [lista o "Ninguno"]

**Advertencias**
- Conflictos, divergencias, cambios cuyo origen no pueda determinarse o verificaciones pendientes: [detalle o "Ninguna"]
```

### 1.5. Reglas de seguridad y concurrencia
1. **Preservación incondicional:** La inspección inicial jamás debe descartar, sobrescribir ni modificar cambios existentes en el directorio de trabajo o en el índice.
2. **No asumir autoría local:** No asumir que las modificaciones locales no confirmadas pertenecen al agente que inicia la sesión.
3. **Intervención ante cambios desconocidos:** Si se detectan cambios locales cuyo origen o propósito no pueda determinarse, señalarlo de inmediato y solicitar intervención humana antes de continuar o modificarlos.
4. **No integración automática:** Si se detectan cambios entrantes en la rama principal, detallar cuáles son y explicar cómo impactan en la rama actual, pero no intentar integrarlos automáticamente.
5. **Universalidad:** Estas revisiones deben ejecutarse obligatoriamente en todas las sesiones, independientemente de la herramienta o proveedor de IA utilizado.

### 1.6. Detección de inconsistencias
Si se detectan contradicciones entre la documentación, la consigna recibida o el código existente, señalarlas inmediatamente y solicitar aclaración humana antes de asumir cualquier interpretación o resolución por cuenta propia.

---

## 2. Durante el trabajo y toma de decisiones

### 2.1. Criterios para la toma de decisiones y registro
1. **Separación estricta entre propuestas y decisiones confirmadas:**
   - **Propuestas:** Cualquier idea, enfoque técnico, arquitectura o cambio estructural debe registrarse únicamente en `docs/estado.md` bajo la sección *Dudas y decisiones que requieren aprobación humana*.
   - **Decisiones confirmadas:** Solo pasan a `docs/decisiones.md` cuando un integrante humano del equipo las haya aprobado explícitamente. Nunca registrar una propuesta como decisión confirmada por iniciativa del agente.
2. **Trazabilidad de decisiones:**
   - Cada entrada en `docs/decisiones.md` debe registrar quién la propuso y qué persona humana la aprobó.
   - No asumir que una sugerencia realizada por otro agente o en otra sesión cuenta automáticamente con la aprobación del equipo.
3. **Inmutabilidad del registro histórico:**
   - Las decisiones previas nunca se eliminan ni se editan retroactivamente. Si una decisión cambia, se registra una nueva entrada que indica explícitamente a cuál reemplaza y fundamenta el motivo.
4. **Veracidad y precisión:**
   - No inventar información ni completar datos desconocidos por cuenta propia. Ante la falta de información, registrar la duda o consultar al usuario.
5. **Prevención y resolución de conflictos:**
   - Antes de modificar la documentación compartida, asegurarse de no pisar cambios realizados por otros integrantes.
   - Ante cualquier conflicto de edición o discrepancia entre versiones, detenerse inmediatamente y solicitar intervención humana en lugar de intentar resolverlo arbitrariamente.
6. **Distinción entre nombres personales e identificadores técnicos:**
   - En registros de decisiones, propuestas y aprobaciones, utilizar el nombre y apellido de la persona cuando se conozcan.
   - Conservar los usuarios técnicos (`mvjhart`, por ejemplo) cuando se haga referencia a cuentas, repositorios, commits, rutas o configuraciones técnicas.
   - No asumir que un nombre de usuario es el nombre personal de alguien.

### 2.2. Mantenimiento y revisión documental permanente durante cada tarea
- **Obligación general de revisión:** La documentación del proyecto debe mantenerse coherente y actualizada a lo largo de todo el desarrollo, no únicamente al cierre de una sesión.
- **Antes de iniciar una tarea:** Consultar la documentación relevante y comprender en profundidad las decisiones técnicas, arquitectónicas y restricciones vigentes.
- **Durante la tarea:** Identificar de manera continua qué información documentada existente en el repositorio podría verse afectada por las modificaciones en curso.
- **Al finalizar cada tarea:** Realizar una revisión exhaustiva del impacto documental sobre todos los documentos existentes en el repositorio, incluidos `README.md`, `AGENTS.md`, los archivos del directorio `docs/` y cualquier otra documentación que se incorpore en el futuro.
- **Amplitud del alcance:** No limitar la revisión a los archivos que parezcan directamente vinculados a primera vista: evaluar si los cambios afectan el contexto general, las decisiones, el estado de tareas, el historial, las instrucciones operativas, la arquitectura, las convenciones o las explicaciones del proyecto. (Esto no implica que todos los documentos deban modificarse en cada tarea, sino que todos deben ser activamente evaluados para asegurar que las actualizaciones necesarias no pasen inadvertidas).

### 2.3. Informe obligatorio de impacto documental al finalizar cada tarea
Al concluir cada tarea, el agente debe presentar de forma visible al usuario un apartado estructurado denominado **Impacto en la documentación**, con el siguiente desglose obligatorio:

1. **Documentos que requieren actualización:**
   - **Ruta del archivo:** Ruta exacta del documento afectado.
   - **Sección afectada:** Encabezado o sección específica que requiere modificaciones.
   - **Motivo:** Explicación concreta de por qué quedó desactualizada, incompleta o requiere incorporar información nueva.
   - **Propuesta concreta de modificación:** Detalle explícito de qué se agregaría, modificaría o eliminaría, incluyendo el texto sugerido o la redacción exacta siempre que sea posible.
   *(Si no se detectan documentos que requieran actualización, indicarlo expresamente con "Ninguno").*
2. **Documentos revisados que no requieren cambios:**
   - Listado de documentos evaluados, con constancia expresa de que fueron analizados y no presentan impacto documental derivado de la tarea.
3. **Decisiones o información pendiente:**
   - Identificación de cualquier dato, definición o consenso que requiera confirmación humana previa antes de poder documentarse.
   - Diferenciación clara entre propuestas técnicas, hechos comprobados y decisiones formalmente aprobadas.
   *(Si no existen pendientes, indicarlo expresamente con "Ninguna").*

*Nota:* Quedan terminantemente prohibidos los informes genéricos o ambiguos (como «actualizar README» o «revisar documentación»). Debe especificarse con precisión qué cambiar, dónde y por qué.

### 2.4. Aprobación humana de las actualizaciones documentales
- **Principio general de autorización explícita:** Salvo por la autorización procedimental de cierre establecida en la sección 3, el agente debe presentar las propuestas de modificación documental y esperar la aprobación humana expresa antes de modificar los archivos compartidos de documentación (`README.md`, `AGENTS.md`, directorio `docs/` y futuros documentos compartidos).
- **Autorización procedimental permanente y limitada para el cierre:** La obligación establecida en la sección 3 constituye autorización procedimental suficiente para actualizar exclusivamente `docs/historial.md` y `docs/estado.md` al finalizar una sesión o hito relevante, siempre que se registren estrictamente **hechos comprobados** (cambios efectivamente implementados y validados) y el **estado real** del proyecto (tareas concluidas, dudas y pendientes). No se requiere solicitar aprobación humana individual para estas actualizaciones factuales de mantenimiento rutinario.
- **Exclusiones de la autorización automática:** Las decisiones nuevas, propuestas técnicas o arquitectónicas, cambios de alcance, interpretaciones no consensuadas o modificaciones a criterios de trabajo nunca forman parte de la autorización rutinaria de cierre y requieren obligatoriamente aprobación humana expresa antes de registrarse formalmente.
- **Prevalencia de instrucciones restrictivas específicas:** Si durante una tarea o sesión el usuario indica expresamente no modificar documentación compartida, solicita revisar los textos previamente o requiere presentar propuestas sin aplicarlas, dicha instrucción específica prevalece en todos los casos sobre la autorización de cierre. En tales situaciones, el agente no debe editar los archivos: debe presentar la redacción propuesta completa en su informe final y aguardar confirmación humana.
- **Límites de la autorización de tareas:** La autorización otorgada para ejecutar una tarea técnica o modificar código fuente no constituye en ningún caso un permiso tácito ni ilimitado para editar cualquier documento compartido.
- **Separación de propuestas y acuerdos:** Bajo ninguna circunstancia se registrarán propuestas o sugerencias como decisiones aprobadas sin la intervención y validación expresa de una persona del equipo.
- **Prohibición de invención de datos:** No inventar datos ni completar información faltante con suposiciones. Si una actualización depende de una definición grupal, se debe solicitar confirmación.
- **Respeto a las decisiones tomadas:** Si una propuesta de actualización documental es rechazada por el usuario, el agente debe acatar estrictamente dicha decisión y no volver a proponerla a menos que surjan datos o circunstancias nuevas que justifiquen su reconsideración.
- **Obligatoriedad de revisión vs. aprobación de cambios:** La revisión documental transversal es obligatoria en todos los casos; la edición efectiva de los archivos compartidos queda supeditada a las autorizaciones y límites establecidos.

---

## 3. Al finalizar cada sesión

Antes de dar por concluida la interacción, el agente debe cumplimentar las siguientes obligaciones de mantenimiento y consolidación documental (operando bajo la autorización procedimental permanente definida en la sección 2.4, registrando exclusivamente hechos comprobados y estado real sin inventar información ni registrar propuestas como hechos):

1. **Actualizar `docs/historial.md`:**
   - Registrar de forma concisa los cambios relevantes implementados en la sesión y los archivos o módulos afectados.
   - No detallar cambios triviales o menores; Git complementa este registro a nivel granular.
   - Si la sesión abarcó varias tareas, preservar los hitos significativos de cada una sin reemplazarlos por un resumen genérico que diluya el trabajo realizado.
2. **Actualizar `docs/estado.md`:**
   - Reflejar el estado real y comprobado del trabajo.
   - **Criterio de verificación:** No declarar terminada ninguna tarea que no haya sido ejecutada, probada o validada de manera efectiva.
   - Dejar identificadas con claridad las tareas incompletas, las dudas abiertas y las próximas acciones sugeridas para retomar el trabajo.
3. **Consolidación y coherencia documental general al cierre:**
   - Realizar una revisión documental integral al cierre de la sesión para asegurar la coherencia transversal de toda la documentación del repositorio.
   - Garantizar que el cierre de sesión no contradiga ni omita las revisiones documentales e informes de impacto realizados durante las tareas individuales de la sesión.
   - Si durante la sesión se acumularon propuestas documentales pendientes de aprobación o discrepancias entre documentos, dejarlas registradas con claridad en `docs/estado.md` bajo la sección correspondiente para su posterior resolución grupal.
4. **Mecanismo de aplicación y excepciones:**
   - La actualización factual rutinaria de `docs/historial.md` y `docs/estado.md` se aplica directamente al cierre en virtud de la autorización permanente de la sección 2.4.
   - *Excepción obligatoria:* Si el usuario indicó de forma expresa que no se editen documentos compartidos, solicitó revisar previamente la redacción o fijó un alcance restringido, el agente no aplicará las modificaciones directamente: presentará la redacción propuesta completa en su informe final y esperará la confirmación humana antes de alterar los archivos.

---

## 4. Distinción entre trabajo personal y estado del proyecto

1. **Espacio de trabajo personal (`.local/`):**
   - La carpeta `.local/` (ignorada en Git) es un espacio privado y opcional para uso individual de cada integrante.
   - Puede utilizarse para documentar avances personales, notas, apuntes, investigaciones preliminares, pruebas, ideas o pendientes individuales.
2. **Separación de ámbitos:**
   - La información alojada en `.local/` no forma parte del estado oficial del proyecto ni condiciona a los demás integrantes.
   - Los registros personales no deben tratarse automáticamente como decisiones aprobadas ni como propuestas formales del equipo.
   - No copiar datos personales a la documentación compartida ni confinar en `.local/` información que el resto del equipo necesite para comprender o continuar el proyecto.

---

## 5. Pautas para la creación de commits

1. **Consulta obligatoria previa al commit:**
   - Consultar nuevamente `docs/convenciones-commits.md` antes de proponer o crear cualquier commit para asegurar el cumplimiento del formato, la granularidad y la plantilla requerida.
2. **Aplicabilidad universal:**
   - Estas convenciones son compartidas y rigen para todos los agentes de IA e integrantes del equipo, independientemente del proveedor, IDE o herramienta utilizada.
3. **Prohibición de commits automáticos o sin validación:**
   - Ningún agente debe realizar commits automáticos sin inspeccionar previamente las diferencias (`git status`, `git diff`, `git diff --staged`) y ejecutar las verificaciones pre-commit obligatorias (`git diff --check`, pruebas pertinentes).
4. **Revisión obligatoria del impacto documental previa a la confirmación:**
   Antes de proponer o preparar cualquier commit, el agente debe:
   - Inspeccionar los cambios específicos que efectivamente se incluirían en la confirmación.
   - Evaluar su impacto sobre todos los documentos relevantes del proyecto (`README.md`, `AGENTS.md`, archivos en `docs/` y otros aplicables).
   - Comprobar si las actualizaciones documentales requeridas ya fueron realizadas y validadas efectivamente.
   - Si faltan actualizaciones documentales, presentar las propuestas concretas de modificación (detallando archivo, sección, motivo y texto sugerido) y solicitar aprobación humana antes de avanzar.
   - Si la evaluación confirma que no hace falta actualizar documentación, dejar constancia explícita de que se realizó la revisión y no se detectó impacto.
   - Esta revisión documental previa al commit complementa y sincroniza, pero en ningún caso reemplaza, la revisión documental obligatoria al finalizar cada tarea.
5. **Propuesta del mensaje de commit:**
   - Formular la propuesta del mensaje siguiendo rigurosamente las convenciones de `docs/convenciones-commits.md`, incluyendo tipo permitido, título conciso en tiempo imperativo o presente y cuerpo explicativo estructurado (qué, archivos afectados, por qué, verificaciones ejecutadas y limitaciones o pendientes).
6. **Prohibición estricta de operaciones de Git sin autorización expresa:**
   - Queda estrictamente prohibido para cualquier agente ejecutar operaciones que alteren el repositorio (`git add`, `git commit`, `git push`, cambios o creación de ramas, `git pull`, `git merge`, `git rebase`, `git reset` o configuración de remotos) sin una autorización humana expresa, previa e inequívoca.

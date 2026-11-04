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

---

## 3. Al finalizar cada sesión

Antes de dar por concluida la interacción:

1. **Actualizar `docs/historial.md`:**
   - Registrar de forma concisa los cambios relevantes implementados en la sesión y los archivos o módulos afectados.
   - No detallar cambios triviales o menores; Git complementa este registro a nivel granular.
2. **Actualizar `docs/estado.md`:**
   - Reflejar el estado real y comprobado del trabajo.
   - **Criterio de verificación:** No declarar terminada ninguna tarea que no haya sido ejecutada, probada o validada de manera efectiva.
   - Dejar identificadas con claridad las tareas incompletas, las dudas abiertas y las próximas acciones sugeridas para retomar el trabajo.

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
   - Consultar nuevamente `docs/convenciones-commits.md` antes de crear cualquier commit para asegurar el cumplimiento del formato, la granularidad y la plantilla requerida.
2. **Aplicabilidad universal:**
   - Estas convenciones son compartidas y rigen para todos los agentes de IA e integrantes del equipo, independientemente del proveedor, IDE o herramienta utilizada.
3. **Prohibición de commits automáticos o sin validación:**
   - Ningún agente debe realizar commits automáticos sin inspeccionar previamente las diferencias (`git status`, `git diff`, `git diff --staged`) y ejecutar las verificaciones pre-commit obligatorias (`git diff --check`, pruebas pertinentes).

# Convenciones de Commits del Proyecto

Este documento establece las pautas, estructura y verificaciones obligatorias para la creación de commits en el repositorio. Aplica a todos los integrantes del equipo y a cualquier agente de IA, con independencia de la herramienta o proveedor utilizado.

---

## 1. Estructura del Mensaje de Commit

Cada mensaje de commit debe constar de un título claro y conciso, seguido de un cuerpo explicativo estructurado.

### Título
- **Formato:** `tipo: descripción breve en tiempo imperativo o presente`
- **Longitud:** Máximo 72 caracteres recomendados.
- **Claridad:** Debe resumir el cambio principal de manera directa.
- **Prohibido:** Títulos genéricos o ambiguos (p. ej., "updates", "changes", "fix", "miscellaneous", "avances").

### Tipos Permitidos
- `docs`: Modificaciones exclusivas de documentación (guías, ADRs, protocolos, notas en `docs/` o raíz).
- `feat`: Nuevas funcionalidades, características o capacidades agregadas al proyecto.
- `fix`: Corrección de errores, fallos de ejecución o bugs.
- `refactor`: Cambios y reorganizaciones internas de código sin alteración de comportamiento funcional ni agregado de features.
- `test`: Incorporación, actualización o refactorización de pruebas unitarias o de integración.
- `chore`: Tareas auxiliares, dependencias, scripts de construcción o configuración general.

### Cuerpo del Mensaje
El cuerpo debe proporcionar el contexto suficiente para que cualquier integrante pueda comprender el trabajo inspeccionando el historial de Git, sin necesidad de abrir inmediatamente cada archivo modificado.

Debe incluir, cuando corresponda:
1. **Qué se modificó:** Descripción precisa de los cambios concretos.
2. **Archivos o componentes afectados:** Listado o mención de módulos y archivos involucrados.
3. **Por qué se realizó el cambio:** Justificación técnica, funcional o de negocio detrás de la modificación.
4. **Verificaciones ejecutadas:** Validaciones, pruebas de compilación/ejecución o comandos ejecutados y sus resultados efectivos.
5. **Limitaciones o pendientes:** Asuntos abiertos, pendientes de definición o pasos subsiguientes relacionados.

---

## 2. Plantilla Estándar para Mensajes de Commit

Los agentes e integrantes deben utilizar la siguiente estructura al redactar los mensajes de confirmación:

```text
tipo: descripción breve del cambio principal

### Qué se modificó:
- Detalle conciso de los cambios implementados.

### Archivos afectados:
- ruta/al/archivo-1
- ruta/al/archivo-2

### Por qué se realizó:
- Motivo o contexto del cambio.

### Verificaciones ejecutadas:
- git status: [resultado]
- git diff --check: [resultado]
- Otras pruebas/comandos ejecutados: [resultado]

### Limitaciones o pendientes:
- Notas sobre aspectos no cubiertos o pendientes (o "Ninguna").
```

---

## 3. Granularidad de los Commits

- **Unidad coherente de trabajo:** Cada commit debe representar un cambio lógico, autocontenido y comprensible.
- **Separación de responsabilidades:** Si un conjunto de cambios contiene partes independientes (por ejemplo, cambios de documentación, ajustes de configuración y nuevas funcionalidades), deben separarse en commits independientes.
- **Cohesión:** No dividir artificialmente cambios que requieran ir juntos para mantener el proyecto en un estado funcional y coherente.
- **Tamaño adecuado:** Evitar commits monolíticos o excesivamente extensos que mezclen tareas no relacionadas.
- **No inflar el historial:** No realizar commits superfluos o redundantes únicamente con el propósito de aumentar la cantidad de registros.

---

## 4. Verificaciones Obligatorias

### Antes de confirmar (Pre-commit)
1. **Consultar estado:** Ejecutar `git status` para conocer exactamente el estado del árbol de trabajo.
2. **Revisar diferencias:** Inspeccionar las diferencias con `git diff` y `git diff --staged` antes de confirmar.
3. **Control de archivos preparados:** Verificar qué archivos están en stage (`git add`) y constatar que solo se incluyan los que corresponden a la tarea.
4. **Protección de privacidad y limpieza:** Comprobar rigurosamente que **no** se incluyan archivos de `.local/`, credenciales, secretos, claves, archivos temporales (`*.tmp`, `*.bak`) ni modificaciones accidentales.
5. **Chequeo de sintaxis Git:** Ejecutar obligatoriamente `git diff --check` (y `--staged --check`) para verificar que no haya espacios en blanco sobrantes al final de líneas ni problemas de formato.
6. **Resolución de problemas:** Si se detectan errores o inconsistencias, corregirlos antes de hacer commit. Si existe un bloqueo técnico, informarlo.
7. **Detección de cambios ajenos o conflictos:** Si se encuentran modificaciones de otros integrantes, cambios inesperados o conflictos no resueltos, **detenerse inmediatamente** y pedir intervención humana. Nunca incluirlos ni sobreescribirlos por conveniencia.

### Después de confirmar (Post-commit)
1. **Confirmar creación:** Verificar que el commit fue registrado exitosamente.
2. **Inspección de registro:** Revisar el hash, el título y el cuerpo con `git log -1` y `git show`.
3. **Estado final:** Comprobar nuevamente `git status` para asegurar que el repositorio quede en el estado previsto.
4. **Veracidad:** **Nunca afirmar que una verificación fue exitosa si no fue efectivamente ejecutada.** Informar con precisión los resultados obtenidos.

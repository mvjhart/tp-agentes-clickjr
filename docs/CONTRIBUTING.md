# Guía de contribución

Esta guía reúne los criterios generales para colaborar en el repositorio de **ClickJr**. Su objetivo es facilitar el trabajo en paralelo, mantener los cambios organizados y permitir que todos los integrantes puedan revisar y comprender lo que se incorpora al proyecto.

No pretende definir cada detalle de implementación: las decisiones específicas y el seguimiento de cada actividad se registrarán en las GitHub Issues, los comentarios y los Pull Requests.

## 1. Organización del trabajo

- Las tareas se encuentran organizadas en [GitHub Issues](https://github.com/mvjhart/tp-agentes-clickjr/issues).
- El seguimiento general se realiza mediante el GitHub Project asociado al repositorio.
- Las tareas pueden desarrollarse individualmente o en colaboración, según su alcance y los acuerdos del equipo.
- Los roles identifican responsabilidades de coordinación, pero no limitan la participación de los demás integrantes.
- Las decisiones que afecten al trabajo compartido deben conversarse antes de implementarse.

## 2. Trabajo con ramas

Se propone trabajar en ramas independientes para evitar que los cambios de una tarea interfieran con los de otras.

Como orientación:

- Partir de la rama principal actualizada antes de comenzar una tarea.
- Utilizar una rama propia para cada conjunto coherente de cambios.
- Evitar trabajar directamente sobre la rama principal.
- Mantener los cambios de cada rama relacionados con una tarea o Issue siempre que sea posible.

Se pueden utilizar nombres descriptivos como:

- `feat/modulo-presentacion`
- `feat/propuesta-r1`
- `fix/navegacion`
- `docs/actualizar-readme`
- `chore/configuracion-proyecto`

Los nombres son ejemplos orientativos; lo importante es que permitan reconocer fácilmente el propósito de la rama.

## 3. Commits

Los commits deben respetar las pautas establecidas en [`docs/convenciones-commits.md`](docs/convenciones-commits.md).

Se recomienda realizar confirmaciones que representen cambios coherentes y que permitan comprender su propósito al revisar el historial.

Antes de confirmar cambios, verificar el estado del repositorio, revisar las diferencias y comprobar que no se incluyan archivos personales, temporales ni información sensible.

## 4. Pull Requests

Los cambios destinados a incorporarse a la rama principal deben presentarse mediante Pull Requests.

Para facilitar su revisión:

- Crear el PR desde la rama de trabajo hacia la rama principal.
- Utilizar la plantilla disponible en `.github/pull_request_template.md`.
- Relacionar el PR con la Issue correspondiente cuando exista.
- Explicar brevemente qué se modificó y por qué.
- Indicar las verificaciones realizadas y sus resultados reales.
- Adjuntar evidencias cuando ayuden a comprender o comprobar el cambio.

Los comentarios del PR pueden utilizarse para explicar decisiones, proponer ajustes, señalar problemas y dejar constancia de los acuerdos alcanzados durante la revisión.

No es necesario anticipar en la descripción todos los detalles técnicos: el código, los commits y la conversación del PR completan esa información.

## 5. Revisión e integración

Los Pull Requests deben revisarse antes de incorporarse a la rama principal.

La revisión puede contemplar:

- Correspondencia entre los cambios y la tarea solicitada.
- Coherencia con las decisiones y convenciones del proyecto.
- Funcionamiento de los módulos y compatibilidad con el resto de la aplicación.
- Cumplimiento de los requisitos de la consigna.
- Actualización de la documentación cuando corresponda.

Si se detectan problemas, se pueden solicitar ajustes mediante comentarios en el PR. Cada responsable deberá ocuparse de las correcciones de su trabajo, interactuando con su agente de programación cuando se trate de código.

La integración se realizará una vez revisados y acordados los cambios.

## 6. Construcción mediante agentes de programación

La construcción y modificación del código del proyecto debe realizarse exclusivamente mediante agentes de programación, sin edición manual del código fuente.

Cada integrante participa directamente en ese proceso: proporciona instrucciones, evalúa los resultados, solicita correcciones y verifica el comportamiento obtenido.

La responsabilidad sobre el resultado sigue siendo de los integrantes del equipo, independientemente del agente o la herramienta utilizada.

Las herramientas, instrucciones, problemas relevantes y aportes individuales deberán documentarse progresivamente en el README, según lo establecido para la tarea T14.

## 7. Documentación y comunicación

La documentación compartida debe mantenerse coherente con el estado real del proyecto.

Cuando un cambio afecte decisiones, estructura, instrucciones de uso o información relevante, deberá evaluarse si corresponde actualizar los documentos existentes.

Se utilizarán los espacios del repositorio según su finalidad:

- **Issues:** planificación, seguimiento y registro de tareas.
- **Pull Requests:** presentación, explicación, revisión y discusión de cambios.
- **Commits:** historial de modificaciones concretas.
- **`docs/`:** documentación general, decisiones y estado del proyecto.
- **README:** presentación del proyecto, instrucciones y registro de aportes.

Ante dudas, conflictos o cambios que puedan afectar el trabajo de otros integrantes, se deberá consultar antes de avanzar con modificaciones que comprometan sus aportes.

---

Estas pautas podrán ajustarse a medida que avance el proyecto, mediante acuerdos del equipo y actualizaciones de la documentación correspondiente.
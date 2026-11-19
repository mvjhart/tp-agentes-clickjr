# Propuesta de Solución Agéntica: Sentencia R2 (ClickJr)

Documento conceptual correspondiente a la propuesta de solución agéntica para la sentencia R2, asignada al Rol 3 (Marcos Aquino) en el marco del bloque «Postulación y permisos» de la startup ClickJr.

> **Criterio metodológico y delimitación de alcance:** Este documento describe un diseño estrictamente conceptual y expositivo para un futuro agente. Conforme a las restricciones del proyecto (`REQ-ALC-01`), no implica la implementación de modelos de inteligencia artificial en ejecución, llamadas a APIs externas ni backend operativo. En cada sección se distingue explícitamente lo que proviene de la sentencia normativa de aquello que constituye una interpretación o un supuesto de diseño formulado por el equipo.

> **Estado de los acuerdos:** Los insumos de diseño marcados como «acordado entre coordinadores» en la sección 11 fueron confirmados por los coordinadores de R1 y R2 (Candelaria Chazarreta y Marcos Aquino). Su ratificación por Federico Acosta Maneiro y Victoria Mariani sigue pendiente mediante comentarios en los Pull Requests correspondientes, y ninguno de estos acuerdos ha sido registrado como decisión formal (DEC) ni aprobado por el equipo. Los insumos marcados como «solo en R2» son propuesta de Marcos Aquino y están pendientes de confirmación con Candelaria Chazarreta.

---

## 1. Título y Beneficio de la Propuesta

En coordinación con la propuesta de la sentencia R1, se conservan las denominaciones **AutoPost** (R1) y **PostuAyuda** (R2) como dos componentes integrados de un mismo sistema ClickJr bajo el subtítulo general: *«Solución agéntica — bloque Postulación y permisos»*.

### PostuAyuda: Tu Postulación no se Pierde, se Completa

- **Explicación del beneficio:** PostuAyuda interviene cuando tu postulación no puede avanzar porque falta algo: una autorización específica, datos de tu perfil o la respuesta a una pregunta obligatoria. En lugar de descartar la oportunidad, el sistema identifica exactamente qué se necesita, te lo comunica en un único mensaje claro y espera tu respuesta. No envía nada sin que lo pendiente esté resuelto: la decisión de postular siempre queda en manos de AutoPost, una vez que confirmaste lo que faltaba.

---

## 2. Rol y Funcionamiento Conceptual del Futuro Agente

### Qué hace PostuAyuda

El futuro agente de R2 operaría conceptualmente como el componente de gestión de faltantes y retención del sistema ClickJr. Su función es recibir un caso derivado por AutoPost (R1), verificar que siga siendo viable, determinar qué falta entre autorización, información y respuestas obligatorias, solicitar a la persona exclusivamente lo necesario en una sola interacción, y notificar el resultado a R1 cuando el caso se resuelva, venza o se cierre por otro motivo.

PostuAyuda nunca envía ni solicita el envío de una postulación. [Establecido por la sentencia R2]. La decisión de solicitar el envío es siempre de AutoPost (R1), que reevalúa las seis condiciones completas (C1 a C6) al recibir la notificación de PostuAyuda. (Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5.)

### Cuándo se activa

PostuAyuda se activa al recibir un paquete de derivación de R1 (ver sección 5, tabla R1→R2). No tiene disparador propio ni evalúa directamente el catálogo de vacantes: solo trabaja sobre casos que AutoPost ya verificó y derivó.

### Relación con R1 y estructura del flujo para T10

PostuAyuda y AutoPost son dos componentes de un único sistema integrado. Para que el responsable de los diagramas (T10) pueda representar el flujo, se indica aquí su estructura sin dibujarlo:

- **Dos entradas:**
  1. El paquete de derivación enviado por R1 (caso nuevo o reintento con el mismo identificador).
  2. La reanudación del caso cuando la persona responde, rechaza, o cuando vence el plazo de espera.
- **Cuatro salidas** (estados de retorno a R1):
  1. `resuelto` — La persona completó lo solicitado.
  2. `vencido` — Se superó el plazo máximo de espera sin respuesta.
  3. `rechazado` — La persona declinó expresamente completar lo requerido o continuar con la postulación.
  4. `no viable` — Al re-chequear la base, una condición base (B1, B2 o B3) dejó de cumplirse; va acompañado del motivo.

---

## 3. Notación Compartida y Herramientas Conceptuales

### Tabla de equivalencias y notación R1 / R2

Para asegurar una articulación formal y coherente entre los módulos de AutoPost (R1) y PostuAyuda (R2), se adopta la siguiente tabla de correspondencias acordada entre ambos coordinadores. (Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 3, y `analisis-r2.md`, sección 7.)

| Elemento R1 | Enunciado en R1 | Elemento R2 | Enunciado en R2 | Relación conceptual |
|---|---|---|---|---|
| **C1** | «una vacante está activa» | **B1** | «la vacante está activa» | Condición base compartida |
| **C2** | «el perfil cumple sus requisitos» | **B2** | «es compatible» | Condición base compartida (equivalencia acordada) |
| **C6** | «no existe una postulación previa a esa vacante» | **B3** | «no existe una postulación previa» | Condición base compartida |
| **C4** | «existe autorización para postular automáticamente» | **F1** | «falta autorización» | Condición R1 vs. falta R2 (negación de C4) |
| **C3** | «los datos están completos» | **F2** | «falta información» | Condición R1 vs. falta R2 (negación de C3) |
| **C5** | «no hay preguntas obligatorias pendientes» | **F3** | «falta una respuesta obligatoria» | Condición R1 vs. falta R2 (negación de C5) |

### Herramientas conceptuales de consulta y operación

Para reunir los datos requeridos y ejecutar sus acciones, PostuAyuda se diseñaría con la capacidad conceptual de consultar y operar los siguientes servicios o herramientas internas de ClickJr. Las primeras tres son herramientas compartidas con AutoPost: se reutilizan en modo solo lectura para los re-chequeos de la base. Todas son abstracciones conceptuales, no bibliotecas externas ni APIs en ejecución.

| Herramienta conceptual | Información que consulta o acción que realiza | Condición o paso al que sirve |
|---|---|---|
| **`Herramienta_EstadoVacante`** | Consulta el catálogo central de búsquedas laborales para verificar si la vacante sigue abierta. *(Compartida con R1; solo lectura en R2.)* | Re-chequeo de B1 (C1). |
| **`Herramienta_CotejoRequisitos`** | Contrasta los requisitos publicados con el perfil actualizado de la persona. *(Compartida con R1; solo lectura en R2.)* | Re-chequeo de B2 (C2). |
| **`Herramienta_HistorialPostulaciones`** | Verifica si existe un envío previo efectivamente realizado para esa vacante. *(Compartida con R1; solo lectura en R2.)* | Re-chequeo de B3 (C6). |
| **`Herramienta_RegistroCasosAbiertos`** | Mantiene el registro del caso abierto único por `(id_persona, id_vacante)`, su identificador y su estado (en trámite o cerrado). Permite abrir, actualizar y liberar el candado. | Caso abierto único y candado (I9). |
| **`Herramienta_NotificacionPersona`** | Envía a la persona una solicitud consolidada con lo pendiente (F1, F2 y/o F3), en lenguaje claro, y recibe su respuesta. | Solicitud de lo pendiente y recepción de respuesta. |
| **`Herramienta_RegistroAuditoria`** | Asienta un registro estructurado de cada acción: identificador del caso, persona, vacante, faltantes detectados, solicitud emitida, respuestas recibidas, re-chequeos realizados y estado de retorno. | Criterio de privacidad y trazabilidad (I11). |
| **`Herramienta_ControlPlazos`** | Registra el momento de apertura del caso en R2, dispara un recordatorio previo al vencimiento y notifica cuando se alcanza el plazo máximo de espera. | Control de vencimiento (I8). |

*[Supuesto de diseño del grupo]:* Todas las herramientas mencionadas son abstracciones conceptuales destinadas a ilustrar cómo PostuAyuda interactúa con los módulos del sistema. No representan bibliotecas externas ni APIs en ejecución.

---

## 4. Acciones cuando se Cumple la Condición (Camino del SÍ)

### Qué establece la sentencia

*[Establecido por la sentencia R2]:* Cuando la base es cierta (B1, B2 y B3) y falta al menos uno entre F1, F2 y F3, el sistema solicita lo pendiente y no envía la postulación. Estos son los dos únicos efectos que la sentencia prescribe; todo lo demás en esta sección es diseño del grupo.

### Secuencia de acciones

*[Supuesto de diseño del grupo]:* A continuación se detalla la secuencia de pasos que PostuAyuda ejecutaría al recibir un caso derivado por R1 y mientras lo gestiona.

**Paso 1 — Recibir el caso con su identificador** [Regla fija]

PostuAyuda recibe el paquete de derivación de R1 (ver sección 5, tabla R1→R2): identificador del caso, identificadores de persona y vacante, detalle de los faltantes (F1, F2 y/o F3 con sus precisiones), y constancia fechada de que B1, B2 y B3 se cumplían al derivar. Registra la apertura del caso en `Herramienta_RegistroCasosAbiertos` y anota el momento de inicio en `Herramienta_ControlPlazos`.

**Paso 2 — Re-chequear la base antes de solicitar algo** [Regla fija]

PostuAyuda consulta `Herramienta_EstadoVacante`, `Herramienta_CotejoRequisitos` y `Herramienta_HistorialPostulaciones` para verificar que B1, B2 y B3 siguen cumpliéndose. Este chequeo protege a la persona de recibir una solicitud por un caso que ya no es viable. (Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5.)

- Si alguna condición base dejó de cumplirse: PostuAyuda no solicita nada, devuelve `no viable` a R1 con el motivo (B1, B2 o B3), libera el candado y asienta el resultado en `Herramienta_RegistroAuditoria`.
- Si la base sigue siendo cierta: continúa al paso 3.

**Paso 3 — Determinar qué falta y consolidar una solicitud** [Paso agéntico]

PostuAyuda examina el detalle de faltantes del paquete recibido (F1, F2, F3; puede ser más de uno) y redacta **una única solicitud consolidada** en lenguaje claro para la persona, que describe exactamente qué debe completar, otorgar o responder. La solicitud no contiene información irrelevante ni repite campos ya presentes en el perfil. Los faltantes múltiples se presentan juntos para evitar interacciones sucesivas. Esta es la solicitud a que refiere «solicita lo pendiente» en la sentencia.

*[Interpretación del análisis]:* C4 se lee como «autorización que cubre los datos que pide la vacante»; si la autorización vigente no cubre lo requerido, el faltante F1 incluye el consentimiento puntual para esos datos específicos. [Supuesto de diseño del grupo]: esta lectura no se modifica en esta propuesta; se adopta coherentemente con `propuesta-r1.md`, sección 4, apartado «Cómo se evalúa C4 antes de solicitar el envío». Lo que excede lo autorizado se pide como autorización específica (I11), sin enviar ningún dato hasta que sea otorgada.

**Paso 4 — Enviar la solicitud a la persona y esperar** [Paso agéntico + Regla fija]

PostuAyuda envía la solicitud mediante `Herramienta_NotificacionPersona` y queda en espera. Durante la espera:
- `Herramienta_ControlPlazos` monitorea el transcurso del tiempo.
- Antes de que venza el plazo, PostuAyuda emite un recordatorio a la persona. *[Supuesto de diseño del grupo — solo en R2, propuesta de Marcos Aquino, pendiente de confirmar con Candelaria Chazarreta]:* La emisión de un recordatorio previo al vencimiento no figura en `propuesta-r1.md`.
- La persona puede responder, completar lo requerido, rechazar o no responder.

**Paso 5 — Recibir y validar la respuesta** [Paso agéntico]

Cuando la persona responde, PostuAyuda evalúa si la respuesta cubre efectivamente lo pendiente:
- Si la respuesta es completa: continúa al paso 6.
- Si la respuesta es parcial (cubre algún faltante pero no todos): PostuAyuda registra lo resuelto y solicita lo que sigue faltando. No cierra el caso como `resuelto` hasta que todo lo pendiente esté cubierto.
- Si la persona rechaza en cualquier momento: PostuAyuda devuelve `rechazado` a R1, libera el candado y asienta el resultado.

**Paso 6 — Re-chequear la base al reanudar** [Regla fija]

Antes de notificar a R1 que lo pendiente fue resuelto, PostuAyuda vuelve a consultar `Herramienta_EstadoVacante`, `Herramienta_CotejoRequisitos` y `Herramienta_HistorialPostulaciones`. *[Supuesto de diseño del grupo — solo en R2, propuesta de Marcos Aquino, pendiente de confirmar con Candelaria Chazarreta]:* Este segundo re-chequeo (al reanudar, además del inicial al recibir el caso) no figura explícitamente en `propuesta-r1.md`.

- Si alguna condición base dejó de cumplirse: devuelve `no viable` con el motivo, libera el candado y registra.
- Si la base sigue siendo cierta y lo pendiente está resuelto: continúa al paso 7.

**Razón de los dos re-chequeos:** el primero (Paso 2) evita molestar a la persona por un caso ya inviable antes de solicitar nada; el segundo (Paso 6) garantiza que la notificación a R1 refleja el estado actual de la vacante y del historial, ya que R1 es quien decide si se envía.

**Paso 7 — Notificar el estado a R1** [Regla fija]

PostuAyuda devuelve a R1 el identificador del caso y el estado `resuelto`. No solicita el envío ni toma ninguna decisión sobre si postular: eso queda en R1, que reevalúa las seis condiciones completas (C1 a C6) antes de actuar. Asienta el resultado en `Herramienta_RegistroAuditoria` y libera el candado.

---

## 5. Entregas entre los Dos Flujos

*(Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5, apartado «Paquete de transferencia R1 → R2» y «Estados de retorno (R2 → R1)».)*

### Tabla A — Paquete R1 → R2 (derivación)

| Campo | Contenido | Dónde figura en propuesta-r1.md |
|---|---|---|
| Identificador del caso | Generado por R1 al derivar; se conserva en cada reintento. | Sección 5, «Identificador y apertura». |
| Identificador de persona | ID única de la persona postulante. | Sección 5, «Paquete de transferencia R1 → R2». |
| Identificador de vacante | ID única de la vacante. | Sección 5, «Paquete de transferencia R1 → R2». |
| Faltantes detectados | Cuáles entre F1, F2 y F3 fallan, con detalle: campos vacíos (F2), tipo de autorización requerida (F1) o preguntas sin responder (F3). Puede ser más de uno. | Sección 5, «Paquete de transferencia R1 → R2». |
| Constancia de viabilidad | Registro fechado de que B1, B2 y B3 se cumplían en el momento de derivar. | Sección 5, «Paquete de transferencia R1 → R2». |

### Tabla B — Respuesta R2 → R1 (retorno)

| Campo | Contenido |
|---|---|
| Identificador del caso | El mismo recibido de R1; R2 no genera uno nuevo. |
| Estado | Uno de cuatro valores: `resuelto`, `vencido`, `rechazado` o `no viable`. |
| Motivo (solo en `no viable`) | Cuál de B1, B2 o B3 dejó de cumplirse. |

### Tabla C — Qué hace R1 con cada estado de retorno

*(Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5, «Procesamiento del retorno en R1».)*

| Estado recibido | Acción de R1 |
|---|---|
| `resuelto` | Reevalúa las seis condiciones C1 a C6 con el mismo identificador. Si se cumplen, solicita el envío. Si vuelven a fallar C3, C4 o C5, considera una nueva derivación a R2 (sujeta al tope). Si falla C1, C2 o C6, aplica su camino propio y cierra como `no viable`. |
| `vencido` | No solicita ni transmite la postulación. Registra el resultado, informa a la persona y cierra el caso. |
| `rechazado` | No solicita ni transmite la postulación. Registra el resultado, informa a la persona y cierra el caso. |
| `no viable` | Registra el motivo comunicado por R2, aplica el tratamiento propio de R1 para C1, C2 o C6 y no vuelve a derivar ese caso. |

---

## 6. Tratamiento cuando la Base no se Cumple (Camino del «NO»)

*[Supuesto de diseño del grupo]:* La sentencia R2 no establece qué ocurre cuando B1, B2 o B3 no se cumplen. Todo el comportamiento de PostuAyuda ante una base falsa es diseño del grupo, coherente con el tratamiento de R1 para C1, C2 y C6 (ver `propuesta-r1.md`, sección 5, «Tratamiento de fallas en viabilidad básica»).

La respuesta de PostuAyuda ante una base falsa es siempre `no viable` con el motivo, en cualquiera de los dos momentos en que lo detecta: al recibir el caso (Paso 2 de la sección 4) o al reanudar tras la respuesta de la persona (Paso 6).

| Condición que falla | Motivo devuelto | Momento en que se detecta | Efecto en R2 | Efecto en R1 (vía I4) |
|---|---|---|---|---|
| **B1 falsa** — La vacante dejó de estar activa. | `no viable`, motivo B1 | Al recibir el caso o al reanudar. | No solicita nada (o detiene la espera). Libera el candado. Registra en auditoría. | R1 aplica su tratamiento de C1: informa a la persona que la vacante dejó de recibir postulaciones y cierra como `no viable`. No vuelve a derivar a R2. |
| **B2 falsa** — El perfil ya no cumple los requisitos. | `no viable`, motivo B2 | Al recibir el caso o al reanudar. | No solicita nada (o detiene la espera). Libera el candado. Registra en auditoría. | R1 aplica su tratamiento de C2: informa que los requisitos no se cumplen y cierra como `no viable`. No vuelve a derivar a R2. |
| **B3 falsa** — Existe una postulación previa efectivamente enviada. | `no viable`, motivo B3 | Al recibir el caso o al reanudar. | No solicita nada (o detiene la espera). Libera el candado. Registra en auditoría. | R1 aplica su tratamiento de C6: informa la existencia de la postulación anterior y cierra como `no viable`. No vuelve a derivar a R2. |

**Nota sobre B1 y vencimiento:** Si la vacante se cierra mientras el caso está en espera, la detección ocurre en el re-chequeo del Paso 6 (al reanudar) o bien en un control periódico de `Herramienta_EstadoVacante` si la plataforma lo implementa. En ese momento el caso no se declara `vencido`: se devuelve `no viable` con motivo B1. El estado `vencido` está reservado exclusivamente para el agotamiento del plazo máximo de espera sin respuesta de la persona. *[Supuesto de diseño del grupo — solo en R2, propuesta de Marcos Aquino, pendiente de confirmar con Candelaria Chazarreta.]* La lógica de que `no viable` prevalece sobre `vencido` cuando falla una condición base ya figura acordada en `propuesta-r1.md`, sección 5, acuerdo 6; lo específico de este apartado es la aplicación al flujo de R2.

---

## 7. Vencimiento, Reintentos, Caso Abierto Único, Reapertura y Estados Finales

### Vencimiento

*(Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5, «Tope de derivaciones» y sección 8.1, acuerdo 8.)*

*[Supuesto de diseño del grupo]:* PostuAyuda aguarda la respuesta de la persona durante un plazo máximo (valor ilustrativo: 7 días, a definir por la plataforma). Si la persona no responde dentro del plazo, `Herramienta_ControlPlazos` lo notifica, PostuAyuda re-chequea B1, B2 y B3 antes de cerrar: si alguna falló, devuelve `no viable` con el motivo; si la base sigue siendo cierta, devuelve `vencido`. En cualquier caso, libera el candado, avisa a la persona y asienta el registro en `Herramienta_RegistroAuditoria`. El plazo de vencimiento de R2 no se aplica automáticamente a la validación humana de C2 en R1, que tiene sus propios criterios de espera.

### Reintentos y tope de derivaciones

*(Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, secciones 5 y 8.1, acuerdos 8 y 9.)*

*[Supuesto de diseño del grupo]:* Si, al devolver R2 el estado `resuelto` y reevaluar R1 las seis condiciones, vuelven a fallar C3, C4 o C5, R1 puede derivar nuevamente el caso a PostuAyuda. En ese reintento, PostuAyuda recibe el **mismo identificador de caso** ya existente y el nuevo detalle de faltantes. No genera un identificador nuevo ni lleva un contador propio de reintentos.

El tope de derivaciones se cuenta en R1 (valor ilustrativo: máximo 3 derivaciones, contando la primera). PostuAyuda **no ve el contador ni recibe ningún aviso especial** cuando se alcanza: simplemente deja de recibir derivaciones. Cuando R1 detecta que se alcanzó el tope, no deriva a R2: informa a la persona y escala el caso a revisión humana de «el equipo de ClickJr», actor que las sentencias no prevén y que se incorpora como *[Supuesto de diseño del grupo]*. Desde la perspectiva de PostuAyuda, ese caso quedó cerrado en su última devolución de estado.

### Caso abierto único y candado

*(Acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, secciones 5 y 8.1, acuerdos 6 y 7.)*

*[Supuesto de diseño del grupo]:* Existe un único caso abierto por combinación `(id_persona, id_vacante)`. El candado, registrado en `Herramienta_RegistroCasosAbiertos`, bloquea evaluaciones automáticas nuevas de R1 para la misma persona y vacante mientras el caso esté en trámite en R2 (derivado, retenido esperando respuesta). No bloquea la reevaluación del propio caso: R1 puede retomarlo porque lo reconoce por su identificador.

El candado se libera cuando PostuAyuda devuelve cualquier estado de retorno (`resuelto`, `vencido`, `rechazado` o `no viable`). En el sistema global, los estados finales que liberan el candado de forma definitiva son: `enviado`, `vencido`, `rechazado`, `no viable` y `escalado` (estos dos últimos son estados finales del sistema; R2 solo devuelve los cuatro de la sección 2). El estado `enviado` lo registra R1 al despachar efectivamente la postulación. `escalado` cierra el circuito automático y lo pasa a revisión humana.

### Reapertura

*(Planteado por Candelaria Chazarreta, aceptado por Marcos Aquino; acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 5, «Política de no reapertura automática acordada».)*

*[Supuesto de diseño del grupo]:* Después de que el sistema global cierre un caso como `vencido`, `rechazado` o `escalado`, no se inicia automáticamente otra evaluación para la misma persona y vacante, salvo pedido expreso de la persona. Esta restricción no incluye `no viable`: un caso cerrado con ese estado puede dar lugar a una nueva evaluación cuando exista un nuevo disparador o cambio relevante.

PostuAyuda no reabre casos por su cuenta: solo devuelve el estado al cierre. La marca de reapertura es responsabilidad del sistema global (R1).

---

## 8. Casos Límite, Excepciones e Intervención Humana

### Caso límite principal: la vacante se cierra o la persona postula por otra vía durante la espera

*[Supuesto de diseño del grupo]:*

**La vacante se cierra (B1 deja de cumplirse):** PostuAyuda lo detecta en el re-chequeo del Paso 6 (sección 4), al reanudar cuando la persona responde, o bien cuando `Herramienta_EstadoVacante` lo informa proactivamente. Al detectarlo, no solicita ni procesa más acciones: devuelve `no viable` con motivo B1, libera el candado, avisa a la persona que la vacante ya no está disponible y asienta el registro. R1 aplica su tratamiento de C1 y cierra el caso; no vuelve a derivar.

**La persona postula a la misma vacante por otra vía (B3 deja de cumplirse):** `Herramienta_HistorialPostulaciones` lo refleja al re-chequear B3 en el Paso 6. PostuAyuda devuelve `no viable` con motivo B3, libera el candado y registra. R1 aplica su tratamiento de C6.

Ambos casos garantizan que PostuAyuda no solicita información por una oportunidad que ya no existe o que ya fue aprovechada.

### Otros casos de excepción

**Respuesta parcial:** La persona responde cubriendo solo parte de lo pendiente. PostuAyuda registra lo resuelto y emite una nueva solicitud con lo que sigue faltando, sin reiniciar el plazo ni generar un nuevo identificador. El caso permanece abierto.

**Respuesta posterior al vencimiento:** Si la persona responde después de que el plazo expiró y PostuAyuda ya devolvió `vencido`, la respuesta llega a un caso ya cerrado. PostuAyuda no procesa respuestas de casos cerrados. Si la persona desea intentarlo nuevamente, debe hacerlo mediante solicitud expresa (reapertura, sujeta a R1).

**Rechazo de la persona:** La persona puede rechazar en cualquier momento, incluso antes de responder cualquier parte de lo pendiente. PostuAyuda devuelve `rechazado` inmediatamente, libera el candado y registra.

**Tope de derivaciones alcanzado:** Cuando R1 alcanza el máximo de reintentos, deja de derivar a PostuAyuda. Este evento ocurre en el flujo de R1 y PostuAyuda no recibe ninguna notificación especial. R1 escala el caso a revisión humana de «el equipo de ClickJr».

### Intervención humana

*[Establecido por la sentencia R2]:* La sentencia no prevé instancias de intervención humana en su enunciado. Todas las instancias de participación de personas que se describen a continuación son supuestos de diseño del grupo.

*[Supuesto de diseño del grupo]:* Se identifican las siguientes instancias de participación humana en el flujo de PostuAyuda:

1. **[Paso humano] La persona completa lo solicitado:** Responde a la solicitud de PostuAyuda otorgando la autorización puntual (F1), completando los datos faltantes de su perfil (F2) o respondiendo las preguntas obligatorias de la vacante (F3). Es la acción central que habilita la continuación del caso.
2. **[Paso humano] La persona rechaza:** Decide no completar lo requerido o no continuar con la postulación. Puede hacerlo en cualquier momento durante la espera.
3. **[Paso humano, vía R1] Escalado al equipo de ClickJr:** Cuando R1 alcanza el tope de derivaciones, escala el caso a revisión humana de «el equipo de ClickJr». Este paso ocurre en el flujo de R1; PostuAyuda no participa en él.

---

## 9. Qué es Agéntico y qué es Regla Fija en PostuAyuda

La siguiente distinción orienta al responsable de los diagramas (T10) sobre qué pasos requieren capacidad de interpretación o generación de lenguaje natural y cuáles son verificaciones deterministas.

### Trabajo del agente (PostuAyuda)

*[Supuesto de diseño del grupo]:* PostuAyuda interviene como agente en las tareas que involucran interpretación, decisión o lenguaje natural:

- **Determinación de faltantes:** Examinar el detalle del paquete de derivación e identificar con precisión qué falta entre F1, F2 y F3, incluyendo faltantes múltiples. [Paso agéntico]
- **Redacción de la solicitud consolidada:** Traducir los faltantes detectados en un mensaje claro, en lenguaje natural, que explique a la persona exactamente qué se necesita y por qué. [Paso agéntico]
- **Interpretación de respuestas:** Leer la respuesta de la persona, que puede estar en lenguaje libre, y determinar si cubre lo pendiente, si es parcial o si puede interpretarse como un rechazo implícito. [Paso agéntico]
- **Decisión de re-chequeo:** Determinar cuándo es el momento correcto de re-chequear la base y la cobertura de la respuesta. [Paso agéntico]
- **Explicación y registro:** Explicar a la persona, en lenguaje claro, el resultado del caso (qué se resolvió, qué no, y qué ocurre a continuación), y asentar el registro estructurado en `Herramienta_RegistroAuditoria`. [Paso agéntico]

### Reglas fijas (deterministas)

*[Establecido por la sentencia R2]* y *[Supuesto de diseño del grupo — regla fija]*:

- La condición de la sentencia: $(B_1 \land B_2 \land B_3 \land (F_1 \lor F_2 \lor F_3))$ es una regla fija; PostuAyuda no la modifica. [Regla fija]
- La prohibición de enviar: PostuAyuda nunca envía ni solicita el envío de una postulación. [Regla fija] [Establecido por la sentencia R2]
- Los re-chequeos de B1, B2 y B3 (Pasos 2 y 6): son verificaciones deterministas contra los registros del sistema. [Regla fija]
- El control de plazos y el vencimiento: `Herramienta_ControlPlazos` opera de forma determinista sobre el tiempo transcurrido. [Regla fija]
- El candado y la gestión del caso abierto único: apertura, bloqueo, conservación del identificador y liberación son operaciones deterministas. [Regla fija]

---

## 10. Resultado Esperado

### Lo que establece la sentencia

*[Establecido por la sentencia R2]:* El sistema solicita lo pendiente y no envía la postulación.

### Resultado global de la operación de PostuAyuda

*[Supuesto de diseño del grupo]:* Cuando PostuAyuda concluye su intervención en un caso, el resultado global incluye:

1. **Caso registrado:** El identificador del caso, los faltantes detectados, la solicitud emitida, las respuestas recibidas y los re-chequeos realizados quedan asentados en `Herramienta_RegistroAuditoria` con marca de tiempo.
2. **Estado devuelto a R1:** Uno de los cuatro estados (`resuelto`, `vencido`, `rechazado`, `no viable`) notificado a AutoPost con el identificador del caso.
3. **Registro de auditoría:** Un registro estructurado que documenta la trazabilidad del caso: qué se solicitó, bajo qué faltantes, cuándo se respondió, qué se autorizó y cuál fue el desenlace. Criterio de privacidad: el registro incluye los metadatos del consentimiento (tipo de autorización otorgada, fecha, vacante), no los datos personales transmitidos (que son responsabilidad del despacho en R1). (I11; acordado entre coordinadores, pendiente de ratificación y DEC; ver `propuesta-r1.md`, sección 4, «Procesamiento posterior a la solicitud».)
4. **Aviso a la persona:** La persona recibe una notificación del resultado: qué se resolvió, si el caso sigue abierto o si se cerró y por qué.

---

## 11. Acuerdos con Candelaria Chazarreta (Rol 2 · R1)

La siguiente tabla detalla todos los insumos de diseño utilizados en esta propuesta, quién los planteó, su estado y dónde pueden consultarse en los archivos de R1.

| Insumo | Descripción resumida | Planteado por | Estado | Referencia en archivos de R1 |
|---|---|---|---|---|
| **I1** | «Compatible» equivale a «cumple sus requisitos» (B2=C2); R2 nunca pide datos para una vacante inviable. | Acuerdo entre coordinadores | Acordado entre coordinadores, pendiente de ratificación y DEC | `analisis-r1.md` §6 tercera aclaración; `propuesta-r1.md` §8.1 acuerdo 2 |
| **I2** | R2 no envía ni solicita el envío; la decisión es siempre de R1, que reevalúa C1–C6. | Candelaria Chazarreta | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5, «Procesamiento del retorno en R1» |
| **I3** | Reintentos con mismo identificador; tope contado en R1; escalado a «el equipo de ClickJr» vía R1; R2 no ve el tope. | Marcos Aquino (tope en R1 e identificador abierto al derivar); Candelaria Chazarreta (intervención humana en el tope) | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Tope de derivaciones»; §8.1 acuerdos 8 y 9 |
| **I4** | Si al reevaluar R1 falla C1, C2 o C6, R1 lo trata por su camino propio y no vuelve a R2. | Acuerdo entre coordinadores | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Tratamiento de fallas en viabilidad básica» |
| **I5** | Paquete R1→R2: identificador del caso, persona, vacante, detalle de faltantes y constancia de viabilidad. | Acuerdo entre coordinadores | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Paquete de transferencia R1 → R2» |
| **I6** | Retorno R2→R1: identificador + un estado entre `resuelto`, `vencido`, `rechazado`, `no viable` (con motivo). R1 actúa según el estado. | Candelaria Chazarreta (cuarto estado `no viable`) | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Estados de retorno (R2 → R1)» |
| **I7** | Re-chequeo de B1/B2/B3 al recibir el caso (figura en R1); re-chequeo al reanudar (agregado de R2). Dos verificaciones con propósitos distintos. | Re-chequeo inicial: acuerdo. Re-chequeo al reanudar: Marcos Aquino | Inicial: acordado entre coordinadores, pendiente de ratificación y DEC. Reanudar: solo en R2, pendiente de confirmar con Candelaria Chazarreta. | Re-chequeo inicial: `propuesta-r1.md` §5 «Comprobación previa en R2» |
| **I8** | Vencimiento: plazo ilustrativo (7 días); `vencido` solo por plazo sin respuesta; recordatorio previo (agregado de R2); vacante cerrada → `no viable` B1, no `vencido`. | Plazo y `vencido`: acuerdo. Recordatorio previo: Marcos Aquino. Vacante cerrada → `no viable`: acuerdo (ver acuerdo 6 de R1). | Plazo y `vencido`: acordado entre coordinadores, pendiente de ratificación y DEC. Recordatorio: solo en R2, pendiente de confirmar con Candelaria. | `propuesta-r1.md` §5 «Tope de derivaciones»; §8.1 acuerdo 6 |
| **I9** | C6 solo cuenta envíos efectivos; candado por caso abierto único; liberación en estado final; no bloquea reevaluación del propio caso. | Marcos Aquino (identificador abierto al derivar y liberación del candado); Candelaria Chazarreta (ajustes del candado) | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Caso abierto único, identificador y prevención de duplicados»; §8.1 acuerdos 6 y 7 |
| **I10** | Despacho directo con datos mínimos en R1; lo que excede la autorización genera F1 y se deriva a R2; sin confirmación separada en R1. C4 leída como «autorización que cubre los datos que pide la vacante». | Candelaria Chazarreta (redacción de C4 y política de confirmación) | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §4 «Cómo se evalúa C4 antes de solicitar el envío»; §8.1 acuerdo 3 |
| **I11** | Envío de datos mínimos; lo que excede la autorización se pide como autorización específica; registro visible. | Acuerdo entre coordinadores | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §4 «Procesamiento posterior a la solicitud» |
| **I12** | Denominaciones AutoPost (R1) y PostuAyuda (R2) bajo el subtítulo común «Solución agéntica — bloque Postulación y permisos». | Acuerdo entre coordinadores | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §1 «Título y Beneficio» |
| **I13** | Tras `vencido`, `rechazado` o `escalado`: sin reapertura automática, salvo pedido expreso. No aplica a `no viable`. R2 no reabre: solo devuelve estado. | Candelaria Chazarreta (planteó); Marcos Aquino (aceptó) | Acordado entre coordinadores, pendiente de ratificación y DEC | `propuesta-r1.md` §5 «Política de no reapertura automática acordada»; §8.1 acuerdo 10 |

---

## 12. Puntos Aún Abiertos

Los siguientes puntos permanecen abiertos al momento de elaborar esta propuesta:

1. **Registro formal como DEC:** Los acuerdos entre coordinadores marcados en la sección 11 requieren aprobación humana explícita de ambos coordinadores y del equipo para poder registrarse formalmente como decisiones (DEC) en `docs/decisiones.md`. Ninguno de ellos puede considerarse decisión aprobada en el estado actual.
2. **Ratificación por Federico Acosta Maneiro y Victoria Mariani:** La totalidad de los insumos acordados entre coordinadores está pendiente de ratificación por el resto del equipo mediante comentarios en los Pull Requests correspondientes.
3. **Confirmación con Candelaria Chazarreta de los insumos «solo en R2»:** Los tres insumos marcados como propuesta de Marcos Aquino y pendientes de confirmar con Candelaria Chazarreta son: re-chequeo al reanudar (I7), recordatorio previo al vencimiento (I8) y la nota sobre vacante cerrada durante la espera como `no viable` B1 en lugar de `vencido` (I8, que sí figura en R1 pero su aplicación específica en el flujo de R2 es propuesta de Marcos).
4. **Formato técnico de los diagramas y componente compartido:** A acordar con Victoria Mariani (Rol 4). El esquema de datos de los diagramas debe admitir entradas múltiples, flechas que vuelven hacia atrás (retornos a pasos anteriores), conectores entre los diagramas de R1 y R2, y múltiples estados finales. Quién construye el componente compartido y bajo qué flujo de integración queda por acordar con Victoria.
5. **Valores ilustrativos de plataforma:** El plazo máximo de espera de R2 (7 días) y el máximo de derivaciones (3) son valores ilustrativos que la plataforma deberá fijar. Su valor definitivo requiere una decisión de configuración independiente de las sentencias.

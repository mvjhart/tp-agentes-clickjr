Documento de análisis lógico y formal correspondiente a la sentencia R1 asignada al Rol 2 (Candelaria Chazarreta) en el marco del bloque «Postulación y permisos» de la startup ClickJr.

> **Estado de los acuerdos:** Los supuestos de diseño incluidos en las secciones 7 y 8 fueron confirmados por los coordinadores de R1 y R2 (Candelaria Chazarreta y Marcos Aquino). Su ratificación por Federico Acosta Maneiro y Victoria Mariani continúa pendiente mediante comentarios en el Pull Request. La definición técnica del esquema de diagramas también debe coordinarse con Victoria, responsable de la integración.

---

## 1. Resumen Estructurado de la Ficha

- **Sentencia original:** «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»
- **Datos necesarios:** Estado de la vacante, requisitos de la vacante, datos de la persona postulante (*[Interpretación del análisis]:* entendidos como datos del perfil), autorización para postular automáticamente (*[Interpretación del análisis]:* se entiende que cubre los datos que pide la vacante), preguntas obligatorias y sus respuestas, e historial de postulaciones previas para esa vacante (*[Interpretación del análisis]:* cuenta postulaciones efectivamente enviadas).
- **Condición:** Conjunción lógica de seis condiciones simples simultáneas ($C_1 \land C_2 \land C_3 \land C_4 \land C_5 \land C_6$).
- **Consecuencia:** El sistema solicita el envío de la postulación.

---

## 2. Sentencia Original

> «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»

*Nota de verificación:* La redacción transcripta coincide de manera exacta, carácter por carácter y signo por signo, con el texto oficial consignado en `docs/consigna.md` (sección 2, «Sentencias Lógicas Originales Asignadas»).

---

## 3. Estructura Lógica General

La sentencia responde a una estructura condicional clásica de implicación material:

$$\text{Si } (C_1 \land C_2 \land C_3 \land C_4 \land C_5 \land C_6) \implies \text{Consecuencia}$$

El antecedente está compuesto por una conjunción lógica estricta de seis condiciones simples unidas mediante comas y el conector copulativo final «y». En consecuencia, para que la condición general se considere satisfecha y se desencadene la consecuencia, deben cumplirse simultáneamente todas y cada una de las seis condiciones particulares. La falsedad de cualquiera de ellas hace falsa la condición global.

---

## 4. Desglose de Condiciones y Datos Necesarios

A continuación se detalla cada una de las condiciones elementales que componen el antecedente, su formulación textual y los datos de entrada requeridos estrictamente para su evaluación:

| Identificador | Condición textual | Formulación | Datos necesarios |
|---|---|---|---|
| **C1** | «una vacante está activa» | Afirmativa | Estado de la vacante. |
| **C2** | «el perfil cumple sus requisitos» | Afirmativa | Requisitos publicados de la vacante y datos del perfil de la persona postulante. |
| **C3** | «los datos están completos» | Afirmativa | Estado de completitud de los datos. *[Interpretación del análisis]:* Se infiere que refiere a los datos del perfil de la persona postulante necesarios para postular, dado que la sentencia no precisa a qué entidad pertenecen «los datos». |
| **C4** | «existe autorización para postular automáticamente» | Afirmativa | Permiso o autorización de la persona para postular automáticamente. *[Interpretación del análisis]:* Se entiende que la autorización debe cubrir los datos específicos solicitados por la vacante. |
| **C5** | «no hay preguntas obligatorias pendientes» | Negativa | Preguntas obligatorias de la vacante y respuestas de la persona postulante. |
| **C6** | «no existe una postulación previa a esa vacante» | Negativa | Historial de postulaciones de la persona postulante vinculado a esa vacante. *[Interpretación del análisis]:* Computa exclusivamente postulaciones que hayan sido efectivamente enviadas; una postulación retenida o en trámite no constituye postulación previa. |

### Consideraciones sobre las condiciones negativas (C5 y C6)

Las condiciones C5 y C6 están formuladas expresamente en modo negativo y dicha formulación se mantiene en el análisis:
- En **C5**, lo que se evalúa es la ausencia de preguntas obligatorias sin responder. *[Interpretación del análisis]:* En caso de que una vacante no posea preguntas obligatorias configuradas, no existen pendientes y la condición se satisface por vacuidad.
- En **C6**, lo que se evalúa es la ausencia de un registro previo de postulación efectivamente enviada de esa persona hacia esa vacante en particular.

---

## 5. Consecuencia Establecida

- **Texto exacto:** «el sistema solicita el envío de la postulación»
- **Sujeto de la acción:** El sistema.
- **Acción establecida:** «solicita el envío».

**Alcance según la sentencia:** La regla lógica concluye con la emisión o formulación de la solicitud de envío de la postulación por parte del sistema. La sentencia no establece la ejecución material del envío en sí mismo ni define los canales o mecanismos posteriores para llevarlo a cabo.

*[Supuesto de diseño del grupo]:* Cómo se efectiviza, procesa o confirma dicha solicitud a partir de su emisión es una definición de diseño que corresponde a la propuesta de solución (T5, `docs/propuesta-r1.md`).

---

## 6. Aclaraciones de Lectura y Alcance

Para garantizar una interpretación rigurosa y evitar desviaciones respecto del texto normativo, se explicitan tres aclaraciones fundamentales:

### Primera aclaración: Distinción entre «solicita el envío» y «envía»
La sentencia establece textualmente que el sistema «solicita el envío de la postulación» y no que «envía la postulación». La acción formal con la que concluye la regla lógica es la emisión de la solicitud de envío. Todo lo que ocurra a partir de dicha solicitud constituye un **supuesto de diseño del grupo** a definir en la propuesta (T5).

### Segunda aclaración: Condicional simple frente a bicondicional («si... entonces»)
La regla lógica está formulada estrictamente como un condicional simple («Si [condiciones], [consecuencia]») y en ningún caso como una equivalencia o bicondicional («si y solo si»). En lógica proposicional, una implicación no determina qué ocurre cuando el antecedente es falso: que no se cumpla alguna de las seis condiciones no implica necesariamente la negación de la consecuencia ni define qué acción deba ejecutarse. Cualquier comportamiento, notificación, registro o flujo alternativo ante el incumplimiento de una o más condiciones constituye un **supuesto de diseño del grupo** y no una regla establecida por la consigna.

### Tercera aclaración: Relación, equivalencia semántica y delimitación respecto de R2
La sentencia R2 (a cargo de Marcos Aquino / Rol 3) contempla el escenario donde la vacante está activa y es compatible, no hay postulación previa y se detecta la falta de autorización, información o una respuesta obligatoria. Este escenario se superpone conceptualmente con los fallos de las condiciones C3, C4 y C5 de R1.

*[Supuesto de diseño del grupo - Compatibilidad]:* Ninguna de las dos sentencias define el término «compatible». Se asume como supuesto de diseño (identificado como tal según `REQ-LAN-05`) que «es compatible» en R2 se evalúa contra los requisitos publicados de la vacante y equivale a «cumple sus requisitos» (C2 de R1). El resultado de esa evaluación es sí o no.

Como consecuencia de esta equivalencia, cuando C1, C2 y C6 son verdaderas, las sentencias R1 y R2 se reparten los casos sin superponerse:
- Si además se cumplen C3, C4 y C5, opera R1 («solicita el envío de la postulación»).
- Si falta autorización (C4), información (C3) o una respuesta obligatoria (C5), opera R2 («solicita lo pendiente y no envía la postulación»). De este modo, R2 nunca le solicita información ni permisos a la persona para una vacante a la que no puede aplicar por requisitos.

Ninguna de las dos sentencias establece qué debe hacer el sistema cuando falla C1 (vacante inactiva), C2 (el perfil no cumple los requisitos) o C6 (existe una postulación previa), porque ambas solo indican qué ocurre cuando esas condiciones se cumplen. Por lo tanto, estos tres casos necesitan un tratamiento propio de R1 y no deben derivarse a R2:

| Condición que falla | Tratamiento de diseño propuesto para R1 | Registro y cierre |
|---|---|---|
| **C1**: la vacante no está activa | No se solicita el envío ni se deriva a R2. Se informa que la vacante dejó de recibir postulaciones. | Se registra `no viable`, con motivo `C1`, y se cierra la evaluación. |
| **C2**: el perfil no cumple los requisitos | Si el incumplimiento está determinado, no se solicita el envío ni se deriva a R2. Se explican los requisitos que no se cumplen. Si el cotejo es ambiguo, se solicita primero una validación humana y no se trata la duda como incumplimiento confirmado. | Ante un resultado humano `no cumple`, se registra `no viable`, con motivo `C2`; ante `cumple`, R1 continúa la evaluación. |
| **C6**: existe una postulación previa enviada | No se solicita otro envío ni se deriva a R2. Se informa la existencia de la postulación anterior y, cuando estén disponibles, su fecha y estado. | Se registra `no viable`, con motivo `C6`, y se cierra la evaluación. |

*[Supuesto de diseño del grupo]:* Si fallan varias condiciones de viabilidad al mismo tiempo, R1 registra todas las condiciones incumplidas y utiliza el orden C1 → C6 → C2 para seleccionar el motivo principal que comunica. La evaluación se cierra como `no viable` y no se deriva a R2. El desarrollo de estos tratamientos se encuentra en `docs/propuesta-r1.md`, sección 5.

---

## 7. Acuerdos de Coordinación con Marcos Aquino (Rol 3 · R2)

Los siguientes puntos constituyen supuestos de diseño del grupo confirmados por los coordinadores de R1 y R2 (Candelaria Chazarreta y Marcos Aquino). Su ratificación por el resto del equipo continúa pendiente. Las definiciones técnicas de integración gráfica que requieren la intervención de Victoria se mantienen abiertas en la sección 8.

### Tabla de equivalencias y notación compartida
Para articular formalmente el intercambio entre ambas soluciones, se adopta la siguiente correspondencia de notación:

| Elemento R1 | Enunciado en R1 | Elemento R2 | Enunciado en R2 | Relación conceptual |
|---|---|---|---|---|
| **C1** | «una vacante está activa» | **B1** | «la vacante está activa» | Condición base compartida |
| **C2** | «el perfil cumple sus requisitos» | **B2** | «es compatible» | Condición base compartida (equivalencia acordada) |
| **C6** | «no existe una postulación previa a esa vacante» | **B3** | «no existe una postulación previa» | Condición base compartida |
| **C4** | «existe autorización para postular automáticamente» | **F1** | «falta autorización» | Condición R1 vs. falta R2 (negación de C4) |
| **C3** | «los datos están completos» | **F2** | «falta información» | Condición R1 vs. falta R2 (negación de C3) |
| **C5** | «no hay preguntas obligatorias pendientes» | **F3** | «falta una respuesta obligatoria» | Condición R1 vs. falta R2 (negación de C5) |

### Acuerdos sustantivos de integración
1. **Compatibilidad:** «Es compatible» (B2) equivale a «cumple sus requisitos» (C2) y se evalúa contra los requisitos publicados de la vacante. El resultado que utiliza el circuito es binario: cumple o no cumple. Si el texto de un requisito es ambiguo y no permite decidirlo con suficiente seguridad, se solicita una validación humana antes de asignar el resultado definitivo a C2.
2. **Alcance de la autorización y privacidad:** Se entiende que la autorización (C4) debe cubrir específicamente los datos requeridos por la vacante. Si la vacante solicita datos que exceden dicha autorización, se considera que falta autorización (F1) y se deriva a R2 para requerir el consentimiento puntual.
3. **Cómputo estricto de postulación previa:** C6 cuenta únicamente postulaciones efectivamente enviadas al empleador. Una postulación retenida en R2 o cuyo envío fue solicitado pero aún no se despachó no constituye una postulación previa a los efectos de C6.
4. **Derivación y circuito de retorno:** R1 deriva a R2 ante fallas en C3, C4 o C5 siempre que C1, C2 y C6 se cumplan. Cuando la persona resuelve lo pendiente, R2 devuelve el identificador del caso, qué se resolvió y uno de cuatro estados: `resuelto`, `vencido`, `rechazado` o `no viable`. La decisión de solicitar el envío es siempre de R1.
5. **Tratamiento de `no viable`:** R2 devuelve ese estado cuando, al verificar nuevamente las condiciones base B1, B2 o B3, detecta que alguna dejó de cumplirse. Debe indicar cuál falló. R1 registra el motivo y aplica su tratamiento propio para C1, C2 o C6, sin volver a derivar ese caso a R2.
6. **Distinción entre `vencido` y `no viable`:** `vencido` se reserva para el vencimiento del plazo de espera sin respuesta de la persona. El cierre o la pérdida de vigencia de una condición base no se clasifica como vencimiento: se devuelve `no viable` con el motivo correspondiente. Antes de cerrar por vencimiento, R2 vuelve a comprobar B1, B2 y B3; si alguna falla, prevalece `no viable`.
7. **Caso abierto único e identificador:** Existe un único caso abierto por combinación de persona y vacante. R1 genera el identificador antes de derivar a R2 y lo incluye en el paquete de transferencia; R2 lo conserva y lo devuelve, sin generar uno nuevo. El identificador también se genera al enviar un caso a validación humana de C2 y, en el camino directo, al emitir la solicitud de envío. Se conserva durante los reintentos y permite reanudar el mismo caso sin bloquear su propia reevaluación.
8. **Candado y estados finales:** El candado bloquea nuevas evaluaciones paralelas mientras el caso está en validación humana, derivado o retenido en R2, o solicitado y aún no despachado. Se libera al alcanzar un estado final: `enviado`, `vencido`, `rechazado`, `no viable`, `escalado` o `cancelado`.
9. **Tope de derivaciones:** R1 lleva el contador del mismo caso y lo incrementa al realizar cada derivación a R2. El máximo ilustrativo de tres derivaciones incluye la primera. Si el contador ya alcanzó el máximo y el caso vuelve a requerir una derivación, R1 no lo envía nuevamente a R2: informa a la persona y lo escala a revisión humana de «el equipo de ClickJr», actor supuesto por el grupo.
10. **Validación humana de C2:** Cuando el cotejo de requisitos sea ambiguo, R1 abre el caso al enviarlo a validación humana. «El equipo de ClickJr» determina `cumple` o `no cumple`. Si el resultado es `cumple`, R1 retoma el mismo caso y reevalúa C1 a C6; si es `no cumple`, aplica el camino propio de C2 y cierra como `no viable`. Mientras la validación esté pendiente, no se solicita el envío ni se deriva a R2.
11. **No reapertura automática:** Después de un cierre `vencido`, `rechazado` o `escalado`, no se inicia automáticamente otra evaluación para la misma persona y vacante, salvo solicitud expresa de la persona. Esta restricción se aplica únicamente a esos tres estados y no incluye `no viable`.
12. **Verificaciones previas al envío:** Se vuelven a verificar C1 y C4 antes de emitir la solicitud, al retornar de R2 con estado `resuelto` y antes de transmitir los datos al empleador.
13. **Representación gráfica coordinada:** Los diagramas de R1 y R2 compartirán un esquema capaz de representar varias entradas, retornos hacia pasos anteriores, conectores entre diagramas, múltiples estados finales y marcadores para pasos agénticos, intervención humana, supuestos del grupo y elementos establecidos por las sentencias. Los marcadores tendrán forma o ícono y etiqueta, no dependerán solo del color, y contarán con una alternativa textual. Los requisitos funcionales fueron conversados entre los coordinadores; el formato técnico y la integración se terminan de acordar con Victoria Mariani.

---

## 8. Puntos aún Abiertos

1. **Formato técnico y esquema implementable de los diagramas:** Definición conjunta con Victoria Mariani (Rol 4) del modelo de datos y del formato de implementación en React (por ejemplo, SVG o estructuras HTML/CSS), respetando los requisitos funcionales enumerados en el punto 13 de la sección 7. También debe acordarse el flujo de revisión e integración mediante un Pull Request.
2. **Parámetros ilustrativos de plataforma:** El máximo de tres derivaciones y el plazo de siete días para la espera de respuesta en R2 son valores ilustrativos, no establecidos por las sentencias. Su valor definitivo corresponde a una decisión de configuración de la plataforma. El plazo de espera de R2 no se aplica automáticamente a la validación humana de C2, cuyo plazo deberá definirse si la plataforma necesita limitar esa espera.
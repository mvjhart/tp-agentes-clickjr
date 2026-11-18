# Ficha de Análisis Lógico: Sentencia R1 (ClickJr)

Documento de análisis lógico y formal correspondiente a la sentencia R1 asignada al Rol 2 (Candelaria Chazarreta) en el marco del bloque «Postulación y permisos» de la startup ClickJr.

---

## 1. Resumen Estructurado de la Ficha

- **Sentencia original:** «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»
- **Datos necesarios:** Estado de la vacante, requisitos de la vacante, datos de la persona postulante (*[Interpretación del análisis]:* entendidos como datos del perfil), autorización para postular automáticamente, preguntas obligatorias y sus respuestas, e historial de postulaciones previas para esa vacante.
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
| **C2** | «el perfil cumple sus requisitos» | Afirmativa | Requisitos de la vacante y datos del perfil de la persona postulante. |
| **C3** | «los datos están completos» | Afirmativa | Estado de completitud de los datos. *[Interpretación del análisis]:* Se infiere que refiere a los datos del perfil de la persona postulante necesarios para postular, dado que la sentencia no precisa a qué entidad pertenecen «los datos». |
| **C4** | «existe autorización para postular automáticamente» | Afirmativa | Permiso o autorización de la persona para postular automáticamente. |
| **C5** | «no hay preguntas obligatorias pendientes» | Negativa | Preguntas obligatorias de la vacante y respuestas de la persona postulante. |
| **C6** | «no existe una postulación previa a esa vacante» | Negativa | Historial de postulaciones de la persona postulante vinculado a esa vacante. |

### Consideraciones sobre las condiciones negativas (C5 y C6)

Las condiciones C5 y C6 están formuladas expresamente en modo negativo y dicha formulación se mantiene en el análisis:
- En **C5**, lo que se evalúa es la ausencia de preguntas obligatorias sin responder. *[Interpretación del análisis]:* En caso de que una vacante no posea preguntas obligatorias configuradas, no existen pendientes y la condición se satisface por vacuidad.
- En **C6**, lo que se evalúa es la ausencia de un registro previo de postulación de esa persona hacia esa vacante en particular.

---

## 5. Consecuencia Establecida

- **Texto exacto:** «el sistema solicita el envío de la postulación»
- **Sujeto de la acción:** El sistema.
- **Acción establecida:** «solicita el envío».

**Alcance según la sentencia:** La regla lógica concluye con la emisión o formulación de la solicitud de envío de la postulación por parte del sistema. La sentencia no establece la ejecución material del envío en sí mismo ni define los canales o mecanismos posteriores para llevarlo a cabo.

*[Supuesto de diseño del grupo]:* Cómo se efectiviza, procesa o confirma dicha solicitud a partir de su emisión es una definición de diseño abierta que corresponde a la propuesta de solución (T5).

---

## 6. Aclaraciones de Lectura y Alcance

Para garantizar una interpretación rigurosa y evitar desviaciones respecto del texto normativo, se explicitan tres aclaraciones fundamentales:

### Primera aclaración: Distinción entre «solicita el envío» y «envía»
La sentencia establece textualmente que el sistema «solicita el envío de la postulación» y no que «envía la postulación». La acción formal con la que concluye la regla lógica es la emisión de la solicitud de envío. Todo lo que ocurra a partir de dicha solicitud —incluyendo si el envío es directo o si se contemplan pasos intermedios, confirmaciones o controles de privacidad previos a la transmisión definitiva de datos personales— no está fijado por la regla y constituye un **supuesto de diseño del grupo** a definir con alternativas en la propuesta (T5).

### Segunda aclaración: Condicional simple frente a bicondicional («si... entonces»)
La regla lógica está formulada estrictamente como un condicional simple («Si [condiciones], [consecuencia]») y en ningún caso como una equivalencia o bicondicional («si y solo si»). En lógica proposicional, una implicación no determina qué ocurre cuando el antecedente es falso: que no se cumpla alguna de las seis condiciones no implica necesariamente la negación de la consecuencia ni define qué acción deba ejecutarse. Cualquier comportamiento, notificación, registro o flujo alternativo ante el incumplimiento de una o más condiciones constituye un **supuesto de diseño del grupo** y no una regla establecida por la consigna.

### Tercera aclaración: Relación y delimitación respecto de la sentencia R2
La sentencia R2 (a cargo de Marcos Aquino / Rol 3) contempla el escenario donde la vacante está activa y es compatible, no hay postulación previa y se detecta la falta de autorización, información o una respuesta obligatoria. Este escenario se superpone conceptualmente con los fallos de las condiciones C3, C4 y C5 de R1.

Por exclusión, los casos que quedarían fuera del alcance de R2 corresponderían a:
1. Vacante inactiva (falla de C1).
2. Perfil que no cumple los requisitos (falla de C2).
3. Existencia de una postulación previa (falla de C6).

No obstante, esta delimitación depende de cómo se interprete la compatibilidad en R2 frente a los requisitos en R1, aspecto que no debe asumirse de forma unilateral.

---

## 7. Puntos a Coordinar con Marcos Aquino (Rol 3 · R2)

Con el fin de mantener la coherencia técnica entre ambas propuestas sin invadir las responsabilidades del Rol 3, se dejan registrados los siguientes puntos de coordinación pendientes de acuerdo:

1. **Equivalencia semántica entre «cumple sus requisitos» (R1) y «es compatible» (R2):**
   Debe consensuarse si la expresión «es compatible» empleada en R2 se considerará un sinónimo estricto del cumplimiento de requisitos de R1 (evaluación booleana de requisitos excluyentes) o si responde a un cálculo de afinidad o porcentaje de coincidencia algorítmica.
2. **Tratamiento unificado de la falta de autorización, datos o respuestas:**
   Dado que cuando falla C3, C4 o C5 en una vacante activa y compatible el flujo ingresa en el dominio funcional de R2 (solicitar lo pendiente y no enviar la postulación), debe coordinarse si el agente de R1 delega o deriva la interacción hacia el agente/módulo de R2, o si ambos conviven como fases o modos de un mismo subsistema de postulación de ClickJr.
3. **Manejo de estados compartidos:**
   Alinear cómo se representan los estados intermedios de una postulación retenida (mientras R2 solicita lo pendiente) para evitar que R1 intente procesarla concurrentemente o la considere una postulación previa en curso (C6).

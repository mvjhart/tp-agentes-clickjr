# Ficha de Análisis Lógico: Sentencia R1 (ClickJr)

Documento de análisis lógico y formal correspondiente a la sentencia R1 asignada al Rol 2 (Candelaria Chazarreta) en el marco del bloque «Postulación y permisos» de la startup ClickJr.

---

## 1. Sentencia Original

> «Si una vacante está activa, el perfil cumple sus requisitos, los datos están completos, existe autorización para postular automáticamente, no hay preguntas obligatorias pendientes y no existe una postulación previa a esa vacante, el sistema solicita el envío de la postulación.»

*Nota de verificación:* La redacción transcripta coincide de manera exacta, carácter por carácter y signo por signo, con el texto oficial consignado en `docs/consigna.md` (sección 2.2).

---

## 2. Estructura Lógica General

La sentencia responde a una estructura condicional clásica de implicación material:

$$\text{Si } (C_1 \land C_2 \land C_3 \land C_4 \land C_5 \land C_6) \implies \text{Consecuencia}$$

El antecedente está compuesto por una conjunción lógica estricta de seis condiciones simples unidas mediante comas y el conector copulativo final «y». En consecuencia, para que la condición general se considere satisfecha y se desencadene la consecuencia, deben cumplirse simultáneamente todas y cada una de las seis condiciones particulares. La falsedad de cualquiera de ellas hace falsa la condición global.

---

## 3. Desglose de Condiciones y Datos Necesarios

A continuación se detalla cada una de las condiciones elementales que componen el antecedente, los datos de entrada requeridos para su evaluación y la naturaleza de su formulación:

| Identificador | Condición textual | Formulación | Datos necesarios | Fuente o entidad de origen |
|---|---|---|---|---|
| **C1** | «una vacante está activa» | Afirmativa | Estado operativo de la vacante (`activa`, `pausada`, `cerrada`). | Catálogo / Sistema de vacantes |
| **C2** | «el perfil cumple sus requisitos» | Afirmativa | Requisitos exigidos por la vacante (habilidades, experiencia, formación) y datos estructurados del perfil de la persona postulante. | Vacante y Perfil del postulante |
| **C3** | «los datos están completos» | Afirmativa | Estado de completitud de los campos obligatorios del perfil requeridos para formalizar una postulación. | Perfil del postulante |
| **C4** | «existe autorización para postular automáticamente» | Afirmativa | Indicador o registro vigente del consentimiento explícito otorgado por la persona para postulaciones automáticas. | Registro de permisos y preferencias de la persona |
| **C5** | «no hay preguntas obligatorias pendientes» | Negativa | Formulario de preguntas obligatorias definido por la vacante y respuestas efectivamente provistas por la persona postulante. | Configuración de la vacante y respuestas de la postulación |
| **C6** | «no existe una postulación previa a esa vacante» | Negativa | Historial de postulaciones registradas de la persona postulante filtrado por el identificador de la vacante en evaluación. | Registro histórico de postulaciones |

### Consideraciones sobre las condiciones negativas (C5 y C6)

Las condiciones C5 y C6 están formuladas explícitamente en modo negativo y dicha formulación debe preservarse en el análisis formal:
- En **C5**, lo que se evalúa es la ausencia de preguntas obligatorias sin responder. En caso de que la vacante no contenga preguntas obligatorias configuradas, la condición se considera satisfecha por vacuidad (no existen pendientes).
- En **C6**, lo que se evalúa es la ausencia de un registro anterior que vincule a esa misma persona con esa misma vacante, evitando duplicaciones involuntarias de postulaciones.

---

## 4. Consecuencia Establecida

- **Texto exacto:** «el sistema solicita el envío de la postulación»
- **Sujeto de la acción:** El sistema.
- **Acción establecida:** «solicita el envío».

La consecuencia de la regla lógica no es el despacho físico o la entrega final del mensaje al empleador, sino la emisión formal por parte del sistema del requerimiento o evento de despacho de la postulación hacia el subsistema o canal encargado de procesarlo.

---

## 5. Aclaraciones de Lectura y Alcance

Para garantizar una interpretación rigurosa y evitar desviaciones de diseño respecto del texto normativo, se explicitan tres aclaraciones fundamentales:

### Primera aclaración: Naturaleza de la acción final («solicita el envío» frente a «envía»)
La consecuencia establecida por la sentencia es «solicita el envío de la postulación», no «envía la postulación». La acción que concluye la regla lógica es la generación y emisión de la solicitud de envío. No corresponde incorporar una confirmación humana interactiva previa al envío en el camino principal o exitoso, dado que la condición C4 ya exige formalmente que la persona haya concedido de forma previa su autorización explícita para postular de manera automática. Incorporar una nueva confirmación humana desvirtuaría el propósito de automatización consentida en C4.

### Segunda aclaración: Condicional simple frente a bicondicional («si... entonces»)
La regla lógica está formulada estrictamente como un condicional simple («Si [condiciones], [consecuencia]») y en ningún caso como una equivalencia o bicondicional («si y solo si»). En lógica proposicional, una implicación no determina qué ocurre cuando el antecedente es falso: que no se cumpla alguna de las seis condiciones no implica necesariamente la negación de la consecuencia ni define qué acción alternativa deba ejecutarse. Todo comportamiento, notificación, registro o flujo alternativo que se diseñe ante el incumplimiento de una o más condiciones constituye un **supuesto de diseño del equipo** y no una regla establecida por la consigna.

### Tercera aclaración: Relación y delimitación respecto de la sentencia R2
La sentencia R2 (a cargo de Marcos Aquino / Rol 3) contempla el escenario donde la vacante está activa y es compatible, no hay postulación previa y se detecta la falta de autorización, información o una respuesta obligatoria. Este escenario se superpone conceptualmente con los fallos de las condiciones C3, C4 y C5 de R1.

Por exclusión, los casos que quedarían fuera del alcance de R2 corresponderían a:
1. Vacante inactiva (falla de C1).
2. Perfil que no cumple los requisitos (falla de C2).
3. Existencia de una postulación previa (falla de C6).

No obstante, esta distinción depende críticamente de cómo se interprete la compatibilidad en R2 frente a los requisitos en R1, aspecto que no debe asumirse de forma unilateral.

---

## 6. Puntos a Coordinar con Marcos Aquino (Rol 3 · R2)

Con el fin de mantener la coherencia técnica entre ambas propuestas sin invadir las responsabilidades del Rol 3, se dejan registrados los siguientes puntos de coordinación pendientes de acuerdo:

1. **Equivalencia semántica entre «cumple sus requisitos» (R1) y «es compatible» (R2):**
   Debe consensuarse si la expresión «es compatible» empleada en R2 se considerará un sinónimo estricto del cumplimiento de requisitos de R1 (evaluación booleana de requisitos excluyentes) o si responde a un cálculo de afinidad o porcentaje de coincidencia algorítmica.
2. **Tratamiento unificado de la falta de autorización, datos o respuestas:**
   Dado que cuando falla C3, C4 o C5 en una vacante activa y compatible el flujo ingresa en el dominio funcional de R2 (solicitar lo pendiente y no enviar la postulación), debe coordinarse si el agente de R1 delega o deriva la interacción hacia el agente/módulo de R2, o si ambos conviven como fases o modos de un mismo subsistema de postulación de ClickJr.
3. **Manejo de estados compartidos:**
   Alinear cómo se representan los estados intermedios de una postulación retenida (mientras R2 solicita lo pendiente) para evitar que R1 intente procesarla concurrentemente o la considere una postulación previa en curso (C6).

# Propuesta de Solución Agéntica: Sentencia R1 (ClickJr)

Documento conceptual correspondiente a la propuesta de solución agéntica para la sentencia R1, asignada al Rol 2 (Candelaria Chazarreta) en el marco del bloque «Postulación y permisos» de la startup ClickJr.

> **Criterio metodológico y delimitación de alcance:** Este documento describe un diseño estrictamente conceptual y expositivo para un futuro agente. Conforme a las restricciones del proyecto (`REQ-ALC-01`), no implica la implementación de modelos de inteligencia artificial en ejecución, llamadas a APIs externas ni backend operativo. En cada sección se distingue explícitamente lo que proviene de la sentencia normativa de aquello que constituye un supuesto de diseño formulado por el equipo.

> **Estado de los acuerdos:** Los supuestos de diseño incluidos en la sección 8 fueron confirmados por los coordinadores de R1 y R2 (Candelaria Chazarreta y Marcos Aquino). Su ratificación por Federico Acosta Maneiro y Victoria Mariani continúa pendiente mediante comentarios en los Pull Requests correspondientes. La definición técnica del esquema de diagramas también debe coordinarse con Victoria, responsable de la integración. No quedan puntos de diseño de esta propuesta pendientes de confirmación entre los coordinadores de R1 y R2.

---

## 1. Título y Beneficio de la Propuesta

En coordinación con la propuesta de la sentencia R2, se conservan las denominaciones **AutoPost** (R1) y **PostuAyuda** (R2) como dos componentes integrados de un mismo sistema ClickJr bajo el subtítulo general: *«Solución agéntica — bloque Postulación y permisos»*.

### AutoPost: Postulaciones Automáticas con tu Autorización
- **Explicación del beneficio:** AutoPost postula por vos a las vacantes que cumplen tus requisitos, siempre que hayas dado tu autorización. Envía solo los datos mínimos necesarios y deja un registro visible de qué se envió, cuándo y bajo qué autorización. Si una vacante pide algo que excede lo que autorizaste, no envía nada y te lo consulta a través de PostuAyuda.

---

## 2. Rol y Funcionamiento Conceptual del Futuro Agente

El futuro agente de R1 operaría conceptualmente como un asistente de verificación y despacho desatendido dentro de ClickJr. Su función consiste en evaluar oportunidades de empleo y emitir la solicitud de envío cuando se constata el cumplimiento pleno de las condiciones normadas.

En cuanto a su activación, la sentencia R1 no especifica cómo ni en qué momento se dispara la verificación lógica. Como supuesto de diseño del grupo, se plantea que el agente recibiría un evento o solicitud de evaluación individual que vincula a una persona postulante con una vacante específica. Esta evaluación podría desencadenarse ante la publicación de una nueva vacante en el catálogo del portal o mediante un proceso periódico de revisión programado en la plataforma.

*[Supuesto de diseño del grupo]:* En caso de que la plataforma contemple filtrar previamente qué vacantes evaluar a partir de preferencias laborales configuradas por la persona postulante, dicho filtro se concibe exclusivamente como un criterio operativo de activación técnica, sin constituir en ningún caso una condición lógica adicional a la regla R1.

### Qué hace el agente y qué es regla fija

Para delimitar con claridad el alcance de la automatización en ClickJr, se diferencia entre la estructura lógica fija de la sentencia y el trabajo específico del agente:

- **Regla fija:**
  La estructura lógica de la sentencia (las seis condiciones, que deben cumplirse todas a la vez, y su consecuencia) es una regla fija. Cinco de las condiciones se resuelven con lecturas de estado sobre registros existentes, que no requieren interpretar texto:
  1. Estado operativo de la vacante, para determinar si está activa (C1).
  2. Completitud de los datos del perfil necesarios para postular (C3).
  3. Existencia del permiso para postular automáticamente y su alcance respecto de los datos que pide la vacante (C4).
  4. Preguntas obligatorias de la vacante y si fueron respondidas (C5).
  5. Inexistencia de una postulación previa efectivamente enviada a esa vacante (C6).

- **Trabajo del agente [Supuesto de diseño del grupo]:**
  El agente interviene en las tareas que involucran lenguaje natural, razonamiento o explicación, sin que ello añada condiciones a la sentencia R1:
  a) **Interpretación y cotejo de requisitos (C2):** Leer los requisitos publicados en la oferta, que pueden estar redactados en texto libre, y compararlos con la información del perfil de la persona postulante.
  b) **Reverificación en ventanas críticas:** Revisar el estado de la vacante y de la autorización en las ventanas temporales críticas descriptas en la sección 6 y decidir si corresponde abortar el trámite.
  c) **Explicabilidad y registro:** Explicarle a la persona, en lenguaje claro, por qué se solicitó o no el envío de su postulación, y dejar el registro estructurado correspondiente en la bitácora de auditoría.

*[Supuesto de diseño del grupo - Validación humana de requisitos ambiguos, acordado entre R1 y R2]:* Cuando el cotejo de C2 resulte dudoso porque un requisito publicado es ambiguo y no pueda determinarse con suficiente seguridad si el perfil lo cumple, R1 no interpreta la duda como un incumplimiento confirmado ni solicita el envío. Envía el caso a validación de «el equipo de ClickJr» (actor que las sentencias no prevén) y abre el identificador único del caso antes de enviarlo. Mientras la validación esté pendiente, el caso permanece abierto, bloquea evaluaciones paralelas para la misma persona y vacante y no se deriva a R2. El resultado de la validación es binario: `cumple` o `no cumple`. Si cumple, R1 retoma el mismo caso y reevalúa C1 a C6; si no cumple, falla C2 y se aplica el tratamiento de `no viable` descripto en la sección 5. No se solicita ni se transmite información al empleador mientras no exista una determinación afirmativa de C2.

---

## 3. Notación Compartida y Herramientas Conceptuales de Consulta

### Tabla de equivalencias y notación R1 / R2
Para asegurar una articulación formal y coherente entre los módulos de AutoPost (R1) y PostuAyuda (R2), se adopta la siguiente tabla de correspondencias acordada entre ambos roles:

| Elemento R1 | Enunciado en R1 | Elemento R2 | Enunciado en R2 | Relación conceptual |
|---|---|---|---|---|
| **C1** | «una vacante está activa» | **B1** | «la vacante está activa» | Condición base compartida |
| **C2** | «el perfil cumple sus requisitos» | **B2** | «es compatible» | Condición base compartida (equivalencia acordada) |
| **C6** | «no existe una postulación previa a esa vacante» | **B3** | «no existe una postulación previa» | Condición base compartida |
| **C4** | «existe autorización para postular automáticamente» | **F1** | «falta autorización» | Condición R1 vs. Falta R2 (negación de C4) |
| **C3** | «los datos están completos» | **F2** | «falta información» | Condición R1 vs. Falta R2 (negación de C3) |
| **C5** | «no hay preguntas obligatorias pendientes» | **F3** | «falta una respuesta obligatoria» | Condición R1 vs. Falta R2 (negación de C5) |

### Herramientas conceptuales de consulta
Para reunir los datos requeridos por las seis condiciones de la regla lógica sin acoplarse a tecnologías específicas, el agente se diseñaría con la capacidad conceptual de consultar seis servicios o herramientas internas de ClickJr:

| Herramienta conceptual | Información que consulta | Condición evaluada |
|---|---|---|
| **`Herramienta_EstadoVacante`** | Consulta el catálogo central de búsquedas laborales de ClickJr para verificar si la vacante se encuentra abierta para postulaciones. | **C1** |
| **`Herramienta_CotejoRequisitos`** | Contrasta los requisitos publicados de la vacante con la información cargada en el perfil del postulante. | **C2** |
| **`Herramienta_CompletitudPerfil`** | Verifica que todos los campos requeridos para formalizar una postulación en la plataforma se encuentren completos. | **C3** |
| **`Herramienta_RegistroAutorizaciones`** | Consulta el módulo de seguridad y privacidad para verificar si el usuario tiene vigente el permiso para postular de manera automática y si cubre los datos que pide la vacante. | **C4** |
| **`Herramienta_PreguntasVacante`** | Comprueba si la vacante formuló preguntas obligatorias específicas y, de existir, si ya han sido respondidas por la persona. | **C5** |
| **`Herramienta_HistorialPostulaciones`** | Revisa el historial de postulaciones de la persona candidata para constatar si ya existe un envío previo efectivamente realizado para esa misma vacante. | **C6** |

*[Supuesto de diseño del grupo]:* Todas las herramientas mencionadas son abstracciones conceptuales destinadas a ilustrar cómo el agente interactúa con los módulos del sistema; no representan bibliotecas externas ni APIs en ejecución.

---

## 4. Acciones ante el Cumplimiento Pleno (Camino del «SÍ»)

### Acción normada
- `[Establecido por la sentencia R1]`: Cuando las condiciones C1, C2, C3, C4, C5 y C6 se satisfacen de forma simultánea, el sistema ejecuta la consecuencia: **«solicita el envío de la postulación»**.

### Cómo se evalúa C4 antes de solicitar el envío
- `[Supuesto de diseño del grupo - Alcance de la autorización]`: C4 se evalúa antes de emitir la solicitud, y se lee como «autorización que cubre los datos que pide la vacante». Si la vacante exigiera datos que exceden el alcance de la autorización vigente, C4 resulta falsa (falta de autorización, F1): no se solicita el envío y el caso se deriva a PostuAyuda (R2), que pide a la persona el consentimiento puntual. Por eso dentro de AutoPost no existe un paso de confirmación aparte ni un estado «pendiente de confirmación».

### Procesamiento posterior a la solicitud
- `[Supuesto de diseño del grupo - Despacho directo con datos mínimos y registro]`:
  El camino del «SÍ» es directo. Una vez emitida la solicitud de envío:
  1. Antes de transmitir, se verifica otra vez que la vacante siga activa (C1) y que la autorización siga vigente (C4); si alguna cambió, se aplica la regla de corte de la sección 6.
  2. Se transmiten al empleador únicamente los datos mínimos indispensables requeridos para la postulación.
  3. Se asienta un registro visible y accesible en el panel de la persona postulante que documenta qué información se envió, en qué fecha y hora, y bajo qué autorización específica.
  4. No se pide una confirmación adicional a la persona dentro de AutoPost, porque lo que excede la autorización ya se resolvió al evaluar C4.

**Resumen de alternativas descartadas:**
Se descarta exigir una confirmación explícita para todas las postulaciones porque dejaría sin función práctica a la autorización automática (C4). Se descarta no confirmar nunca sin importar los datos solicitados porque dejaría desprotegida la información que exceda la autorización general concedida. Asimismo, se descarta implementar una ventana temporal de cancelación para simplificar el flujo y evitar la introducción de estados transitorios complejos.

---

## 5. Tratamiento ante Incumplimiento de Condiciones (Camino del «NO»)

Dado que la sentencia no establece consecuencias cuando una o más condiciones no se cumplen, todo el camino del «NO» constituye un **supuesto de diseño del grupo**. El objetivo es separar los casos de inviabilidad básica (C1, C2 o C6), que R1 resuelve por su cuenta, de los faltantes que R2 está diseñado para gestionar (C3, C4 o C5).

### Orden de evaluación y precedencia de viabilidad

Ante cada evaluación, R1 aplica el siguiente orden:

1. **Viabilidad básica:** comprueba C1 (vacante activa), C6 (ausencia de postulación previa efectivamente enviada) y C2 (cumplimiento de requisitos). El cotejo de C2 puede dar lugar a validación humana cuando el texto de un requisito sea ambiguo.
2. **Condiciones de preparación de la postulación:** solo si C1, C2 y C6 se cumplen, R1 comprueba C3 (datos completos), C4 (autorización suficiente) y C5 (ausencia de preguntas obligatorias pendientes).

*[Supuesto de diseño del grupo - Precedencia ante fallas simultáneas]:* Si fallan varias condiciones de viabilidad básica, R1 registra todas las fallas detectadas y utiliza el siguiente orden para seleccionar el motivo principal comunicado: C1 → C6 → C2. Esta precedencia organiza el mensaje y el cierre, pero no elimina del registro las demás condiciones incumplidas. En ningún caso se deriva a R2 mientras alguna de C1, C2 o C6 sea falsa.

**Fundamento:** No tiene sentido solicitar datos, permisos o respuestas para una vacante que ya no admite postulaciones, para la que la persona ya postuló o cuyos requisitos no cumple. Por eso R1 resuelve primero la viabilidad básica y reserva la derivación a R2 para los faltantes subsanables de C3, C4 o C5.

### Tratamiento de fallas en viabilidad básica (C1, C2 o C6)

*[Supuesto de diseño del grupo - Camino propio de R1]:* Si C1, C2 o C6 falla de manera confirmada, R1 no solicita el envío, no deriva el caso a R2 y comunica el motivo a la persona. El caso se registra y concluye con estado final `no viable`, acompañado de uno o más motivos (`C1`, `C2` y/o `C6`).

- **Falla en C1 (vacante inactiva):** R1 cancela la evaluación, registra que la vacante está cerrada o dejó de recibir postulaciones e informa a la persona. Si la vacante estaba guardada o seguida por la persona, puede incluirse esa referencia en la notificación. No se solicitan datos, respuestas ni autorizaciones adicionales.
- **Falla en C2 (el perfil no cumple los requisitos):** R1 no solicita el envío ni pide completar información o conceder permisos para esa vacante. Informa qué requisitos publicados no se satisfacen y, cuando resulte útil y la plataforma disponga de esa información, puede sugerir competencias o experiencias que la persona podría incorporar a su perfil. El cierre se registra como `no viable`, motivo `C2`.
- **C2 ambiguo (resultado todavía indeterminado):** La duda no equivale a `no cumple`. R1 envía el caso a validación humana de «el equipo de ClickJr», abre el identificador del caso y mantiene el candado mientras espera. Si el equipo determina `cumple`, R1 reevalúa C1 a C6; si determina `no cumple`, aplica el tratamiento anterior y cierra como `no viable`, motivo `C2`.
- **Falla en C6 (postulación previa existente):** R1 descarta el nuevo intento para evitar duplicar una postulación ya enviada e informa a la persona la fecha y el estado de la aplicación anterior, si esos datos están disponibles. El caso se registra como `no viable`, motivo `C6`.

**Criterio de C6:** A estos efectos solo cuenta como postulación previa aquella cuya transmisión al empleador haya sido efectivamente realizada. Una solicitud de envío todavía no despachada, una postulación retenida en R2 o una validación humana pendiente no satisfacen por sí mismas la existencia de una postulación previa. El estado «solicitado y aún no despachado» queda protegido por el candado de caso abierto único, no por C6.

### Tratamiento de fallas en C3, C4 o C5: derivación coordinada a R2

*[Supuesto de diseño del grupo - Derivación unificada a PostuAyuda]:* Cuando C1, C2 y C6 se cumplen, pero faltan datos (C3 / F2), autorización (C4 / F1) o respuestas obligatorias (C5 / F3), R1 deriva el caso a PostuAyuda (R2). Se pueden transferir varias faltas en una misma derivación.

- **Fundamento:** Con vacante activa, perfil compatible y sin postulación previa, la sentencia R2 contempla que el sistema solicite lo pendiente y no envíe la postulación. La solicitud de información o consentimiento no se utiliza para una vacante inviable.
- **Identificador y apertura:** Antes de transferir el caso, R1 genera el identificador único y abre el registro correspondiente. El identificador se incluye en el paquete enviado a R2. R2 no genera otro identificador: conserva el recibido y lo devuelve en la respuesta. En los reintentos se utiliza el mismo identificador.
- **Paquete de transferencia R1 → R2:** Incluye (a) identificador único del caso, (b) identificadores de la persona y de la vacante, (c) detalle de cada faltante F1, F2 o F3 —incluidos campos incompletos, alcance del consentimiento requerido o preguntas sin responder— y (d) constancia fechada de que C1, C2 y C6 se cumplían al derivar.
- **Comprobación previa en R2:** Antes de solicitar algo a la persona, R2 vuelve a comprobar B1, B2 y B3. Si alguna dejó de cumplirse, devuelve `no viable` e identifica la condición que falló; no solicita lo pendiente.

**Estados de retorno (R2 → R1):** R2 devuelve el identificador del caso, qué se resolvió y uno de estos cuatro estados:

1. `resuelto`: La persona completó las acciones solicitadas en R2. Este estado no ordena el envío ni sustituye la evaluación lógica: R1 debe reevaluar C1 a C6 y puede detectar que todavía queda algún faltante.
2. `vencido`: Se superó el plazo máximo de espera sin respuesta de la persona. Antes de devolver este estado, R2 vuelve a comprobar B1, B2 y B3. Si alguna dejó de cumplirse, devuelve `no viable` en lugar de `vencido`.
3. `rechazado`: La persona rechazó expresamente completar lo solicitado o declinó continuar con la postulación. Puede hacerlo en cualquier momento.
4. `no viable`: Al comprobar las condiciones base, R2 constata que dejó de cumplirse B1 (vacante activa), B2 (requisitos) o B3 (ausencia de postulación previa) y devuelve el motivo concreto.

**Procesamiento del retorno en R1:** R2 solo informa el estado; la decisión de solicitar el envío es siempre de R1.

- Ante `resuelto`: R1 retoma el mismo identificador y reevalúa las seis condiciones C1 a C6. Si todas se cumplen, solicita el envío. Si vuelven a fallar C3, C4 o C5, considera una nueva derivación, sujeta al tope establecido más abajo. Si falla C1, C2 o C6, aplica el camino propio de R1 y cierra como `no viable`.
- Ante `vencido` o `rechazado`: R1 no solicita ni transmite la postulación, registra el resultado, informa a la persona y concluye el caso con el estado correspondiente.
- Ante `no viable`: R1 registra el motivo comunicado por R2, aplica el tratamiento propio correspondiente a C1, C2 o C6 y no vuelve a derivar ese caso.

### Caso abierto único, identificador y prevención de duplicados

*[Supuesto de diseño del grupo - Caso abierto único]:*

- Existe un único caso abierto por combinación `(id_persona, id_vacante)`. Su identificador permite seguir la misma evaluación a través de las derivaciones, las respuestas y las reevaluaciones.
- El candado bloquea evaluaciones automáticas paralelas para la misma persona y vacante mientras el caso esté en validación humana de C2, derivado o retenido en R2, o en estado «solicitado y aún no despachado».
- R1 genera el identificador al enviar un caso a validación humana de C2 o antes de derivarlo a R2. En el camino directo, sin validación ni derivación, lo genera al emitir la solicitud de envío. En las derivaciones, R1 lo incluye en el paquete y R2 lo conserva y lo devuelve.
- El candado no bloquea la reanudación ni la reevaluación del mismo caso, que se reconoce por su identificador.
- El candado se libera cuando el flujo automático alcanza un estado final: `enviado`, `vencido`, `rechazado`, `no viable`, `escalado` o `cancelado`. `Escalado` cierra el circuito automático y deriva la revisión a una instancia humana; no significa que R1 pueda seguir reintentando en paralelo.
- **Política de no reapertura automática acordada:** Después de un caso finalizado como `vencido`, `rechazado` o `escalado`, el sistema no inicia automáticamente otra evaluación para la misma persona y vacante, salvo solicitud expresa de la persona. Esta restricción no incluye `no viable`; por lo tanto, `no viable` no se agrega a la lista de tres estados bloqueados. Una nueva evaluación por un caso `no viable` debe responder a un nuevo disparador o cambio relevante, no a la repetición del mismo intento ya cerrado.

### Tope de derivaciones y escalado humano

*[Supuesto de diseño del grupo - Límite de derivaciones]:*

- R1 mantiene el contador de derivaciones del mismo caso; R2 no lleva el contador global ni decide si se superó el límite.
- Antes de cada derivación, R1 verifica el contador. Si todavía no se alcanzó el máximo, lo incrementa y realiza la derivación. Si ya se alcanzó el máximo, no deriva nuevamente, informa a la persona y escala el caso a revisión humana de «el equipo de ClickJr» (actor que las sentencias no prevén y que se incorpora como supuesto de diseño).
- El máximo ilustrativo de tres derivaciones incluye la primera derivación. Por ejemplo, con un máximo de tres, R1 puede efectuar hasta tres derivaciones del mismo caso; si después de la tercera respuesta `resuelto` todavía falta C3, C4 o C5, no realiza una cuarta derivación y escala.
- El plazo máximo de espera de R2 antes de declarar `vencido` (por ejemplo, siete días) también es ilustrativo y queda sujeto a configuración de la plataforma. No se presume que ese mismo plazo rija la validación humana de C2.

### Registro de motivos y resultado del camino del «NO»

En todos los caminos del «NO», R1 registra como mínimo el identificador del caso (si fue abierto), la persona, la vacante, la fecha y hora, las condiciones evaluadas, todas las condiciones que fallaron, el motivo principal comunicado, las notificaciones emitidas y el estado final. La derivación a R2 se reserva exclusivamente para los casos que mantienen C1, C2 y C6 verdaderas y presentan faltantes en C3, C4 o C5.

---

## 6. Caso Límite, Ventanas Críticas e Intervención Humana

### Caso límite: la vacante se cierra o la autorización se revoca antes del envío
*[Supuesto de diseño del grupo]:* El caso límite que se analiza es el de una vacante que deja de estar activa (C1) o una persona que revoca su autorización para postular automáticamente (C4) después de que se evaluaron las condiciones y antes de que los datos se transmitan. Se identifican tres momentos en los que puede ocurrir:
1. **Primera ventana crítica:** Inmediatamente antes de que el agente emita la solicitud formal de envío de la postulación.
2. **Segunda ventana crítica:** En el momento en que un caso derivado retorna desde R2 con estado `resuelto`, que exige reevaluar C1 a C6.
3. **Tercera ventana crítica:** Inmediatamente antes de transmitir los datos mínimos al empleador.

**Regla de corte y estado final:** Si antes de emitir la solicitud se detecta que la vacante dejó de estar activa, R1 aplica el camino de C1 y cierra como `no viable`. Si C4 no se cumple antes de emitir la solicitud, se trata como falta de autorización (F1) y se deriva a R2, siempre que C1, C2 y C6 sigan cumpliéndose. Si, después de emitida la solicitud y antes de transmitir los datos, la persona revoca la autorización, R1 detiene el despacho, no transmite ningún dato, registra el motivo y cierra el caso como `cancelado` (motivo: `autorización revocada`). No vuelve a solicitar esa autorización automáticamente: una nueva evaluación solo puede iniciarse cuando la persona otorgue nuevamente su autorización de forma expresa. Si en esa última verificación la vacante dejó de estar activa, cierra como `no viable` (motivo: `C1`). En todos los supuestos se informa a la persona y se libera el candado al alcanzar el estado final.

**Ejemplo:** Una persona tiene autorización vigente y su postulación a una vacante cumple las seis condiciones, por lo que el agente emite la solicitud de envío. Justo antes de transmitir, la persona revoca la autorización desde su panel. En la verificación previa a la transmisión, R1 detecta el cambio, no envía ningún dato, registra lo ocurrido en la bitácora, informa a la persona que no se envió nada y cierra el caso como `cancelado`, con motivo `autorización revocada`. Si el cambio detectado fuera el cierre de la vacante, el estado final sería `no viable`, con motivo `C1`.

### Criterios de intervención humana
- `[Establecido por la sentencia R1]`: La regla no prevé instancias de intervención humana en su enunciado.
- `[Supuesto de diseño del grupo]`: Se contemplan las siguientes instancias de participación de personas:
  1. **Configuración inicial de consentimientos:** La persona usuaria debe otorgar de forma activa la autorización general en su panel de permisos.
  2. **Validación de requisitos ambiguos (C2), acordada entre R1 y R2:** Ante requisitos publicados en texto libre que generen dudas, el caso queda abierto y lo valida «el equipo de ClickJr», con resultado `cumple` o `no cumple`. Mientras espera, no se emite la solicitud ni se deriva a R2.
  3. **Escalado al superar el tope de derivaciones:** Cuando un caso no se resuelve dentro del máximo de derivaciones, se cierra el circuito automático y pasa a revisión de «el equipo de ClickJr».

---

## 7. Resultado Esperado de la Solución

- `[Establecido por la sentencia R1]`: Emisión por parte del sistema de la solicitud de envío de la postulación.
- `[Supuesto de diseño del grupo]`:
  1. Transmisión al empleador de los datos mínimos indispensables requeridos para la postulación.
  2. Generación de un comprobante visible y accesible en el panel de la persona con fecha, hora, vacante, datos compartidos y autorización aplicada.
  3. Registro estructurado en la bitácora de auditoría con la evidencia del cumplimiento de las seis condiciones y la liberación del caso abierto.

---

## 8. Acuerdos de Diseño con Marcos Aquino (Rol 3 · R2)

Los siguientes puntos son supuestos de diseño del grupo confirmados explícitamente por los coordinadores de R1 y R2. Su ratificación por el resto del equipo continúa pendiente y se registra mediante los Pull Requests correspondientes.

### 8.1. Acuerdos confirmados entre los coordinadores de R1 y R2

1. **Tabla de notación compartida:** Adopción de B1=C1, B2=C2, B3=C6, F1=falta C4, F2=falta C3 y F3=falta C5 para mantener la misma terminología en toda la documentación y en los diagramas.
2. **Equivalencia de compatibilidad:** «Es compatible» (B2) equivale a «cumple sus requisitos» (C2) y se evalúa contra los requisitos publicados de la vacante.
3. **Política de privacidad y datos mínimos:** Los envíos directos de R1 se limitan a los datos mínimos necesarios bajo una autorización que cubra lo que pide la vacante. Lo que excede la autorización se considera falta de autorización (F1) y se deriva a R2; no hay confirmaciones separadas dentro de R1.
4. **Circuito de derivación y cuatro estados de retorno:** R1 deriva con datos estructurados y constancia de viabilidad básica; R2 revalida B1, B2 y B3 antes de interactuar y devuelve el identificador del caso, qué se resolvió y uno de los estados `resuelto`, `vencido`, `rechazado` o `no viable`. La decisión de solicitar el envío es siempre de R1, que ante `resuelto` reevalúa C1 a C6.
5. **Distinción entre `vencido` y `no viable`:** `vencido` se reserva para el vencimiento del plazo sin respuesta. Si falla B1, B2 o B3, R2 devuelve `no viable` con el motivo; antes de cerrar por vencimiento vuelve a comprobar las tres condiciones base.
6. **Caso abierto único e identificador:** R1 genera el identificador antes de derivar a R2, lo incluye en el paquete y lo conserva durante los reintentos; R2 lo devuelve y no genera uno nuevo. También se abre al enviar C2 a validación humana y, en el camino directo, al emitir la solicitud de envío. C6 solo cuenta postulaciones efectivamente enviadas.
7. **Candado y liberación:** El candado bloquea evaluaciones paralelas para la misma persona y vacante, pero no la reevaluación del propio caso. Incluye los estados de validación humana pendiente, derivado o retenido en R2 y solicitado aún no despachado. Se libera en cualquier estado final: `enviado`, `vencido`, `rechazado`, `no viable`, `escalado` o `cancelado`.
8. **Tope de derivaciones y escalado:** R1 mantiene y cuenta las derivaciones del caso. El máximo ilustrativo de tres incluye la primera derivación. Al alcanzarlo, no deriva nuevamente, avisa a la persona y escala a revisión de «el equipo de ClickJr».
9. **Validación humana de requisitos ambiguos (C2):** Si el cotejo de requisitos no puede resolverse con suficiente seguridad, R1 abre el caso y lo envía a validación de «el equipo de ClickJr». El resultado es `cumple` o `no cumple`; el primer resultado reanuda la evaluación completa y el segundo cierra como `no viable` por C2.
10. **No reapertura automática:** Después de `vencido`, `rechazado` o `escalado`, el sistema no inicia automáticamente otra evaluación para la misma persona y vacante, salvo solicitud expresa de la persona. La restricción se limita a esos tres estados y no incluye `no viable`.
11. **Verificaciones previas al envío:** Control de C1 y C4 antes de solicitar el envío, al volver de R2 con estado `resuelto` y antes de transmitir los datos. Si C4 se revoca después de emitir la solicitud y antes del despacho, R1 cancela el envío y cierra como `cancelado`; no vuelve a pedir autorización automáticamente y solo habilita una nueva evaluación después de una nueva autorización expresa. Si la vacante deja de estar activa, cierra como `no viable` por C1.
12. **Representación gráfica coordinada:** Los diagramas compartirán un esquema que permita varias entradas, retornos hacia pasos anteriores, conectores entre diagramas, múltiples estados finales y marcadores de pasos agénticos, intervención humana, supuestos del grupo y elementos establecidos por las sentencias. Los marcadores tendrán forma o ícono y etiqueta, no dependerán solo del color, e incluirán una alternativa textual. El formato técnico y la integración se terminan de acordar con Victoria Mariani.

### 8.2. Criterios de cierre derivados de estos acuerdos

- Los casos en que falla C1, C2 o C6 se resuelven en R1 con estado `no viable` y motivo identificado; no se derivan a R2.
- La duda sobre C2 no se interpreta como un incumplimiento: se envía a validación humana y no puede producir un envío hasta que el resultado sea `cumple`.
- R2 no solicita información ni permisos si B1, B2 o B3 dejaron de cumplirse.
- `no viable` no se incluye entre los tres estados que impiden una nueva evaluación automática; la política de no reapertura se limita a `vencido`, `rechazado` y `escalado`.

---

## 9. Puntos aún Abiertos

1. **Formato técnico e integración de los diagramas:** Acordar con Victoria Mariani (Rol 4) el modelo de datos, la tecnología concreta de representación en React (por ejemplo, SVG o estructuras HTML/CSS), la accesibilidad textual y el flujo de integración mediante Pull Request. Los requisitos funcionales compartidos ya están definidos en la sección 8.1.
2. **Parámetros ilustrativos de plataforma:** El máximo de tres derivaciones y el plazo de siete días para la espera en R2 son ejemplos de configuración, no valores impuestos por las sentencias. La plataforma deberá definir sus valores definitivos. Tampoco se fijó un plazo para la validación humana de C2; si se necesita limitar esa espera, deberá establecerse como parámetro independiente, sin aplicar automáticamente el plazo de R2.
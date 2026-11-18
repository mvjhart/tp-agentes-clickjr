# Propuesta de Solución Agéntica: Sentencia R1 (ClickJr)

Documento conceptual correspondiente a la propuesta de solución agéntica para la sentencia R1, asignada al Rol 2 (Candelaria Chazarreta) en el bloque «Postulación y permisos» de la startup ClickJr.

> **Criterio metodológico y delimitación de alcance:** Este documento describe un diseño estrictamente conceptual y expositivo para un futuro agente. Conforme a las restricciones del proyecto (`REQ-ALC-01`), no implica la implementación de modelos de inteligencia artificial en ejecución, llamadas a APIs externas ni backend operativo. En cada sección se distingue explícitamente lo que proviene de la sentencia normativa de aquello que constituye un supuesto de diseño formulado por el equipo.

---

## 1. Opciones de Título y Beneficio de la Propuesta

Para presentar la propuesta en la landing page (`REQ-LAN-02`), se plantean tres alternativas de titulación acompañadas de su correspondiente síntesis de beneficio en dos o tres frases, manteniendo neutralidad respecto de la política de confirmación posterior:

### Opción 1: AutoPost: Postulaciones Automáticas con tu Autorización
Esta opción adopta el término preexistente en la barra de navegación del proyecto (`src/components/navigation/navigation.js`, etiqueta «AutoPost», icono `zap`), vinculándolo de forma directa con el consentimiento de la persona.
- **Explicación del beneficio:** AutoPost ayuda a postulantes junior a tramitar postulaciones ante vacantes que coinciden con su perfil cuando se cumplen todas las condiciones y permisos requeridos. Al gestionar la solicitud de envío de forma automatizada, reduce la carga operativa de las búsquedas laborales cotidianas. La persona conserva el control de sus postulaciones mediante la configuración previa de sus autorizaciones.

### Opción 2: Postulación Automática ClickJr: Oportunidades según tu Perfil
Una alternativa descriptiva que emplea la denominación institucional de la plataforma y sintetiza con claridad el alcance de la propuesta.
- **Explicación del beneficio:** Esta propuesta facilita la participación en procesos de selección al evaluar sistemáticamente las condiciones y requisitos de las vacantes activas. Cuando el perfil y las autorizaciones coinciden con los requerimientos de la búsqueda, el sistema genera la solicitud de postulación correspondiente. De este modo, los perfiles junior pueden presentarse a búsquedas afines sin descuidar la pertinencia de sus postulaciones.

### Opción 3: Agente de Postulación Automática ClickJr
Una denominación institucional y neutra orientada a la función técnica y operativa del agente.
- **Explicación del beneficio:** Esta solución opera como un agente encargado de verificar que cada postulación cuente con los requisitos y autorizaciones pertinentes antes de tramitarse. El sistema organiza y procesa los pedidos de envío evitando duplicaciones e inconsistencias en la información transmitida. Con ello, se busca acercar a la persona postulante a ofertas de empleo acordes con su formación.

---

## 2. Rol y Funcionamiento Conceptual del Futuro Agente

El futuro agente de R1 operaría conceptualmente como un asistente de gestión y verificación desatendida dentro de ClickJr. Su objetivo radica en procesar oportunidades de empleo cuando se constata el cumplimiento integral de los requisitos y autorizaciones fijados por la persona y por la vacante.

En cuanto a su activación, la sentencia R1 no especifica cómo ni en qué momento se dispara la verificación lógica. Como supuesto de diseño del grupo, se plantea que el agente recibiría un evento o solicitud de evaluación individual que vincula a una persona postulante con una vacante específica. Esta evaluación podría desencadenarse ante la publicación de una nueva vacante en el catálogo del portal o mediante un proceso periódico de revisión programado en la plataforma.

*[Supuesto de diseño del grupo]:* En caso de que la plataforma contemple filtrar previamente qué vacantes evaluar a partir de preferencias laborales configuradas por la persona postulante, dicho filtro se concibe exclusivamente como un criterio operativo de activación técnica, sin constituir en ningún caso una condición lógica adicional a la regla R1.

---

## 3. Herramientas y Sistemas Conceptuales de Consulta

Para reunir los datos requeridos por las seis condiciones de la regla lógica sin acoplarse a tecnologías específicas, el agente se diseñaría con la capacidad conceptual de consultar seis servicios o herramientas internas de ClickJr:

| Herramienta conceptual | Información que consulta | Condición evaluada |
|---|---|---|
| **`Herramienta_EstadoVacante`** | Consulta el catálogo central de búsquedas laborales de ClickJr para verificar si la vacante se encuentra abierta para postulaciones. | **C1** |
| **`Herramienta_CotejoRequisitos`** | Contrasta las habilidades, requerimientos y condiciones fijadas por la vacante con la información cargada en el perfil del postulante. | **C2** |
| **`Herramienta_CompletitudPerfil`** | Verifica que todos los campos requeridos para formalizar una postulación en la plataforma se encuentren completos. | **C3** |
| **`Herramienta_RegistroAutorizaciones`** | Consulta el módulo de seguridad y privacidad para verificar si el usuario tiene vigente el permiso para postular de manera automática. | **C4** |
| **`Herramienta_PreguntasVacante`** | Comprueba si la vacante formuló preguntas obligatorias específicas y, de existir, si ya han sido respondidas por la persona. | **C5** |
| **`Herramienta_HistorialPostulaciones`** | Revisa el historial de postulaciones de la persona candidata para constatar si ya existe un registro previo para esa misma vacante. | **C6** |

*[Supuesto de diseño del grupo]:* Todas las herramientas mencionadas son abstracciones conceptuales destinadas a ilustrar cómo el agente interactúa con los módulos del sistema; no representan bibliotecas externas ni APIs en ejecución.

---

## 4. Acciones ante el Cumplimiento Pleno (Camino del «SÍ»)

### Acción normada
- `[Establecido por la sentencia R1]`: Cuando las condiciones C1, C2, C3, C4, C5 y C6 se satisfacen de forma simultánea, el sistema ejecuta de manera unívoca la consecuencia: **«solicita el envío de la postulación»**.

### Alternativas de diseño para el procesamiento posterior a la solicitud
- `[Supuesto de diseño del grupo]`: La regla concluye formalmente con la emisión de la solicitud y no define de qué manera se efectiviza la transmisión ni si median confirmaciones adicionales. Por ende, se presentan tres alternativas abiertas para evaluación del equipo:

#### Alternativa 1: Confirmación explícita previa obligatoria
El sistema emite la solicitud de envío, pero detiene la transmisión efectiva de datos personales hasta que la persona postulante confirme de forma expresa su consentimiento para esa vacante específica mediante una notificación interactiva.
- **Ventajas:** Brinda máxima protección y transparencia sobre los datos personales del postulante, impidiendo que su currículum o información de contacto se transmitan a una empresa sin su conocimiento específico y reciente.
- **Costos:** Introduce fricción operativa y requiere atención humana frecuente, lo que puede demorar la postulación si la persona no responde a tiempo.
- **Efecto sobre el carácter automático:** Reduce sustancialmente la autonomía del proceso, transformando la postulación automática en un mecanismo de preparación asistida sujeta a validación final paso a paso.

#### Alternativa 2: Confirmación condicionada al alcance de los datos
El sistema tramita el envío directo de la postulación cuando los datos requeridos por la vacante se limitan a lo cubierto por la autorización general inicial, pero exige confirmación explícita si la búsqueda solicita campos adicionales o información no contemplada en el consentimiento base.
- **Ventajas:** Equilibra la agilidad del proceso para vacantes estándar con un resguardo estricto ante requerimientos que excedan lo previamente consentido.
- **Costos:** Requiere una categorización precisa de datos en el sistema de permisos y añade complejidad a la lógica de decisión del agente.
- **Efecto sobre el carácter automático:** Mantiene el funcionamiento completamente automático en la mayoría de los casos típicos, interviniendo solo de forma selectiva ante situaciones que comprometan la privacidad.

#### Alternativa 3: Transmisión directa con limitación a datos mínimos y registro posterior
El sistema concreta la transmisión de forma directa e inmediata, limitando la información enviada a los datos mínimos estrictamente indispensables para la postulación y generando un registro detallado en el panel del usuario para su posterior consulta y seguimiento.
- **Variante con ventana de cancelación:** Como variante dentro de esta misma alternativa, puede contemplarse una ventana temporal transitoria (por ejemplo, 30 minutos) entre la emisión de la solicitud y el despacho definitivo, permitiendo que la persona cancele el envío si lo deseara. Se aclara explícitamente que la posibilidad de cancelar dentro de un plazo no equivale a una autorización explícita previa, sino a un mecanismo de mitigación operativa.
- **Ventajas:** Maximiza la rapidez y fluidez de la postulación automática, asegurando que el postulante participe de inmediato en la búsqueda sin depender de su disponibilidad horaria.
- **Costos:** Asume que la autorización inicial (C4) es suficiente para cualquier postulación afín, trasladando el control a una etapa posterior a la emisión.
- **Efecto sobre el carácter automático:** Preserva de manera íntegra el carácter automático del flujo, ya que la postulación se procesa y despacha de extremo a extremo sin intervenciones intermedias.

---

## 5. Tratamiento ante Incumplimiento de Condiciones (Camino del «NO»)

Dado que la sentencia no establece consecuencias cuando una o más condiciones no se cumplen, todo el camino del «NO» constituye un **supuesto de diseño del grupo**.

### Supuesto propuesto sobre orden de evaluación y fallas simultáneas
En situaciones reales, es común que dos o más condiciones fallen al mismo tiempo. Como supuesto de diseño del grupo, se propone evaluar las condiciones bajo un orden de precedencia lógico: verificar en primer término las condiciones de viabilidad básica de la postulación (C1: vacante activa, C6: no postulación previa y C2: perfil cumple requisitos) antes de comprobar los aspectos dependientes del postulante (C3: completitud de datos, C4: autorización y C5: preguntas obligatorias).
- **Fundamento técnico del orden propuesto:** Si la vacante ya está cerrada (falla C1), si la persona ya postuló anteriormente (falla C6) o si el perfil no reúne las competencias requeridas (falla C2), la postulación carece de viabilidad intrínseca. En tales casos, carece de sentido operativo solicitar a la persona que complete datos, responda preguntas o conceda autorizaciones para un puesto al que de todas formas no podrá aplicar.
- **Articulación con R2:** En consecuencia con este orden, se propone que la derivación al flujo o agente de R2 (PostuAyuda) solo tenga lugar si la vacante está activa (C1), el perfil cumple los requisitos (C2) y no existe una postulación previa (C6). Si falla C1, C2 o C6, no corresponde solicitar datos pendientes ni retener la postulación bajo el alcance de R2.

### Opciones de tratamiento por cada condición individual

#### Falla en C1: La vacante no está activa
- **Opción 1 (Descarte y registro interno):** El agente interrumpe el procesamiento y deja constancia únicamente en la bitácora del sistema sin enviar notificaciones.
- **Opción 2 (Alerta informativa al postulante):** Si la vacante había sido guardada o marcada de interés por el postulante, el sistema emite un aviso informando que la búsqueda ya no admite solicitudes.

#### Falla en C2: El perfil no cumple los requisitos
- **Opción 1 (Desestimación silenciosa):** El agente descarta la postulación sin comunicar el resultado a la persona, preservando la bandeja de avisos libre de postulaciones fallidas.
- **Opción 2 (Registro de orientaciones profesionales):** El sistema almacena las competencias faltantes y ofrece sugerencias formativas en la sección de orientación del portal para apoyar el crecimiento del perfil junior.

#### Fallas en C3, C4 o C5: Superposición con el alcance de R2
Cuando la vacante está activa (C1), cumple los requisitos (C2) y no existen registros previos (C6), pero se constatan faltantes de información en el perfil (C3), de autorización (C4) o de respuestas obligatorias (C5), se presentan las siguientes opciones:
- **Opción 1 (Derivación coordinada hacia R2):** El agente de R1 transfiere la solicitud al agente de R2 («PostuAyuda»), el cual asume la retención de la postulación y solicita a la persona la compleción de los aspectos pendientes.
- **Opción 2 (Notificación puntual informativa sin retención):** El agente de R1 desestima la postulación automática e informa al usuario qué requisito específico impidió su tramitación, invitándolo a completarlo manualmente si desea postular.

#### Falla en C6: Existe una postulación previa registrada
- **Opción 1 (Cancelación por duplicación sin aviso):** El agente aborta el trámite para evitar postulaciones reiteradas ante el empleador.
- **Opción 2 (Aviso de postulación previa en curso):** El sistema informa al postulante la fecha y el estado de su postulación anterior para su tranquilidad y seguimiento.

---

## 6. Casos Límite, Excepciones e Intervención Humana

### Caso límite analizado: Desactivación de vacante o revocación de autorización entre la verificación y el envío
Se analiza como propuesta de caso límite la situación en que la vacante es dada de baja (C1) o la persona revoca su autorización (C4) durante los intervalos temporales críticos del proceso. En este sentido, se identifican dos ventanas temporales en las que pueden producirse modificaciones de estado:
1. **Primera ventana crítica:** El intervalo temporal que transcurre entre la evaluación inicial de las seis condiciones lógicas y la generación formal de la solicitud de envío (o la emisión de la solicitud de confirmación humana).
2. **Segunda ventana crítica:** El lapso que media entre la emisión de la solicitud y la transmisión material de los datos al empleador, siempre que exista un intervalo temporal intermedio. Esta situación se presenta tanto en las alternativas 1 y 2 cuando se requiere confirmación humana expresa, como en la variante con ventana de cancelación de la alternativa 3 durante el plazo de espera previo al despacho definitivo.

**Tratamiento conceptual propuesto:**
- El agente realizaría una verificación de seguridad de las condiciones C1 y C4 en ambas ventanas críticas: inmediatamente antes de emitir la solicitud (o requerimiento de confirmación), y nuevamente justo antes de efectuar la transmisión material definitiva de datos siempre que haya mediado un lapso temporal intermedio (por confirmación humana en las alternativas 1 y 2 o por ventana de cancelación en la alternativa 3).
- Si en cualquiera de esas revisiones se detecta que la vacante fue cerrada o pausada, el trámite se cancela de forma inmediata, registrando la inactividad de la búsqueda.
- Si se constata que la autorización fue revocada por la persona, el sistema aborta de inmediato el envío en cualquier fase del flujo, garantizando que ninguna información personal sea transmitida y confirmando a la persona usuaria que su revocación de consentimiento fue debidamente respetada.

### Criterios para la intervención humana
- `[Establecido por la sentencia R1]`: La regla no prevé instancias de intervención humana en su enunciado.
- `[Supuesto de diseño del grupo]`: Se contemplan situaciones que requerirían la participación de personas:
  1. **Configuración inicial de consentimientos:** La persona debe habilitar explícitamente el permiso general para postulaciones automáticas (C4).
  2. **Intervención según la alternativa de envío seleccionada:** En caso de adoptarse la Alternativa 1 o la Alternativa 2 de la sección 4, la persona deberá interactuar para confirmar el envío en los casos que corresponda.
  3. **Comprobación ante discrepancias técnicas:** Si surgen inconsistencias entre el catálogo de vacantes y el perfil que el agente no pueda resolver con certeza, el trámite se pone en pausa para revisión técnica o consulta directa al usuario.

---

## 7. Resultado Esperado de la Solución

- `[Establecido por la sentencia R1]`: Emisión por parte del sistema de la solicitud de envío de la postulación.
- `[Supuesto de diseño del grupo]`: Como resultado global de la solución se contempla:
  1. La generación y persistencia del registro formal de la solicitud en la plataforma ClickJr.
  2. La actualización del historial de postulaciones de la persona candidata, indicando la vacante, la fecha y el estado resultante.
  3. El almacenamiento en la bitácora de auditoría de los datos que motivaron la decisión, facilitando la transparencia del proceso.

---

## 8. Puntos a Coordinar con Marcos Aquino (Rol 3 · R2)

Para asegurar la coherencia conceptual del trabajo grupal antes de iniciar el diseño de los módulos gráficos (T9 y T10), se identifican los siguientes puntos de articulación con el Rol 3:

1. **Definición de la política de confirmación y privacidad:**
   Poner en común las alternativas analizadas en la sección 4 (confirmación obligatoria, confirmación por alcance de datos o transmisión directa con registro) para acordar un criterio general coherente sobre el tratamiento de datos personales en ambos módulos.
2. **Criterio de precedencia y orden de evaluación ante fallas múltiples:**
   Consensuar el orden de prioridad propuesto en la sección 5, validando que la derivación a R2 aplique exclusivamente si C1, C2 y C6 se satisfacen plenamente.
3. **Manejo de estados compartidos e impacto en C6:**
   Acordar cómo se catalogan los estados intermedios del trámite (por ejemplo, si una postulación retenida por R2 en espera de respuestas o datos, una postulación pendiente de confirmación explícita o una solicitud dentro de una ventana de cancelación cuenta o no como «postulación previa» para la condición C6 de R1), a fin de evitar duplicaciones o bloqueos indebidos de nuevas evaluaciones.
4. **Equivalencia entre «cumple sus requisitos» (R1) y «es compatible» (R2):**
   Acordar si ambas expresiones tendrán la misma interpretación técnica en los diagramas de flujo y desplegables de la landing.
5. **Nomenclatura y títulos para la presentación pública:**
   Coordinar si se mantendrán las denominaciones «AutoPost» y «PostuAyuda» vigentes en el código de navegación o si se adoptará alguna de las alternativas formuladas.

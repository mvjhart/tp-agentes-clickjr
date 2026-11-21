Documento de análisis lógico y formal correspondiente a la sentencia R2 asignada al Rol 3 (Marcos Aquino) en el marco del bloque «Postulación y permisos» de la startup ClickJr.



\> **\*\*Estado de los acuerdos:\*\*** Los supuestos de esta ficha fueron confirmados por los coordinadores de R1 y R2 (Candelaria Chazarreta y Marcos Aquino). Su ratificación por Federico Acosta Maneiro y Victoria Mariani sigue pendiente mediante comentarios en el Pull Request.



**---**



**## 1. Resumen Estructurado de la Ficha**



\- **\*\*Sentencia original:\*\*** «Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.»

\- **\*\*Datos necesarios:\*\*** Estado de la vacante, compatibilidad de la vacante con el perfil de la persona postulante (*\*[Interpretación del análisis]:\** evaluada contra los requisitos publicados), historial de postulaciones previas (*\*[Interpretación del análisis]:\** cuenta solo las efectivamente enviadas), estado de la autorización para postular automáticamente, completitud de los datos del perfil necesarios para postular, y preguntas obligatorias de la vacante y sus respuestas.

\- **\*\*Condición:\*\*** Conjunción de tres condiciones base ($B_1 \land B_2 \land B_3$) seguida de una disyunción inclusiva de tres faltantes ($F_1 \lor F_2 \lor F_3$); la condición completa es $(B_1 \land B_2 \land B_3 \land (F_1 \lor F_2 \lor F_3))$.

\- **\*\*Consecuencia:\*\*** El sistema solicita lo pendiente Y no envía la postulación (dos efectos simultáneos establecidos por la sentencia).



**---**



**## 2. Sentencia Original**



\> «Si la vacante está activa y es compatible, no existe una postulación previa y falta autorización, información o una respuesta obligatoria, el sistema solicita lo pendiente y no envía la postulación.»



*\*Nota de verificación:\** La redacción transcripta coincide de manera exacta, carácter por carácter y signo por signo, con el texto oficial consignado en \`docs/consigna.md\` (sección 2, «Sentencias Lógicas Originales Asignadas»).



**---**



**## 3. Estructura Lógica General**



La sentencia responde a una estructura condicional clásica de implicación material:



$$(B_1 \land B_2 \land B_3 \land (F_1 \lor F_2 \lor F_3)) \implies (\text{solicita lo pendiente} \land \text{no envía})$$



El antecedente se compone de dos grupos de condiciones:



\- **\*\*Condiciones base\*\*** (unidas por Y): deben cumplirse simultáneamente las tres.

  - **\*\*B1:\*\*** La vacante está activa.

  - **\*\*B2:\*\*** La vacante es compatible.

  - **\*\*B3:\*\*** No existe una postulación previa.

\- **\*\*Condiciones de faltante\*\*** (unidas por O inclusivo): debe darse al menos una.

  - **\*\*F1:\*\*** Falta autorización.

  - **\*\*F2:\*\*** Falta información.

  - **\*\*F3:\*\*** Falta una respuesta obligatoria.



La consecuencia tiene dos efectos simultáneos: el sistema solicita lo pendiente Y no envía la postulación. Ambos son establecidos por la sentencia.



**---**



**## 4. Desglose de Condiciones y Datos Necesarios**



A continuación se detalla cada condición del antecedente, su formulación textual y los datos de entrada requeridos para su evaluación:



\| Identificador | Condición textual | Formulación | Datos necesarios |

\|---|---|---|---|

\| **\*\*B1\*\*** | «la vacante está activa» | Afirmativa | Estado de la vacante. [Establecido por la sentencia R2] |

\| **\*\*B2\*\*** | «es compatible» | Afirmativa | Requisitos publicados de la vacante y datos del perfil de la persona postulante. *\*[Supuesto de diseño del grupo]:\** «Compatible» se evalúa contra los requisitos publicados de la vacante (ver sección 6c). |

\| **\*\*B3\*\*** | «no existe una postulación previa» | Negativa | Historial de postulaciones de la persona postulante vinculado a esa vacante. *\*[Interpretación del análisis]:\** Computa exclusivamente postulaciones efectivamente enviadas al empleador. [Establecido por la sentencia R2] |

\| **\*\*F1\*\*** | «falta autorización» | Negativa (ausencia) | Permiso o autorización de la persona para postular automáticamente y su alcance respecto de los datos que pide la vacante. *\*[Interpretación del análisis]:\** Incluye tanto la ausencia de autorización como la existencia de una que no cubre los datos solicitados por la vacante. |

\| **\*\*F2\*\*** | «falta información» | Negativa (ausencia) | Estado de completitud de los datos del perfil de la persona postulante necesarios para postular. *\*[Interpretación del análisis]:\** Se entiende que refiere a los datos del perfil necesarios para postular. |

\| **\*\*F3\*\*** | «falta una respuesta obligatoria» | Negativa (ausencia) | Preguntas obligatorias de la vacante y respuestas de la persona postulante. |



**---**



**## 5. Consecuencia Establecida**



La sentencia establece dos efectos simultáneos sobre el sistema:



1\. **\*\*«Solicita lo pendiente»\*\*** [Establecido por la sentencia R2]: El sistema formula una solicitud dirigida a la persona, requiriendo lo que falta entre F1, F2 y F3. *\*[Interpretación del análisis]:\** «Lo pendiente» es lo que falte entre los faltantes que activan la condición.

2\. **\*\*«No envía la postulación»\*\*** [Establecido por la sentencia R2]: El sistema no envía la postulación. Esta es una **\*\*prohibición explícita\*\*** establecida por la sentencia.



**\*\*Diferencia relevante respecto de R1:\*\*** La sentencia R1 establece que el sistema «solicita el envío de la postulación» y no se pronuncia sobre la ejecución material del envío. R2, en cambio, establece expresamente que el sistema **\*\*no envía\*\***. En R2, la prohibición de envío es parte integral de la regla lógica, no un supuesto de diseño.



**---**



**## 6. Aclaraciones de Lectura y Alcance**



**### 6a. Condicional simple, no bicondicional**



La sentencia está formulada estrictamente como un condicional simple («Si [condición], [consecuencia]») y en ningún caso como una equivalencia o bicondicional. En lógica proposicional, una implicación no determina qué ocurre cuando el antecedente es falso: la sentencia solo establece qué hace el sistema cuando se satisface la condición completa.



La siguiente tabla detalla los casos posibles de forma explícita:



**\*\*Cuando la base es cierta (B1, B2 y B3 se cumplen):\*\***



\| Combinación de faltantes | ¿Aplica la sentencia? | Consecuencia establecida |

\|---|---|---|

\| Solo F1 | Sí | Solicita lo pendiente y no envía. |

\| Solo F2 | Sí | Solicita lo pendiente y no envía. |

\| Solo F3 | Sí | Solicita lo pendiente y no envía. |

\| F1 y F2 | Sí | Solicita lo pendiente y no envía. |

\| F1 y F3 | Sí | Solicita lo pendiente y no envía. |

\| F2 y F3 | Sí | Solicita lo pendiente y no envía. |

\| F1, F2 y F3 | Sí | Solicita lo pendiente y no envía. |

\| Ninguna falta (todos presentes) | No aplica | La sentencia R2 no establece qué ocurre. *\*[Interpretación del análisis]:\** Este es el caso que, bajo el supuesto de 6c, cubre R1 cuando además se cumplen C3, C4 y C5 (ver sección 6f). |



**\*\*Cuando la base es falsa (cualquier B es falsa):\*\***



La sentencia no establece qué ocurre. En cualquier caso en que B1, B2 o B3 no se cumplan, R2 no aplica. El tratamiento de esos casos no surge de la sentencia.



**### 6b. La disyunción F1/F2/F3 es O inclusivo**



*\*[Interpretación del análisis].\** El conector «o» de la sentencia («falta autorización, información o una respuesta obligatoria») se interpreta como una disyunción inclusiva: pueden faltar una, dos o las tres cosas simultáneamente, y en todos esos casos la condición se activa. Esto es consistente con la tabla de siete combinaciones de la sección 6a.



**### 6c. «Compatible» no está definido por la sentencia**



*\*[Interpretación del análisis].\** El término «compatible» no recibe definición en la sentencia R2.



*\*[Supuesto de diseño del grupo]\** confirmado entre Candelaria Chazarreta y Marcos Aquino: «compatible» se evalúa contra los requisitos publicados de la vacante y equivale a «cumple sus requisitos» de R1 (B2 equivale a C2). El resultado de la evaluación es binario: cumple o no cumple. Este supuesto no surge de la sentencia; se identifica como tal según \`REQ-LAN-05\`. La misma equivalencia ya figura en \`analisis-r1.md\` (sección 6, tercera aclaración, y sección 7, acuerdo 1) con la misma terminología.



Como referencia complementaria: cuando el texto de un requisito publicado es ambiguo y no permite determinar con suficiente seguridad si el perfil lo cumple, R1 prevé una validación humana antes de asignar el resultado a C2 (ver \`analisis-r1.md\`, sección 7, acuerdos 1 y 10). La ambigüedad no equivale a que B2 sea falsa: hasta que se determine si el perfil cumple o no cumple, la condición permanece indeterminada. R2 presupone que R1 ya derivó un caso con la viabilidad básica confirmada; el tratamiento de una ambigüedad que apareciera durante un re-chequeo de R2 no está definido por la sentencia y debe coordinarse con R1.



**\*\*Consecuencia sobre la base de R2:\*\*** La condición B2 ya incorpora que se cumplen los requisitos de la vacante. Cuando B2 es verdadera, el perfil cumple los requisitos publicados.



\> El acuerdo está confirmado entre los coordinadores de R1 y R2, pero su ratificación por el resto del equipo sigue pendiente. Por lo tanto, todavía no debe presentarse como una decisión ratificada por todo el equipo.



**### 6d. «Información» y «autorización» no están precisadas por la sentencia**



**\*\*«Información» (F2):\*\*** *\*[Interpretación del análisis].\** «Falta información» se interpreta como la ausencia de datos del perfil necesarios para postular, es decir, la negación de C3 de R1 («los datos están completos»). F2 corresponde a la negación de C3.



**\*\*«Respuesta obligatoria» (F3):\*\*** *\*[Interpretación del análisis].\** «Falta una respuesta obligatoria» corresponde a la negación de C5 de R1 («no hay preguntas obligatorias pendientes»). F3 corresponde a la negación de C5.



**\*\*«Autorización» (F1):\*\*** *\*[Interpretación del análisis].\** «Falta autorización» se entiende como la negación de C4 de R1 («existe autorización para postular automáticamente») y comprende tanto que no exista autorización como que la existente no cubra los datos específicos que pide la vacante. Esta lectura ya figura en \`analisis-r1.md\` (secciones 1 y 4; sección 7, acuerdo 2) con el mismo rótulo. F1 corresponde a la negación de C4. Esta interpretación no surge de la sentencia. El tratamiento del caso en que falta autorización corresponde a `propuesta-r2.md` (sección 4) y no se desarrolla aquí.



**\*\*«Lo pendiente»:\*\*** *\*[Interpretación del análisis].\** Dado lo anterior, «lo pendiente» equivale al conjunto de faltantes detectados entre F1, F2 y F3.



**### 6e. «Postulación previa» (B3)**



*\*[Interpretación del análisis]\** coherente con \`analisis-r1.md\` (sección 4, fila C6, y sección 7, acuerdo 3): B3 computa exclusivamente las postulaciones efectivamente enviadas al empleador. Una postulación retenida en R2, o cuyo envío fue solicitado pero aún no se despachó, no constituye una postulación previa a los efectos de B3. Esta interpretación no surge de la sentencia. El tratamiento del caso abierto único corresponde a `propuesta-r2.md` (sección 7) y no se desarrolla aquí.



**### 6f. Relación con R1 bajo el supuesto de 6c**



*\*[Interpretación del análisis].\** Con B1=C1, B2=C2 y B3=C6, cuando la base es cierta, aplica exactamente una de las dos sentencias:

\- R1 aplica si, además, C3, C4 y C5 se cumplen (ningún faltante activa F1, F2 ni F3).

\- R2 aplica si falta alguna entre C3 (F2), C4 (F1) o C5 (F3).



Esta partición depende del supuesto de 6c. \`analisis-r1.md\` (sección 6, tercera aclaración) afirma la misma partición y coincide con esta lectura.



Como alternativa considerada y no adoptada por los coordinadores de R1 y R2: si «compatible» fuera más amplio que «cumple requisitos», existirían casos donde B2 es verdadera pero C2 de R1 no, con lo cual R2 podría aplicar literalmente para una vacante cuyos requisitos el perfil no cumple. Esta lectura fue descartada por los coordinadores.



**---**



**## 7. Correspondencia y Acuerdos con Candelaria Chazarreta (Rol 2 · R1)**



**### Tabla de correspondencia entre condiciones de R2 y R1**



\| Elemento R2 | Enunciado en R2 | Elemento R1 | Enunciado en R1 | Relación conceptual |

\|---|---|---|---|---|

\| **\*\*B1\*\*** | «la vacante está activa» | **\*\*C1\*\*** | «una vacante está activa» | Condición base compartida. *\*[Interpretación del análisis]\** |

\| **\*\*B2\*\*** | «es compatible» | **\*\*C2\*\*** | «el perfil cumple sus requisitos» | Condición base compartida (equivalencia acordada). *\*[Supuesto de diseño del grupo]\** |

\| **\*\*B3\*\*** | «no existe una postulación previa» | **\*\*C6\*\*** | «no existe una postulación previa a esa vacante» | Condición base compartida. *\*[Interpretación del análisis]\** |

\| **\*\*F1\*\*** | «falta autorización» | **\*\*no C4\*\*** | Negación de «existe autorización para postular automáticamente» | Faltante de R2 equivale a la negación de C4. *\*[Interpretación del análisis]\** |

\| **\*\*F2\*\*** | «falta información» | **\*\*no C3\*\*** | Negación de «los datos están completos» | Faltante de R2 equivale a la negación de C3. *\*[Interpretación del análisis]\** |

\| **\*\*F3\*\*** | «falta una respuesta obligatoria» | **\*\*no C5\*\*** | Negación de «no hay preguntas obligatorias pendientes» | Faltante de R2 equivale a la negación de C5. *\*[Interpretación del análisis]\** |



**### Acuerdos que afectan a esta ficha**



Los acuerdos sustantivos confirmados entre los coordinadores que tienen incidencia directa en este análisis son:



1\. **\*\*Equivalencia de compatibilidad:\*\*** «Es compatible» (B2) equivale a «cumple sus requisitos» (C2) y se evalúa contra los requisitos publicados de la vacante, con resultado binario. Ver \`analisis-r1.md\`, sección 7, acuerdo 1.

2\. **\*\*Alcance de la autorización:\*\*** F1 comprende tanto la ausencia de autorización como la existencia de una que no cubre los datos que pide la vacante. Ver \`analisis-r1.md\`, sección 7, acuerdo 2.

3\. **\*\*Cómputo de «postulación previa»:\*\*** B3 computa solo postulaciones efectivamente enviadas al empleador; una postulación retenida en R2 o cuyo envío fue solicitado pero aún no despachado no cuenta. Ver \`analisis-r1.md\`, sección 7, acuerdo 3.



Los demás acuerdos coordinados entre R1 y R2 (estados de retorno, distinción entre \`vencido\` y \`no viable\`, caso abierto único, candado, tope de derivaciones, validación humana de C2, no reapertura automática, verificaciones previas al envío, representación gráfica coordinada) no tienen incidencia directa en este análisis lógico. Ver \`propuesta-r1.md\` (secciones 5, 6 y 8) y \`propuesta-r2.md\` (secciones 4 a 8).



**---**



**## 8. Puntos Abiertos**



Los siguientes puntos permanecen abiertos al momento de elaborar esta ficha:



1\. **\*\*Formato técnico de los diagramas y componente compartido:\*\*** A acordar con Victoria Mariani (Rol 4), responsable de la integración técnica. Este punto también está abierto en \`analisis-r1.md\` (sección 8, punto 1).

2\. **\*\*Valores ilustrativos de plataforma:\*\*** Los parámetros operativos (plazos de espera, número máximo de derivaciones) son valores ilustrativos, no establecidos por las sentencias, y corresponden a una decisión de configuración de la plataforma.



Si el equipo decidiera registrar alguno de estos puntos como decisión formal (DEC), requiere aprobación humana explícita conforme a \`AGENTS.md\`.

# Etiquetas de GitHub — ClickJr

Este documento define el catálogo de etiquetas del repositorio para clasificar, organizar y facilitar el seguimiento de los GitHub Issues.

Las etiquetas se organizan en tres dimensiones independientes: tipo de Issue, etapa del proyecto y área de trabajo.

## 1. Tipo de Issue

Identifica la función del Issue dentro de la organización del proyecto.

| Etiqueta | Descripción | Aplicación |
|---|---|---|
| `tipo:epica` | Agrupa un conjunto de tareas relacionadas con una etapa del proyecto. | Issues principales A–E. |
| `tipo:tarea` | Representa una actividad concreta con un objetivo y un entregable definidos. | Issues T1–T15. |

## 2. Etapa del proyecto

Identifica la agrupación de trabajo a la que pertenece cada Issue.

| Etiqueta | Etapa | Aplicación |
|---|---|---|
| `etapa:a` | Preparación y recuperación de materiales. | Issue A y T1–T2. |
| `etapa:b` | Análisis lógico y definición de propuestas. | Issue B y T3–T6. |
| `etapa:c` | Estructura y desarrollo de los módulos. | Issue C y T7–T10. |
| `etapa:d` | Diseño e integración. | Issue D y T11–T12. |
| `etapa:e` | Revisión, documentación y publicación. | Issue E y T13–T15. |

## 3. Área de trabajo

Identifica la naturaleza principal de la actividad. Puede combinarse con las etiquetas de tipo y etapa.

| Etiqueta | Descripción | Aplicación |
|---|---|---|
| `area:documentacion` | Elaboración y actualización de documentación. | README, organización y documentación del proyecto. |
| `area:analisis` | Análisis de sentencias, condiciones y propuestas conceptuales. | T3–T6. |
| `area:desarrollo` | Construcción de la estructura y los módulos de la landing. | T7–T10. |
| `area:diseno` | Definición de criterios visuales y presentación. | T11. |
| `area:integracion` | Incorporación y compatibilización de módulos. | T12. |
| `area:revision` | Pruebas, verificación y corrección de problemas. | T13. |
| `area:publicacion` | Publicación y comprobación de accesibilidad. | T15. |

## 4. Criterios de aplicación

- Cada Issue debe tener exactamente una etiqueta de tipo.
- Cada Issue debe tener exactamente una etiqueta de etapa.
- Se pueden asignar una o más etiquetas de área cuando aporten información útil.
- Los Issues principales deben utilizar `tipo:epica`.
- Los Issues de tareas deben utilizar `tipo:tarea`.
- Las etiquetas no reemplazan las relaciones padre-hijo ni las dependencias entre Issues.
- No se deben crear etiquetas redundantes para información que ya se identifica mediante el título, la descripción o la relación jerárquica.

## 5. Resumen de etiquetas

| Dimensión | Cantidad |
|---|---:|
| Tipo | 2 |
| Etapa | 5 |
| Área | 7 |
| **Total** | **14** |

Este catálogo puede ampliarse mediante acuerdo del equipo cuando aparezca una necesidad concreta de clasificación.
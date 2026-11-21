// Contenido del acordeón de AutoPost (R1).
//
// Texto: se puede resaltar con **negrita**.
// Chips: variante 'desde' | 'hacia' | 'ciclo' | 'fin'.
// Diagrama: lista de elementos.
//   { tipo: 'nodo', variante, texto }  variante: inicio | accion | decision |
//                                                fin | finMalo | finAviso
//   { tipo: 'ramas', ramas: [{ etiqueta, elementos }] }
//   { tipo: 'nota', texto }
// Entre dos nodos seguidos la flecha se agrega sola.

export const tramosAutoPost = [
  {
    id: 'tramo-1',
    numero: 'Tramo 1',
    titulo: 'Recepción y viabilidad básica',
    abiertoInicial: true,
    chips: [
      {
        variante: 'desde',
        texto: 'Entrada: postulación nueva o respuesta de la ayuda',
      },
      { variante: 'hacia', texto: 'Si todo está bien → Tramo 2' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'Entra la postulación al sistema. Puede ser una nueva o una que vuelve después de haber pedido ayuda a PostuAyuda.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Que la vacante siga abierta.',
          'Que el perfil cumpla los requisitos.',
          'Que la persona no se haya postulado antes a esa vacante.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si algo de lo anterior no se cumple, la postulación se marca como **no viable**. Si todo está bien, sigue al tramo siguiente.',
      },
    ],
    diagrama: [
      { tipo: 'nodo', variante: 'inicio', texto: 'Inicio' },
      { tipo: 'nodo', variante: 'accion', texto: 'Llega la postulación' },
      {
        tipo: 'nodo',
        variante: 'accion',
        texto: 'El sistema revisa la solicitud',
      },
      { tipo: 'nodo', variante: 'decision', texto: '¿Se puede seguir?' },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'No',
            elementos: [
              { tipo: 'nodo', variante: 'finMalo', texto: 'No viable' },
            ],
          },
          {
            etiqueta: 'Sí',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: 'Continúa → Tramo 2',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tramo-2',
    numero: 'Tramo 2',
    titulo: 'Completitud y decisión de camino',
    abiertoInicial: false,
    chips: [
      { variante: 'desde', texto: 'Viene del Tramo 1 · Todo en orden' },
      { variante: 'hacia', texto: 'Todo completo → Tramo 3A' },
      { variante: 'ciclo', texto: 'Falta algo y se puede pedir → Tramo 3B' },
      {
        variante: 'fin',
        texto: 'Falta algo y ya no se puede → Revisión por una persona',
      },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'El sistema revisa si están todos los datos, la autorización y las respuestas obligatorias. Es el punto donde se decide por qué camino sigue la postulación.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Que los datos del perfil estén completos.',
          'Que exista autorización para postularse automáticamente.',
          'Que no queden preguntas obligatorias sin responder.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si está todo completo, va al **Tramo 3A** (camino directo al envío). Si falta algo y todavía se puede pedir, va al **Tramo 3B** (ayuda de PostuAyuda). Si falta algo y ya no se puede volver a pedir, lo revisa una persona del equipo.',
      },
    ],
    diagrama: [
      {
        tipo: 'nodo',
        variante: 'decision',
        texto: '¿Está todo completo para postularse?',
      },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Sí',
            elementos: [
              { tipo: 'nodo', variante: 'accion', texto: 'Ir al Tramo 3A' },
            ],
          },
          {
            etiqueta: 'No',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'decision',
                texto: '¿Se puede volver a pedir lo que falta?',
              },
              {
                tipo: 'ramas',
                ramas: [
                  {
                    etiqueta: 'Sí',
                    elementos: [
                      {
                        tipo: 'nodo',
                        variante: 'accion',
                        texto: 'Ir al Tramo 3B',
                      },
                    ],
                  },
                  {
                    etiqueta: 'No',
                    elementos: [
                      {
                        tipo: 'nodo',
                        variante: 'finAviso',
                        texto: 'Revisión por una persona del equipo',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tramo-3a',
    numero: 'Tramo 3A',
    titulo: 'Camino directo: verificación final y envío',
    abiertoInicial: false,
    chips: [
      { variante: 'desde', texto: 'Viene del Tramo 2 · Todo completo' },
      { variante: 'fin', texto: 'Termina en: Enviado / No viable / Cancelado' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'Es el camino normal. Antes de enviar, el sistema vuelve a chequear que la vacante siga abierta y que el permiso para postularse siga vigente. Si algo cambió en el medio, no se envía.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Que la vacante no se haya cerrado.',
          'Que la persona no haya retirado el permiso.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si todo sigue en orden, la postulación se envía. Si la vacante se cerró, queda como **no viable**. Si la persona retiró el permiso, queda como **cancelada**.',
      },
    ],
    diagrama: [
      {
        tipo: 'nodo',
        variante: 'accion',
        texto: 'Volver a revisar vacante y permiso',
      },
      { tipo: 'nodo', variante: 'decision', texto: '¿Se puede enviar?' },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Sí',
            elementos: [{ tipo: 'nodo', variante: 'fin', texto: 'Enviado' }],
          },
          {
            etiqueta: 'No, vacante cerrada',
            elementos: [
              { tipo: 'nodo', variante: 'finMalo', texto: 'No viable' },
            ],
          },
          {
            etiqueta: 'No, permiso retirado',
            elementos: [
              { tipo: 'nodo', variante: 'finAviso', texto: 'Cancelado' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tramo-3b',
    numero: 'Tramo 3B',
    titulo: 'Camino con faltantes: ayuda de PostuAyuda',
    abiertoInicial: false,
    chips: [
      {
        variante: 'desde',
        texto: 'Viene del Tramo 2 · Falta algo y se puede volver a pedir',
      },
      { variante: 'ciclo', texto: 'Si se resolvió → vuelve al Tramo 1' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'Cuando falta algo y todavía se puede pedir, el sistema pide ayuda a PostuAyuda y espera la respuesta. Según lo que responda, hay varios finales posibles.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Si la persona completó lo que faltaba.',
          'Si no se puede continuar.',
          'Si venció el plazo de espera.',
          'Si la persona rechazó la postulación.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si se completó todo, **vuelve al Tramo 1** para revisar las condiciones desde cero (no alcanza con asumir que lo único que cambió fue la completitud). Si no, termina como **no viable**, **vencida** o **rechazada**.',
      },
    ],
    diagrama: [
      { tipo: 'nodo', variante: 'accion', texto: 'Pedir ayuda a PostuAyuda' },
      { tipo: 'nodo', variante: 'accion', texto: 'Recibir la respuesta' },
      { tipo: 'nodo', variante: 'decision', texto: '¿Qué respondió?' },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Se completó',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: '↺ Volver al Tramo 1',
              },
            ],
          },
          {
            etiqueta: 'No se puede',
            elementos: [
              { tipo: 'nodo', variante: 'finMalo', texto: 'No viable' },
            ],
          },
          {
            etiqueta: 'Venció',
            elementos: [
              { tipo: 'nodo', variante: 'finAviso', texto: 'Vencido' },
            ],
          },
          {
            etiqueta: 'Rechazó',
            elementos: [
              { tipo: 'nodo', variante: 'finMalo', texto: 'Rechazado' },
            ],
          },
        ],
      },
      {
        tipo: 'nota',
        texto: 'Este es el único tramo que vuelve a empezar.',
      },
    ],
  },
]

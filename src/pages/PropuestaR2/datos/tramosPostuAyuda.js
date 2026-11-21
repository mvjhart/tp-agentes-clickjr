// Contenido del acordeón de PostuAyuda (R2).
//
// Texto: se puede resaltar con **negrita**.
// Chips: variante 'desde' | 'hacia' | 'ciclo' | 'fin'.
// Diagrama: lista de elementos.
//   { tipo: 'nodo', variante, texto }  variante: inicio | entrada | accion |
//                                                decision | enlace | retorno |
//                                                fin | finMalo | finAviso |
//                                                finNeutro | finHumano
//   { tipo: 'ramas', ramas: [{ etiqueta, variante?, elementos }] }
//   { tipo: 'nota', texto }
// Entre dos nodos seguidos la flecha se agrega sola.
export const tramosPostuAyuda = [
  {
    id: 'tramo-1',
    numero: 'Tramo 1',
    titulo: 'Recepción del pedido y re-chequeo inicial',
    abiertoInicial: true,
    chips: [
      { variante: 'desde', texto: 'Entrada: pedido de AutoPost' },
      { variante: 'hacia', texto: 'Si se puede continuar → Tramo 2' },
      { variante: 'fin', texto: 'Si B1, B2 o B3 fallan → No viable' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'PostuAyuda recibe un pedido de AutoPost con el identificador del caso, los datos de la persona y del empleo, y los faltantes detectados (F1 autorización, F2 información, F3 respuesta obligatoria). Antes de pedirle nada a la persona, re-chequea que el caso siga siendo viable.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Que la vacante siga activa (B1).',
          'Que el perfil siga cumpliendo los requisitos (B2).',
          'Que no exista una postulación previa efectivamente enviada (B3).',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si alguna condición base dejó de cumplirse, el caso se devuelve a AutoPost como **no viable** con el motivo (B1, B2 o B3). Si todo sigue en orden, avanza al tramo siguiente y se le pide a la persona lo que falta.',
        tono: 'sentencia',
      },
    ],
    diagrama: [
      { tipo: 'nodo', variante: 'inicio', texto: 'Inicio' },
      {
        tipo: 'nodo',
        variante: 'entrada',
        texto: 'Llega el pedido de AutoPost',
      },
      {
        tipo: 'nodo',
        variante: 'accion',
        texto: 'Registrar el caso y el plazo',
      },
      {
        tipo: 'nodo',
        variante: 'decision',
        texto: '¿Se puede continuar? (B1, B2, B3)',
      },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'No',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'finMalo',
                texto: 'No viable (motivo B1/B2/B3)',
              },
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
    titulo: 'Solicitud consolidada y espera',
    abiertoInicial: false,
    chips: [
      { variante: 'desde', texto: 'Viene del Tramo 1 · Base OK' },
      { variante: 'ciclo', texto: 'Respuesta parcial → repite Tramo 2' },
      { variante: 'hacia', texto: 'Completó todo → Tramo 3A' },
      { variante: 'fin', texto: 'Sin respuesta o rechazo → Tramo 3B' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'El agente redacta **una única solicitud consolidada** con todos los faltantes (F1, F2 y/o F3), en lenguaje claro, y la envía a la persona. Queda esperando respuesta durante un plazo definido.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Si la persona completó todo lo pendiente.',
          'Si respondió solo una parte.',
          'Si no respondió dentro del plazo.',
          'Si rechazó explícitamente completar lo pendiente.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si completó todo, avanza al **Tramo 3A** (re-chequeo final + devolución a AutoPost). Si respondió una parte, se guarda lo recibido y se pide solo lo que sigue faltando (ciclo dentro de este mismo tramo, sin reiniciar el plazo). Si no respondió o rechazó, pasa al **Tramo 3B**.',
        tono: 'humana',
      },
    ],
    diagrama: [
      {
        tipo: 'nodo',
        variante: 'accion',
        texto: 'Pedir a la persona lo que falta (solicitud consolidada)',
      },
      { tipo: 'nodo', variante: 'accion', texto: 'Esperar respuesta (plazo)' },
      { tipo: 'nodo', variante: 'decision', texto: '¿Qué respondió?' },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Completó todo',
            variante: 'si',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: 'Ir al Tramo 3A',
              },
            ],
          },
          {
            etiqueta: 'Respondió parcial',
            variante: 'ciclo',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'retorno',
                texto: '↺ Guardar lo recibido y pedir solo lo que falta',
              },
            ],
          },
          {
            etiqueta: 'Sin respuesta',
            variante: 'no',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: 'Ir al Tramo 3B',
              },
            ],
          },
          {
            etiqueta: 'Rechazó',
            variante: 'no',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: 'Ir al Tramo 3B',
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
    titulo: 'Camino exitoso: vuelve a AutoPost',
    abiertoInicial: false,
    chips: [
      { variante: 'desde', texto: 'Viene del Tramo 2 · Completó todo' },
      { variante: 'fin', texto: 'Termina en: Resuelto / No viable' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'Antes de devolver el estado a AutoPost, PostuAyuda re-chequea que B1, B2 y B3 sigan cumpliéndose. Este segundo re-chequeo garantiza que el caso sigue siendo viable después del tiempo transcurrido mientras la persona respondía.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Que la vacante siga activa (B1).',
          'Que el perfil siga cumpliendo los requisitos (B2).',
          'Que no se haya enviado una postulación previa por otra vía (B3).',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si todo sigue en orden, devuelve **resuelto** a AutoPost, que reevalúa las seis condiciones y decide si envía la postulación. Si alguna condición base dejó de cumplirse, devuelve **no viable** con el motivo.',
        tono: 'sentencia',
      },
    ],
    diagrama: [
      {
        tipo: 'nodo',
        variante: 'accion',
        texto: 'Volver a comprobar B1, B2, B3',
      },
      { tipo: 'nodo', variante: 'decision', texto: '¿Se puede continuar?' },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Sí',
            variante: 'si',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'fin',
                texto: 'Resuelto → vuelve a AutoPost',
              },
            ],
          },
          {
            etiqueta: 'No',
            variante: 'no',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'finMalo',
                texto: 'No viable (motivo B1/B2/B3)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'tramo-3b',
    numero: 'Tramo 3B',
    titulo: 'Caminos alternativos: sin respuesta o rechazo',
    abiertoInicial: false,
    chips: [
      {
        variante: 'desde',
        texto: 'Viene del Tramo 2 · Sin respuesta o rechazo',
      },
      { variante: 'fin', texto: 'Termina en: Vencido / Rechazado / No viable' },
    ],
    secciones: [
      {
        titulo: '¿Qué pasa acá?',
        texto:
          'Cuando la persona no respondió dentro del plazo o rechazó explícitamente completar lo pendiente, PostuAyuda cierra el caso y devuelve el estado correspondiente a AutoPost. Antes de cerrar por vencimiento, se vuelve a chequear la base.',
      },
      {
        titulo: '¿Qué revisa el sistema?',
        items: [
          'Si venció el plazo sin respuesta.',
          'Si la persona rechazó explícitamente.',
          'Si al re-chequear B1, B2 o B3 dejaron de cumplirse.',
        ],
      },
      {
        titulo: '¿Cómo puede terminar?',
        texto:
          'Si venció el plazo y la base sigue OK, devuelve **vencido**. Si la base dejó de cumplirse (vacante cerrada, postulación previa, etc.), devuelve **no viable** con el motivo. Si la persona rechazó, devuelve **rechazado**.',
        tono: 'supuesto',
      },
      {
        titulo: 'Nota sobre el diseño',
        texto:
          'El plazo de 7 días y el re-chequeo al reanudar son supuestos del grupo, no están en la sentencia. La sentencia solo dice "solicita lo pendiente y no envía"; todo lo demás es decisión de diseño documentada en propuesta-r2.md.',
      },
    ],
    diagrama: [
      {
        tipo: 'nodo',
        variante: 'decision',
        texto: '¿Qué pasó?',
      },
      {
        tipo: 'ramas',
        ramas: [
          {
            etiqueta: 'Venció el plazo',
            variante: 'no',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'accion',
                texto: 'Recomprobar B1, B2, B3',
              },
              {
                tipo: 'nodo',
                variante: 'decision',
                texto: '¿Se puede continuar?',
              },
              {
                tipo: 'ramas',
                ramas: [
                  {
                    etiqueta: 'Sí',
                    variante: 'si',
                    elementos: [
                      {
                        tipo: 'nodo',
                        variante: 'finAviso',
                        texto: 'Vencido',
                      },
                    ],
                  },
                  {
                    etiqueta: 'No',
                    variante: 'no',
                    elementos: [
                      {
                        tipo: 'nodo',
                        variante: 'finMalo',
                        texto: 'No viable (motivo B1/B2/B3)',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            etiqueta: 'Rechazó',
            variante: 'no',
            elementos: [
              {
                tipo: 'nodo',
                variante: 'finMalo',
                texto: 'Rechazado',
              },
            ],
          },
        ],
      },
      {
        tipo: 'nota',
        texto: 'PostuAyuda nunca envía la postulación.',
      },
    ],
  },
]

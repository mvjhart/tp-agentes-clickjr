// Genera el SVG de un diagrama Mermaid. La biblioteca se carga recién cuando
// hace falta (import dinámico), así no pesa en la carga inicial de la landing.

const VARIABLES_POR_TEMA = {
  light: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '13px',
    primaryColor: '#ffe9dc',
    primaryTextColor: '#2a2140',
    primaryBorderColor: '#fc9663',
    lineColor: '#5e5478',
    secondaryColor: '#f3eedc',
    tertiaryColor: '#ffffff',
    edgeLabelBackground: '#ffffff',
  },
  dark: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    fontSize: '13px',
    primaryColor: '#2c2347',
    primaryTextColor: '#faf8ec',
    primaryBorderColor: '#6f6590',
    lineColor: '#b9b0ce',
    secondaryColor: '#3a3057',
    tertiaryColor: '#221a38',
    edgeLabelBackground: '#221a38',
  },
}

let mermaidPendiente = null
let cola = Promise.resolve()
let contador = 0
const cache = new Map()

function cargarMermaid() {
  if (!mermaidPendiente) {
    mermaidPendiente = import('mermaid')
      .then((modulo) => modulo.default)
      .catch((error) => {
        mermaidPendiente = null
        throw error
      })
  }

  return mermaidPendiente
}

export function obtenerTemaActual() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
    ? 'dark'
    : 'light'
}

async function renderizar(codigo, tema) {
  const mermaid = await cargarMermaid()

  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: VARIABLES_POR_TEMA[tema],
    flowchart: {
      htmlLabels: true,
      curve: 'basis',
      padding: 20,
      useMaxWidth: true,
    },
  })

  contador += 1
  const { svg } = await mermaid.render(`diagrama-flujo-${contador}`, codigo)

  return svg
}

/**
 * Devuelve (como promesa) el SVG del diagrama. El resultado se guarda por
 * tema y código, y los renders se hacen de a uno para que no se pisen.
 */
export function generarSvg(codigo, tema = obtenerTemaActual()) {
  const clave = `${tema}::${codigo}`

  if (!cache.has(clave)) {
    const tarea = cola.then(() => renderizar(codigo, tema))

    cola = tarea.catch(() => {})
    cache.set(clave, tarea)
    tarea.catch(() => cache.delete(clave))
  }

  return cache.get(clave)
}

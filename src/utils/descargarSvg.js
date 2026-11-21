// Deja el SVG listo para guardarlo como archivo independiente.
// Se trabaja sobre el texto (sin DOMParser) para no depender de que el
// resultado sea XML perfecto: si no lo es, un parser devolvería un error.
function prepararSvg(svg) {
  let contenido = svg.replace(/<br\s*>/gi, '<br/>').replace(/&nbsp;/g, '&#160;')

  const apertura = contenido.match(/<svg\b[^>]*>/)

  if (apertura) {
    let nueva = apertura[0]
    const medidas = nueva.match(/viewBox="[\d.-]+ [\d.-]+ ([\d.]+) ([\d.]+)"/)

    // Mermaid usa width="100%"; como archivo suelto conviene un tamaño real.
    if (medidas && nueva.includes('width="100%"')) {
      nueva = nueva.replace(
        'width="100%"',
        `width="${Math.ceil(medidas[1])}" height="${Math.ceil(medidas[2])}"`,
      )
    }

    if (!/\sxmlns="/.test(nueva)) {
      nueva = nueva.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
    }

    contenido = contenido.replace(apertura[0], nueva)
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n${contenido}`
}

export function descargarSvg(svg, nombreArchivo) {
  const blob = new Blob([prepararSvg(svg)], {
    type: 'image/svg+xml;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const enlace = document.createElement('a')

  enlace.href = url
  enlace.download = nombreArchivo
  document.body.appendChild(enlace)
  enlace.click()
  document.body.removeChild(enlace)
  URL.revokeObjectURL(url)
}

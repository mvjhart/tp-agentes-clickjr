// Busca a qué tramo apunta un texto como "Continúa en el Tramo 3A".
// Devuelve el id del tramo de destino o null si no menciona ninguno
// (o si menciona el mismo tramo en el que está).
export function buscarDestino(texto, tramos, propioId) {
  const coincidencia = String(texto).match(/Tramo\s+(\d+[A-Za-z]?)/i)

  if (!coincidencia) return null

  const clave = coincidencia[1].toUpperCase()
  const destino = tramos.find(
    (tramo) =>
      String(tramo.numero)
        .replace(/^Tramo\s+/i, '')
        .toUpperCase() === clave,
  )

  return destino && destino.id !== propioId ? destino.id : null
}

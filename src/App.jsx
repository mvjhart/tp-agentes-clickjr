import { Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Inicio from './pages/Inicio/Inicio.jsx'
import PropuestaR1 from './pages/PropuestaR1/PropuestaR1.jsx'
import PropuestaR2 from './pages/PropuestaR2/PropuestaR2.jsx'
import NoEncontrada from './pages/NoEncontrada/NoEncontrada.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="propuesta-r1" element={<PropuestaR1 />} />
        <Route path="propuesta-r2" element={<PropuestaR2 />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}

export default App

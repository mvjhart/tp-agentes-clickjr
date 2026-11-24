import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import navigationItems from '../navigation/navigation.js'

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    const currentPage = navigationItems.find((item) => item.to === pathname)
    document.title = currentPage?.title ?? 'ClickJr | Página no encontrada'
  }, [pathname])

  return null
}

export default PageTitle

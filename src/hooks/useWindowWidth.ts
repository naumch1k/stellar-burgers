import { useState, useEffect } from 'react'

function useWindowWidth() {
  // TODO: add throttling
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth)

    return () => window.removeEventListener('resize', updateWindowWidth)
  }, [])

  return windowWidth
}

export default useWindowWidth

import { useState, useEffect } from 'react'
import useThrottle from './useThrottle'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => setWindowWidth(window.innerWidth)
  const throttledUpdateWindowWidth = useThrottle(updateWindowWidth, 1000)

  useEffect(() => {
    window.addEventListener('resize', throttledUpdateWindowWidth)

    return () => window.removeEventListener('resize', throttledUpdateWindowWidth)
  }, [throttledUpdateWindowWidth])

  return windowWidth
}

export default useWindowWidth

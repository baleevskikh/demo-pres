import { useCallback, useEffect, useState } from 'react'

// Обёртка над Fullscreen API: состояние + переключение на весь экран.
export function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const onChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onChange)
    return () => document.removeEventListener('fullscreenchange', onChange)
  }, [])

  const toggle = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      } else {
        await document.documentElement.requestFullscreen()
      }
    } catch (err) {
      // Браузер может отклонить запрос (например, без пользовательского жеста).
      console.warn('Fullscreen request failed:', err)
    }
  }, [])

  return { isFullscreen, toggle }
}

import { useLayoutEffect, type RefObject } from 'react'

export const useCheckContainer: THook = (isVisible, containerRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return

    const { position } = getComputedStyle(containerRef.current)
    if (position === 'static') containerRef.current.style.position = 'relative'
  }, [isVisible, containerRef])
}

type THook = (isVisible: boolean, containerRef: RefObject<HTMLElement>) => void

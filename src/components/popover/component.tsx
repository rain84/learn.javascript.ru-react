import clsx from 'clsx'
import { useDOMListener } from 'hooks'
import { useCallback, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { useContainer } from './hooks/use-container'
import { useSetPosition } from './hooks/use-set-position'
import styles from './styles.module.scss'

export const Popover = ({ className, children, containerRef }: TProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = useCallback(() => setIsVisible(true), [])
  const onMouseLeave = useCallback(() => setIsVisible(false), [])

  useDOMListener(containerRef, 'mouseenter', onMouseEnter)
  useDOMListener(containerRef, 'mouseleave', onMouseLeave)
  useSetPosition(containerRef, modalRef)
  useContainer(isVisible, containerRef)

  if (!isVisible || !containerRef.current) return null

  return createPortal(
    <div className={clsx(styles.root, className)} ref={modalRef}>
      {children}
    </div>,
    containerRef.current
  )
}

type TProps = {
  className?: string
  children: React.ReactNode
  containerRef: RefObject<HTMLElement>
}

import clsx from 'clsx'
import { useCallback, useRef, useState, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { useCheckContainer } from './hooks/use-check-container'
import { useDOMListener } from './hooks/use-dom-listener'
import { useSetPopoverPosition } from './hooks/use-set-popover-position'
import styles from './styles.module.scss'

export const Popover = ({ className, children, containerRef }: TProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const onMouseEnter = useCallback(() => setIsVisible(true), [])
  const onMouseLeave = useCallback(() => setIsVisible(false), [])

  useDOMListener(containerRef, 'mouseenter', onMouseEnter)
  useDOMListener(containerRef, 'mouseleave', onMouseLeave)
  useSetPopoverPosition(containerRef, modalRef)
  useCheckContainer(isVisible, containerRef)

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

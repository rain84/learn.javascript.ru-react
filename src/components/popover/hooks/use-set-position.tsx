import { useLayoutEffect, type RefObject } from 'react'

export const useSetPosition: THook = (containerRef, modalRef) => {
  useLayoutEffect(() => {
    if (!containerRef.current || !modalRef.current) return
    const targetNode = containerRef.current
    const modalNode = modalRef.current

    const targetRect = targetNode.getBoundingClientRect()
    modalNode.style.top = `${targetRect.height}px`
  }, [containerRef, modalRef])
}

type THook = (
  containerRef: RefObject<HTMLElement>,
  modalRef: RefObject<HTMLElement>
) => void

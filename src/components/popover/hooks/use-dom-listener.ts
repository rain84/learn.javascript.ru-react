import { useEffect } from 'react'

/**
 * This hook adds event listeners to the given element.
 * @param ref - The reference to the element to attach the event listeners to.
 * @param listeners - The event or events and their corresponding listeners to be added.
 * @param cb - The callback function to be added as an event listener.
 */
export const useDOMListener: THook = (ref, listener, cb) => {
  useEffect(() => {
    if (!ref.current) return

    const el = ref.current
    el.addEventListener(listener, cb)

    return () => {
      el.removeEventListener(listener, cb)
    }
  }, [ref, listener, cb])
}

type THook = (
  ref: React.RefObject<Element>,
  listeners: keyof HTMLElementEventMap,
  cb: () => void
) => void

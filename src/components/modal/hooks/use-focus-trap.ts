import { useEffect, type RefObject } from 'react'

/**
 * Sets up a focus trap to keep focus within a specified HTML element.
 *
 * @param {RefObject<HTMLElement>} ref - reference to the HTML element to trap focus within
 * @param {boolean} isEnabled - flag to enable or disable the focus trap
 * @return {void}
 */
export const useFocusTrap = (
  ref: RefObject<HTMLElement>,
  isEnabled = false
) => {
  useEffect(() => {
    if (!ref.current || !isEnabled) return

    const focusableElements = [
      ...ref.current.querySelectorAll<HTMLElement>(
        SELECTOR_FOR_FOCUSABLE_ELEMENTS
      ),
    ]

    const onKeyPressed = (e: KeyboardEvent): void => {
      if (e.key === 'Tab') {
        if (!focusableElements.length) return

        const isFirst =
          e.shiftKey && document.activeElement === focusableElements[0]

        if (isFirst) {
          focusableElements.at(-1)!.focus()
          e.preventDefault()
          return
        }

        const isLast =
          !e.shiftKey && document.activeElement === focusableElements.at(-1)

        if (isLast) {
          focusableElements[0].focus()
          e.preventDefault()
        }
      }
    }
    document.addEventListener('keydown', onKeyPressed)

    return () => {
      document.removeEventListener('keydown', onKeyPressed)
    }
  }, [ref, isEnabled])
}

const SELECTOR_FOR_FOCUSABLE_ELEMENTS =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'

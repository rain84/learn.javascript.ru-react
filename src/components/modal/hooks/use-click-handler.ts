import { useEffect } from 'react'

/**
 * Hook for handling click events outside of a specified element.
 *
 * @param {string} className - The class name of the specified element
 * @param {Function} callback - The callback function to be called when a click event occurs outside of the specified element
 * @param {boolean} isEnabled - A flag indicating whether the click handler is enabled or not
 * @return {void}
 */
export const useClickHandler: THook = (className, callback, isEnabled) => {
  useEffect(() => {
    if (!isEnabled) return

    document.body.style.overflow = 'hidden'

    const onClickOutside = (e: Event) => {
      if (!e.currentTarget) return
      if ((e.target as HTMLElement).classList.contains(className)) {
        callback()
      }
    }
    document.addEventListener('click', onClickOutside)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onClickOutside)
    }
  }, [isEnabled, callback, className])
}

type THook = (
  className: string,
  callback: () => void,
  isEnabled: boolean
) => void

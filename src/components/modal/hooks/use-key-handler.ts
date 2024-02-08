import { useEffect, type RefObject } from 'react'

/**
 * A custom hook that listens for a specific key press and triggers a callback when the key is pressed.
 *
 * @param {TKey | TKey[]} key - The key or array of keys to listen for
 * @param {() => void} callback - The function to call when the key is pressed
 * @param {boolean} isEnabled - Flag to enable or disable the key handler
 * @param {React.RefObject<HTMLElement> | null} ref - The optional reference to the element to listen for key events
 * @return {void}
 */
export const useKeyHandler: THook = (key, callback, isEnabled, ref) => {
  useEffect(() => {
    if (!isEnabled) return

    const onKeyPressed = (e: KeyboardEvent): void => {
      if (
        (Array.isArray(key) && key.includes(e.key as TKey)) ||
        key === e.key
      ) {
        callback()
        e.preventDefault()
      }
    }

    const node = ref?.current ?? document
    node.addEventListener('keydown', onKeyPressed as EventListener)

    return () => {
      node.removeEventListener('keydown', onKeyPressed as EventListener)
    }
  }, [key, callback, isEnabled, ref])
}

type THook = (
  key: TKey | TKey[],
  callback: () => void,
  isEnabled: boolean,
  ref?: RefObject<HTMLElement>
) => void

type TKey = 'Escape' | 'Enter'

import clsx from 'clsx'
import { useState } from 'react'
import styles from './style.module.scss'

export const Rating = ({ value = 0, editable = false, size, onChange }: TProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <span
      className={clsx(styles.root, editable && styles.cursor_pointer)}
      onMouseLeave={() => (setHoveredIndex(-1), setIsMouseOver(false))}
      onMouseOver={() => setIsMouseOver(true)}
    >
      {Array(size)
        .fill(0)
        .map((_, i) => (
          <span
            key={i}
            className={clsx(
              styles.star,

              // set class for the "rating"-star
              (!editable || (editable && !isMouseOver)) &&
                i < value &&
                styles.star_active,

              // set class for the hovered-stars
              editable && i <= hoveredIndex && styles.star_active
            )}
            onMouseEnter={() => editable && setHoveredIndex(i)}
            onMouseLeave={() => editable && setHoveredIndex(i - 1)}
            onClick={() => editable && onChange?.(i + 1)}
          >
            ⭐️
          </span>
        ))}
    </span>
  )
}

type TProps = {
  value: number
  size: number
  editable?: boolean

  onChange?: (rating: number) => void
}

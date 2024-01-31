import clsx from 'clsx'
import { useState } from 'react'
import styles from './style.module.scss'

export const Rating = ({
  rating = 0,
  canChange = false,
  size,
  onChange,
}: TProps) => {
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [isMouseOver, setIsMouseOver] = useState(false)

  return (
    <span
      className={clsx(styles.root, canChange && styles.cursor_pointer)}
      onMouseLeave={() => (setHoveredIndex(-1), setIsMouseOver(false))}
      onMouseOver={() => setIsMouseOver(true)}
    >
      {Array(size)
        .fill(0)
        .map((_, index) => (
          <span
            key={index}
            className={clsx(
              styles.star,

              // set class for the "rating"-star
              (!canChange || (canChange && !isMouseOver)) &&
                index < rating &&
                styles.star_active,

              // set class for the hovered-stars
              canChange && index <= hoveredIndex && styles.star_active
            )}
            onMouseEnter={() => canChange && setHoveredIndex(index)}
            onMouseLeave={() => canChange && setHoveredIndex(index - 1)}
            onClick={() => canChange && onChange?.(index + 1)}
          >
            ⭐️
          </span>
        ))}
    </span>
  )
}

type TProps = {
  rating: number
  size: number
  canChange?: boolean

  onChange?: (rating: number) => void
}

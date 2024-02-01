import clsx from 'clsx'
import type { FC, SetStateAction } from 'react'
import { createContext, useState } from 'react'
import styles from './styles.module.scss'

export const TabsContext = createContext({
  active: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setActive: (i: SetStateAction<number>) => {},
})

export const Tabs = ({ className, items, children: Component }: TProps) => {
  const [active, setActive] = useState(0)
  const isActiveTab = (index: number) => index === active

  return (
    <div className={className}>
      <ul className={styles.tabs}>
        {items.map((item, index) => (
          <li
            key={item.name}
            className={clsx(
              styles.tab,
              isActiveTab(index) && styles.tab_active
            )}
            onClick={() => setActive(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className={styles.tabs__body}>
        <Component {...items[active]} />
      </div>
    </div>
  )
}

export type TComponent = FC<{
  [K in string]: unknown
}>

type TProps = {
  items: ({ name: string } & { [K in string]: unknown })[]
  className?: string
  children: TComponent
}

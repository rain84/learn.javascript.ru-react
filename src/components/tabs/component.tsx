import clsx from 'clsx'
import { createContext, useState, type ReactNode } from 'react'
import { useIsActiveTab } from './hook'
import styles from './style.module.scss'

export const TabsContext = createContext({ active: 0 })

export const Tabs = ({ items, className, children }: TProps) => {
  const [active, setActive] = useState(0)

  return (
    <TabsContext.Provider value={{ active }}>
      <div className={className}>
        <ul className={styles.tabs}>
          {items.map(({ name }, i) => (
            <li
              key={name}
              className={clsx(styles.tab, {
                [styles.tab_active]: i === active,
              })}
              onClick={() => setActive(i)}
            >
              {name}
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    </TabsContext.Provider>
  )
}

const TabsItem = ({ children, index }: TProps_TabItem) => {
  const { isActiveTab } = useIsActiveTab(index)

  return (
    <div style={{ display: isActiveTab ? 'block' : 'none' }}>{children}</div>
  )
}

Tabs.Item = TabsItem

type TProps = {
  items: { name: string }[]
  className?: string
  children?: ReactNode
}

type TProps_TabItem = {
  children?: ReactNode
  index: number
}

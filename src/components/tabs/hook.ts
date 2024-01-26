import { useContext } from 'react'
import { TabsContext } from './component'

export const useIsActiveTab = (index: number) => ({
  isActiveTab: useContext(TabsContext).active === index,
})

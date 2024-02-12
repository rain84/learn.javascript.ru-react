import { Layout } from 'components/layout'
import { Restaurant } from 'components/restaurant'
import { Tabs } from 'components/ui/tabs'
import { AuthProvider } from 'contexts/auth'
import { useDispatch, useSelector } from 'hooks'
import { useEffect } from 'react'
import { restaurantSelectors } from 'redux_/entities/restaurant'
import { getRestaurants } from 'redux_/entities/restaurant/thunks/get-restaurants'
import styles from './styles/app.module.scss'

export const App = () => {
  const entities = useSelector(restaurantSelectors.selectAll)
  const restaurants = Object.values(entities)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRestaurants())
  }, [dispatch])

  if (!restaurants.length) return

  return (
    <AuthProvider>
      <Layout className={styles.layout}>
        <Tabs className={styles.tabs} items={Object.values(restaurants)}>
          {Restaurant}
        </Tabs>
      </Layout>
    </AuthProvider>
  )
}

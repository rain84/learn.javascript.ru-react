import { Layout } from 'components/layout'
import { Restaurant } from 'components/restaurant'
import { Tabs, type TComponent } from 'components/ui/tabs'
import { AuthProvider } from 'contexts/auth'
import { useSelector } from 'react-redux'
import { restaurantSelectors } from 'redux_/entities/restaurant'
import styles from './styles/app.module.scss'

export const App = () => {
  const restaurants = useSelector(restaurantSelectors.selectAll)

  return (
    <AuthProvider>
      <Layout className={styles.layout}>
        <Tabs className={styles.tabs} items={Object.values(restaurants)}>
          {Restaurant as TComponent}
        </Tabs>
      </Layout>
    </AuthProvider>
  )
}

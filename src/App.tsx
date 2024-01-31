import { Restaurant } from 'components/restaurant'
import { Layout } from './components/layout/component'
import { restaurants } from './constants/mock'
import styles from './styles/app.module.scss'
import { Tabs } from 'components/tabs'

export const App = () => {
  return (
    <Layout className={styles.layout}>
      <Tabs items={restaurants} className={styles.tabs}>
        <div className={styles.tabItems__container}>
          {restaurants.map((restaurant, i) => (
            <Tabs.Item key={restaurant.id} index={i}>
              <Restaurant {...restaurant} />
            </Tabs.Item>
          ))}
        </div>
      </Tabs>
    </Layout>
  )
}

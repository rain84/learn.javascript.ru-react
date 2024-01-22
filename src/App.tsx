import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { restaurants } from './constants/mock'
import styles from './styles/layout-restaurant.module.scss'

export const App = () => {
  return (
    <Layout className={styles.layout}>
      <div className={styles.container}>
        {restaurants.map(({ id, ...restaurant }) => (
          <Restaurant key={id} {...restaurant} />
        ))}
      </div>
    </Layout>
  )
}

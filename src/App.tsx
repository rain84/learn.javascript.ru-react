import { Restaurants } from 'components/restaurants'
import { Layout } from './components/layout/component'
import { restaurants } from './constants/mock'
import styles from './styles/app.module.scss'

export const App = () => {
  return (
    <Layout className={styles.layout}>
      <Restaurants restaurants={restaurants} />
    </Layout>
  )
}

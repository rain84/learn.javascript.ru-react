import { Restaurant } from 'components/restaurant'
import { Tabs, type TComponent } from 'components/ui/tabs'
import { AuthProvider } from 'contexts/auth'
import { StrictMode } from 'react'
import { Layout } from './components/layout/component'
import { restaurants } from './constants/mock'
import styles from './styles/app.module.scss'

export const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <Layout className={styles.layout}>
          <Tabs className={styles.tabs} items={restaurants}>
            {Restaurant as TComponent}
          </Tabs>
        </Layout>
      </AuthProvider>
    </StrictMode>
  )
}

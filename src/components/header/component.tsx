import { UserAuth } from 'components/user-auth'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.block__top}>
          <UserAuth className={styles.userAuth} />
        </div>
        <h1 className={styles.title}>Restaurant App</h1>
      </header>
    </div>
  )
}

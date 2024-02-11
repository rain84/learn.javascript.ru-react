import { Cart } from 'components/cart/component'
import { UserAuth } from 'components/user-auth'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.block__top}>
          <h1 className={styles.title}>Restaurant App</h1>
          <div className={styles.controls}>
            <UserAuth className={styles.userAuth} />
            <Cart className={styles.cart} />
          </div>
        </div>
      </header>
    </div>
  )
}

import styles from './style.module.scss'

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Restaurant App</h1>
      </header>
    </div>
  )
}

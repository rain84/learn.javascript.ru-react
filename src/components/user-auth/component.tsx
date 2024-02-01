import { EnterIcon, ExitIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { Modal } from 'components/modal'
import { Button, Input } from 'components/ui'
import { useAuth } from 'contexts/auth'
import { useRef, useState } from 'react'
import styles from './styles.module.scss'

export const UserAuth = ({ className }: TProps) => {
  const { name, isAuthorized } = useAuth.state()
  const { login, logout } = useAuth.API()
  const [open, setShowModal] = useState(false)
  const domNodes = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
  }

  const onOk = () => {
    if (!domNodes.name.current || !domNodes.email.current) return

    const name = domNodes.name.current.value.trim()
    const email = domNodes.email.current.value.trim()

    if (name === '' || email === '') {
      alert('All input fields are required')
      return
    }

    login({ name, email })
    setShowModal(false)
  }

  return (
    <div className={clsx(styles.root, className)}>
      {/* User is logged */}
      {isAuthorized && (
        <>
          <span className={styles.username}>User: {name}</span>
          <Button onClick={logout}>
            Log out <ExitIcon className={styles.icon} />
          </Button>
        </>
      )}

      {/* User is not logged */}
      {!isAuthorized && (
        <Button
          onClick={() => setShowModal(true)}
          className="table-cell leading-normal align-middle"
        >
          Log in <EnterIcon className={styles.icon} />
        </Button>
      )}

      <Modal open={open} onClose={() => setShowModal(false)}>
        <Modal.Content className={styles.modal__content}>
          {/* Name */}
          <div className={styles.input__container}>
            <label htmlFor="name">Name:</label>
            <Input
              ref={domNodes.name}
              type="text"
              id="name"
              aria-label="Name"
              autoFocus
              className={styles.input}
              placeholder={`Enter your name`}
            />
          </div>

          {/* email */}
          <div className={styles.input__container}>
            <label htmlFor="email">E-mail:</label>
            <Input
              ref={domNodes.email}
              type="email"
              id="email"
              required
              className={styles.input}
              placeholder={`Enter your email`}
            />
          </div>
        </Modal.Content>

        <Modal.Controls>
          <Button onClick={() => setShowModal(false)}>Cancel</Button>
          <Button onClick={onOk}>OK</Button>
        </Modal.Controls>
      </Modal>
    </div>
  )
}

type TProps = {
  className?: string
}

import { ReactNode } from 'react'
import { Footer } from '../footer/component'
import { Header } from '../header/component'

export const Layout = ({ children, className }: Props) => {
  return (
    <div className={className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
type Props = {
  children: ReactNode
  className?: string
}

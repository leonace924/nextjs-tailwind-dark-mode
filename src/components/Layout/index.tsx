import { ReactNode } from "react"
import Navbar from "@components/Navbar"
import styles from './styles.module.css'

interface ILayoutProps {
  children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout

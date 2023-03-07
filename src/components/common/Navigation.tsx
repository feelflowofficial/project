import styles from '@/styles/navigation.module.scss'
//import styles from '../../styles/navigation.module.scss'
import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      <Link className={styles.link} href="/login">
        Login
      </Link>
      <Link className={styles.link} href="/signup">
        SignUp
      </Link>
    </nav>
  )
}

import styles from '@/styles/navigation.module.scss'
//import styles from '../../styles/navigation.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

type logoutType = {
  item: string | null
}

export default function Navigation() {
  const router = useRouter()
  const [item, setItem] = useState<logoutType | null>(null)
  
  useEffect(() => {
    setItem(JSON.parse(localStorage.getItem('LoginUser') as string))
  }, [item])
  

  const logoutClick = useCallback(() => {
    localStorage.clear()
    router.push("/")
  }, [item])

  return (
    <nav className={styles.nav}>
      <Link className={styles.link} href="/">
        Home
      </Link>
      {!item && <Link className={styles.link} href="/login">
        Login
      </Link>
      }
      {!item && 
        <Link className={styles.link} href="/signup">
        SignUp
      </Link>
      }
      {item && <button onClick={logoutClick}>
        Logout
      </button>
      }
    </nav>
  )
}

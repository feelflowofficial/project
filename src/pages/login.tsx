import Link from 'next/link'
import styles from '@/styles/login.module.scss'

export default function Login() {
  return (
    <div>
      <h2>
        <Link className={styles.link} href="/">
          로그인
        </Link>
      </h2>

      <div>
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
      </div>

      <div>
        <button type="submit">로그인</button>
      </div>

      <div>
        <Link className={styles.link} href="/signup">
          회원가입
        </Link>
      </div>
    </div>
  )
}

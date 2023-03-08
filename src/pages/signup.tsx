import Link from 'next/link'
import styles from '@/styles/login.module.scss'
import {useState} from 'react'

type SignUpFormType = Record<'id' | 'password' | 'confirmPassword', string>
const initialFormState = {id: '', password: '', confirmPassword: ''}

export default function SignUp() {
  const [{id, password, confirmPassword}, setForm] =
    useState<SignUpFormType>(initialFormState)

  return (
    <section>
      <div className="s1">
        <img src="/Frame.png" />
      </div>

      <div className="s2">
        <h2 className={styles.login}>SignUp</h2>

        <p className={styles.p}>
          도미노의 미래! 개발자님, 반갑습니다👋
          <br />
          파일럿 프로젝트로 2023 Domino Rebuild를 멋지게 준비해봐요
        </p>

        <div className={styles.test}>
          <button className={styles.button}>카카오 로그인</button>

          <button className={styles.button}>Google 로그인</button>

          <button className={styles.button}>네이버 로그인</button>

          <input
            className={styles.input}
            type="text"
            name="id"
            placeholder="아이디"
            value={id}
          />
          <br />
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="비밀번호"
            value={password}
          />

          <button className={styles.button}>로그인</button>

          <label>
            아직 파일럿 계정이 없으신가요?
            <Link href="/signup">회원가입</Link>
          </label>
        </div>
      </div>
    </section>
  )
}

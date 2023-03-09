import Link from 'next/link'
import styles from '@/styles/signup.module.scss'
import {ChangeEvent, useCallback, useState} from 'react'
import { useRouter } from 'next/router'

type SignUpFormType = Record<'name' | 'id' | 'email' | 'password' | 'confirmPassword', string>
const initialFormState = {name: '', id: '', email: '', password: '', confirmPassword: ''}

export default function SignUp() {
  const router = useRouter()

  const [{name, id, email, password, confirmPassword}, setForm] =
    useState<SignUpFormType>(initialFormState)

  const changed = useCallback((key:string) => (e: ChangeEvent<HTMLInputElement>) =>{
    setForm(obj => ({...obj, [key]: e.target.value}))
  }, [])


  const signupAccount = useCallback(() => {
    console.log(name)
    console.log(id)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    localStorage.clear()
    localStorage.setItem('SignUpUser', JSON.stringify({name: name, id: id, email: email, password: password, confirmPassword: confirmPassword}))
    router.push("/login")
  }, [name, id, email, password, confirmPassword])

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
          <div className={styles.div}>
            <label className={styles.label}>
              이름
            </label>
            <input className={styles.input} type="text" name="name" onChange={changed('name')}/>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>
              아이디
            </label>
            <input className={styles.input} type="text" name="id" onChange={changed('id')}/>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>
              이메일 주소
            </label>
            <input className={styles.input} type="text" name="email" onChange={changed('email')}/>
          </div>

          <div className={styles.div}>
            <label className={styles.label}>
              비밀번호
            </label>
            <input className={styles.input} type="password" name="password" onChange={changed('password')}/>
          </div>

          <div className={styles.div}>
            <label className={styles.label} >
              비밀번호 확인
            </label>
            <input className={styles.input} type="password" name="confirmPassword" onChange={changed('confirmPassword')}/>
          </div>

          <Link href="/">
            <button className={styles.button}>
              이전
            </button>
          </Link>
          <button type="submit" className={styles.button} onClick={signupAccount}>다음</button>
        </div>
      </div>
    </section>
  )
}

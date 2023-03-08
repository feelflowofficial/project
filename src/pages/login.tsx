import Link from 'next/link'
import styles from '@/styles/login.module.scss'
import { ChangeEvent, useCallback, useState } from 'react'
import { useRouter } from 'next/router';

type LoginFormType = Record<'id' | 'password', string>
const initialFormState = {id: '', password: ''} 

export default function Login() {
  const router = useRouter();

  const [{id, password}, setForm] = useState<LoginFormType>(initialFormState)
  const changed = useCallback(
    (key:string) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm(obj => ({...obj, [key]: e.target.value}))
  }, [])

  const loginAccount = useCallback(() => {
    console.log(id)
    console.log(password)
    router.push("/")
  },[id, password])

  return (
    // <section>
    //   <div>
    //   <h2>
    //     <Link className={styles.link} href="/">
    //       로그인
    //     </Link>
    //   </h2>

    //   <div>
    //     <input type="text" name="id" placeholder="아이디" value={id} onChange={changed('id')}/>
    //     <input type="password" name="password" placeholder="비밀번호" value={password} onChange={changed('password')}/>
    //   </div>

    //   <div>
    //     <button type="submit" onClick={loginAccount}>로그인</button>
    //   </div>

    //   <div>
    //     <Link className={styles.link} href="/signup">
    //       회원가입
    //     </Link>
    //   </div>
    // </div>
    // </section>
    <section>
      <div className="s1">
          <img src="/Frame.png" />
      </div>

      <div className="s2">
        <h2 className={styles.login}>
          Login
        </h2>
        
        <p className={styles.p}>
        도미노의 미래! 개발자님, 반갑습니다👋
        <br/>
        파일럿 프로젝트로 2023 Domino Rebuild를 멋지게 준비해봐요
        </p>

        <div className={styles.test}>
          <button className={styles.button}>
            카카오 로그인
          </button>

          <button className={styles.button}>
            Google 로그인
          </button>

          <button className={styles.button}>
            네이버 로그인
          </button>

          <input className={styles.input} type="text" name="id" placeholder="아이디" value={id} onChange={changed('id')}/>
          <br/>
          <input className={styles.input} type="password" name="password" placeholder="비밀번호" value={password} onChange={changed('password')}/>

          <button className={styles.button} onClick={loginAccount}>
            로그인
          </button>

          
            <label>
              아직  파일럿 계정이 없으신가요?
              <Link href="/signup">
                회원가입
              </Link>
            </label>
        </div>
        
      </div>
    </section>
    
  )
}

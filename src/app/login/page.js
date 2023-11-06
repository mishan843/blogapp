'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './loginPage.module.css'

const Page = () => {
  const router = useRouter()
  console.log(router.query);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // useEffect(async() => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("login successful")

        let data = await response.json()
        localStorage.setItem("user", JSON.stringify(data.data));
        router.push('/')
      } else {
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
    // }, [router.query])
  };


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form >
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button onClick={handleSubmit} type='submit' className={styles.registerButton}>Login</button>
        </form>
        <p>Don't have accout? <Link href="/signup">Register now</Link></p>
        <div className={styles.socialButton}>Sign in with Google</div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default Page



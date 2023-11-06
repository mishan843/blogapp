'use client'

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './loginPage.module.css'

const Page = () => {
const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://blogapp-q8b0.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        alert("register success")
        router.push("/")
        let data = await response.json()
        localStorage.setItem("user", JSON.stringify(data));
      } else {
        console.error('Error signing up:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className={styles.container}> 
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit}>
          <input type="text" id="" placeholder='name' name='name' value={name} onChange={(e) => setName(e.target.value)} required/>
          <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <button type='submit' className={styles.registerButton}>Register</button>
        </form>
        <p>Already have accout? <Link href="/login">login</Link></p>
        
            <div className={styles.socialButton}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Github</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  )
}

export default Page



import React from 'react'
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
          <h2>Contact Us</h2>
        <div>
          <form className={styles.contactform}>
          <input type="text" placeholder='Name' />
          <input type="email" placeholder='Email'/>
          <textarea type="text" placeholder='Message' rows={4}/>
          <button>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactPage

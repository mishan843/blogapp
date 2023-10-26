"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
const AuthLinks = () => {
  const status = "notauthantication";
  const [open, setOpen] = useState(false);

  return (
    <>
      {status === "notauthantication" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Home</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
          {status === "notauthantication" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

"use client";

import React, { useEffect, useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const userData = localStorage.getItem("user");
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('user'))

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    router.push("/login");
    setIsLoggedIn("");
  };

  return (
    <>
      {isLoggedIn ? (
        <Link href="/" className={styles.link} onClick={handleLogout}>
          Logout
        </Link>
      ) : (
        <Link href="/signup" setIsLoggedIn={localStorage.getItem("user")}>
          Signup
        </Link>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {userData ? (
            <button className={styles.link} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link href="/signup">Signup</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

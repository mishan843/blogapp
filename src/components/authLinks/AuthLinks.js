"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 1,
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

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
        <Link href="/signup" setIsLoggedIn={localStorage.getItem("user")} className={styles.link}>
          Signup
        </Link>
      )}

      <motion.button className={styles.menu} onClick={() => setOpen(!open)} animate={open ? "open" : "closed"}>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </motion.button>
      {open && (
        <motion.div className={styles.responsiveMenu} variants={variants} animate={open ? "open" : "closed"}>
          <motion.div className={styles.responsiveLink} >
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/">Contact</Link>
            {userData ? (
              <button className={styles.link} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link href="/signup" className={styles.link}>Signup</Link>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default AuthLinks;

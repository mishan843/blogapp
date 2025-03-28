"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
  }

  // Close mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <header className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={closeMenu}>
            <img
              loading="eager"
              width={200}
              height="auto"
              title="bloggersGround logo"
              src="https://res.cloudinary.com/dcmgkwzbw/image/upload/v1705581808/dyicko2aqcdigghxianj.webp"
              alt="bloggersGround logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.links}>
          <ThemeToggle />
          <Link href="/" className={styles.link} onClick={closeMenu}>
            Home
          </Link>
          <Link href="/contact" className={styles.link} onClick={closeMenu}>
            Contact
          </Link>
          <Link href="/about" className={styles.link} onClick={closeMenu}>
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.menuButton} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Content */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ThemeToggle />
        <Link href="/" className={styles.mobileLink} onClick={closeMenu}>
          Home
        </Link>
        <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>
          Contact
        </Link>
        <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>
          About
        </Link>
      </div>
    </>
  )
}

export default Navbar
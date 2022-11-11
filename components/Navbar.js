import React from 'react'
import Link from 'next/link'
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <>
          <nav className={styles.navbar}>
            
        <ul className={styles.navul}>
          <Link href="/"><li className={styles.navli}>HOME</li></Link>
          <Link href="/about"><li className={styles.navli}>ABOUT</li></Link>
          <Link href="/blog"><li className={styles.navli}>BLOG</li></Link>
          <Link href="/contact"><li className={styles.navli}>CONTACT</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
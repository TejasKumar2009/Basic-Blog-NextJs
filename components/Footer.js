import React from 'react'
// import Image from 'next/dist/client/image'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
   <footer className={styles.footer}>
   <a
     href="#"
     rel="noopener noreferrer"
   >
     All Copyright Reserved
     <span className={styles.logo}>
       {/* <Image src="/logo.png" alt="Coding Hunters" width="72" height="16" /> */}
     </span>
   </a>
 </footer>
  )
}

export default Footer
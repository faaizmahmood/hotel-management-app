import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
        <footer id='footer' className={styles.footer}>
              <div>
                <p className={styles.footerpara}>© Copyright || I All Rights Reserved</p>
              </div>
              <div className={styles.footerIcons}>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-youtube"></i>
              </div>
        </footer>
    </>
  )
}

export default Footer
import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>@2025 lamamia All rights reserved</div>

      <div className={styles.socilicon}>
        <Image src="/1.png" alt="facebook" className={styles.icon} width={20} height={20} />
        <Image src="/2.png" alt="instagram" className={styles.icon} width={20} height={20} />
        <Image src="/3.png" alt="twitter" className={styles.icon} width={20} height={20} />
        <Image src="/4.png" alt="linkedin" className={styles.icon} width={20} height={20} />
      </div>


    </div>
  )
}

export default Footer


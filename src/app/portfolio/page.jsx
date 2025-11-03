import React from 'react'
import styles from './page.module.css'
import Link from "next/link"

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.sectiontitle}>My Portfolio Abhi</h1>
      <div className={styles.items}>
        <Link href='/portfolio/illustrations' className={styles.item}>
        <span className={styles.title}>illustrations</span>
        </Link>

         <Link href='/portfolio/websites' className={styles.item}>
        <span className={styles.title}>websites</span>
        </Link>

         <Link href='/portfolio/Application' className={styles.item}>
        <span className={styles.title}>Application</span>
        </Link>
      </div>
    </div>
  )
}

export default page

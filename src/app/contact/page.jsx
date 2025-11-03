import styles from './page.module.css'
import Image from "next/image"
import Button from "../../components/Button/Button"

const Page = () => {
  return (
    <div className={styles.container}>
       <h1 className={styles.title}>Let's Keep in Touch</h1>
       <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="images"
            fill
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='Name' className={styles.input} />
          <input type="text" placeholder='Email' className={styles.email} />
          <textarea cols='30' rows="5" className={styles.textarea} placeholder='Message'></textarea>
          <Button url="#" text="Send" />
        </form>
       </div>
    </div>
  )
}

export default Page

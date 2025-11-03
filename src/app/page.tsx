import Image from "next/image";
import styles from "./page.module.css";
import Button from "../components/Button/Button"


export default function Home() {
  return (
<div>

    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
           Better design for your digital products.
        </h1>
        <p className="desc">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image src="/hero.png" alt="hero images"
    width={600} 
    height={400} 
    style={{margin: "auto"}}
    className={styles.img}
  />
      </div>
    </div>
    
   
</div>
  );
}

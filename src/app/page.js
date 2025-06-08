import Image from "next/image";
import MainHeader from "../components/main-header/main-header";
import Link from "next/link";
import styles from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={styles.hero}>
            <h1>Next level food for next level Foodies</h1>
            <p>Taste and share food from all over the world</p>
          </div>
          <div className={styles.cta}>
            <Link href="/community">
              Join the community
            </Link>
            <Link href="/meals" >
              Explore meals
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}

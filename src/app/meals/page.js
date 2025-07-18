import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created
          <span className={styles.highlight}> by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself, It is easy and fun
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Preparing your meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

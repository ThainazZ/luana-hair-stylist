import Header from "./components/Header";
import Content from "./components/Content";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.contentMain}>
        <Content />
      </section>
      <section className={styles.feedMain}>
    <Feed />
      </section>
  
    </main>
  );
}

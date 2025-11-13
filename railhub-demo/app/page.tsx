import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>RailHub Demo</h1>
        <p className={styles.lead}>
          Welcome to the RailHub proof of concept. This Next.js application is the
          foundation for exploring Solana wallet connectivity and commuter rail
          loyalty features.
        </p>
        <p className={styles.note}>
          Solana wallet adapter packages are declared in <code>package.json</code> so
          the project is ready for integration as development continues.
        </p>
      </section>
    </main>
  );
}

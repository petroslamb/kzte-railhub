import { EscrowSimulator } from "../components/escrow-simulator";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <section className={styles.hero}>
          <div className={styles.pillRow}>
            <span className={styles.pill}>Solana Devnet</span>
            <span className={styles.pill}>USDC escrow</span>
            <span className={styles.pill}>Wallet Adapter</span>
          </div>
          <h1 className={styles.title}>
            RailHub – bilateral settlements for Kazakhstan ↔ UAE rail
          </h1>
          <p className={styles.lead}>
            Prototype the escrow and release flow for KZTE, powered by Solana
            Server Actions and the wallet adapter stack. Create simulated
            escrows, stage compliance checks, and release funds when bilateral
            controls clear.
          </p>
          <p className={styles.note}>
            Configure a custom RPC or base path via{" "}
            <code>NEXT_PUBLIC_SOLANA_RPC</code> and{" "}
            <code>NEXT_PUBLIC_BASE_PATH</code>. The PR preview workflow exports
            this build to GitHub Pages under a PR-specific directory.
          </p>
          <div className={styles.metrics}>
            <article className={styles.metricCard}>
              <p className={styles.metricValue}>36h</p>
              <p className={styles.metricLabel}>MVP sprint window</p>
            </article>
            <article className={styles.metricCard}>
              <p className={styles.metricValue}>2</p>
              <p className={styles.metricLabel}>Settlement actions</p>
            </article>
            <article className={styles.metricCard}>
              <p className={styles.metricValue}>0.00</p>
              <p className={styles.metricLabel}>Gas on Devnet</p>
            </article>
          </div>
        </section>

        <EscrowSimulator />
      </div>
    </main>
  );
}

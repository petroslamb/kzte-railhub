"use client";

import { useCallback, useMemo, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import styles from "./escrow-simulator.module.css";

type EscrowStatus = "idle" | "creating" | "ready" | "releasing" | "settled";

const statusCopy: Record<EscrowStatus, string> = {
  idle: "Connect a wallet to stage escrow",
  creating: "Escrow vault initializing…",
  ready: "Escrow funded – release when UAE compliance clears",
  releasing: "Releasing escrow to beneficiary…",
  settled: "Funds released. Flow complete.",
};

const timelineSteps = [
  "Wallet handshake (Phantom, Solflare, Torus)",
  "Create escrow vault & escrow USDC",
  "Compliance + FX approval",
  "Release escrow to UAE operator",
];

const statusThresholds: Record<EscrowStatus, number> = {
  idle: 0,
  creating: 1,
  ready: 2,
  releasing: 3,
  settled: 4,
};

const explorerUrl = (tx: string) =>
  `https://explorer.solana.com/tx/${tx}?cluster=devnet`;

export function EscrowSimulator() {
  const { connected } = useWallet();
  const [status, setStatus] = useState<EscrowStatus>("idle");
  const [createTx, setCreateTx] = useState<string | null>(null);
  const [releaseTx, setReleaseTx] = useState<string | null>(null);
  const [complianceHold, setComplianceHold] = useState(false);

  const statusVariant = useMemo(() => {
    if (status === "idle") return "warning";
    if (status === "creating" || status === "releasing") return "pending";
    return "success";
  }, [status]);

  const progress = useMemo(() => {
    return Math.min(1, statusThresholds[status] / timelineSteps.length);
  }, [status]);

  const simulateTx = () =>
    `DEVNET-${Math.random().toString(16).split(".")[1]?.slice(0, 12)}`;

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleCreate = useCallback(async () => {
    setStatus("creating");
    setComplianceHold(true);
    setCreateTx(null);
    setReleaseTx(null);
    await delay(1200);
    setCreateTx(simulateTx());
    setStatus("ready");
  }, []);

  const handleRelease = useCallback(async () => {
    setStatus("releasing");
    await delay(1400);
    setComplianceHold(false);
    setReleaseTx(simulateTx());
    setStatus("settled");
  }, []);

  const createDisabled = !connected || status === "creating";
  const releaseDisabled = status !== "ready" && status !== "releasing";

  return (
    <section className={styles.panel}>
      <header className={styles.panelHeader}>
        <div>
          <p className={styles.hint}>RailHub console</p>
          <h2 className={styles.panelTitle}>Escrow simulator</h2>
        </div>
        <span className={styles.badge}>Live on Devnet</span>
      </header>
      <div className={styles.walletRow}>
        <div>
          <p className={styles.hint}>Wallet status</p>
          <span data-variant={statusVariant} className={styles.statusBadge}>
            {statusCopy[status]}
          </span>
        </div>
        <WalletMultiButton />
      </div>
      <div className={styles.progressTrack} aria-hidden="true">
        <span
          className={styles.progressIndicator}
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className={styles.actions}>
        <button
          className={styles.button}
          disabled={createDisabled}
          onClick={handleCreate}
        >
          Create Escrow
        </button>
        <button
          className={`${styles.button} ${styles.buttonSecondary}`}
          disabled={releaseDisabled}
          onClick={handleRelease}
        >
          Release Escrow
        </button>
      </div>

      <div className={styles.timeline}>
        {timelineSteps.map((step, index) => {
          const active = statusThresholds[status] > index;
          return (
            <div key={step} className={styles.timelineItem}>
              <span
                className={styles.timelineDot}
                data-active={active}
                aria-hidden
              />
              <span>{step}</span>
            </div>
          );
        })}
      </div>

      <div>
        <p className={styles.hint}>Latest transactions</p>
        <div className={styles.txList}>
          <span>
            Vault funding:{" "}
            {createTx ? (
              <a
                className={styles.txLink}
                href={explorerUrl(createTx)}
                target="_blank"
                rel="noreferrer"
              >
                {createTx}
              </a>
            ) : (
              "—"
            )}
          </span>
          <span>
            Release to UAE Rail:{" "}
            {releaseTx ? (
              <a
                className={styles.txLink}
                href={explorerUrl(releaseTx)}
                target="_blank"
                rel="noreferrer"
              >
                {releaseTx}
              </a>
            ) : (
              "—"
            )}
          </span>
        </div>
      </div>

      <p className={styles.hint}>
        {complianceHold
          ? "Awaiting bilateral compliance + FX confirmation…"
          : "RailHub ready for the next settlement window."}
      </p>
    </section>
  );
}

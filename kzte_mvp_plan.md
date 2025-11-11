## KZTE RailHub MVP Build Plan

### Overview
This plan outlines the step-by-step process for creating a functional Proof-of-Concept (POC) / Minimum Viable Product (MVP) for the **KZTE RailHub** demo to be completed within ~36 hours before bounty submission. The goal is to simulate escrowed stablecoin settlements between Kazakhstan and the UAE using Solana Devnet (USDC as a KZTE proxy).

---

### 🧭 Phase 1 – Setup and Environment (0–4 hours)
**Objective:** Get the development environment ready and scaffold the core application.

**Tasks:**
1. Install dependencies:
   ```bash
   npx create-next-app railhub-demo
   cd railhub-demo
   npm install @solana/web3.js @solana/wallet-adapter-react @solana/wallet-adapter-react-ui @solana/wallet-adapter-wallets
   ```
2. Initialize project structure:
   ```bash
   mkdir src/components src/lib public
   ```
3. Create `.env.local` with Solana Devnet configuration.
4. Add **Phantom Wallet connect** using Solana Wallet Adapter:
   - Implement `ConnectionProvider` and `WalletProvider`.
   - Verify wallet connection popup.
5. Push to GitHub early for version control.

**Deliverables:**
- Working Next.js app with wallet connection.
- Phantom modal opens successfully.

---

### ⚙️ Phase 2 – Frontend Escrow Simulation (4–10 hours)
**Objective:** Build the visual and functional escrow simulation.

**Tasks:**
1. Add buttons:
   - `Create Escrow`
   - `Release Escrow`
2. Implement mock escrow flow with local state:
   ```tsx
   const [status, setStatus] = useState("idle");
   const [tx1, setTx1] = useState("");
   const [tx2, setTx2] = useState("");
   ```
3. Simulate API and blockchain actions using timeouts and fake transaction hashes.
4. Add Explorer link placeholders for each transaction.
5. Style with simple Tailwind CSS:
   - Center card layout
   - Two buttons, transaction links, and status text.

**Deliverables:**
- UI showing end-to-end flow: wallet connect → create escrow → release funds.
- Mock Explorer transaction links appear.

---

### 🔄 Phase 3 – Backend API + Docs (10–14 hours)
**Objective:** Create simple FastAPI backend and documentation to support the frontend.

**Tasks:**
1. Create FastAPI app (`app.py`) with minimal routes:
   - `POST /escrow` – create escrow record
   - `POST /escrow/{id}/release` – release funds
   - `GET /escrow/{id}` – check status
2. Implement in-memory JSON file or SQLite storage.
3. Generate **OpenAPI YAML** and **Postman collection**.
4. Create **README.md** with short setup and usage guide.

**Deliverables:**
- FastAPI running locally (`uvicorn app:app --reload`).
- API docs (openapi.yaml + postman.json).

---

### 📸 Phase 4 – Loom Demo (14–20 hours)
**Objective:** Record a concise, compelling demo walkthrough.

**Tasks:**
1. Prepare demo script:
   - **Intro (10s):** “This is RailHub — cross-border KZTE escrow payments on Solana.”
   - **Show wallet connect (15s).**
   - **Create escrow (40s).**
   - **Release funds (30s).**
   - **Conclusion (25s):** “Same flow will run on KZTE mainnet in AFSA’s sandbox.”
2. Record with Loom (max 2 minutes, one take).
3. Upload Loom and copy the share link.

**Deliverables:**
- 2-minute Loom video demonstrating the full workflow.

---

### 📦 Phase 5 – Packaging & Submission (20–24 hours)
**Objective:** Finalize assets and upload to Superteam Earn.

**Tasks:**
1. Prepare submission package:
   ```
   railhub-demo/
     web/
     api/
     README.md
     openapi.yaml
     screenshot.png
     loom.txt
   ```
2. Zip files and upload to the bounty form.
3. Fill form fields:
   - **Title:** KZTE RailHub – Real-World Cross-Border Rails
   - **Summary:** “Simulated escrow flow for KZTE stablecoin payments between KZ and UAE using Solana Devnet.”
   - **Links:** GitHub repo, Loom demo.
4. Verify deadline submission before timer expires.

**Deliverables:**
- Final zip ready for upload.
- Successful submission on Superteam Earn.

---

### 🧩 Optional Phase 6 – Enhancements (if time remains)
**Objective:** Add polish or lightweight realism.

**Tasks:**
- Add compliance flag simulation (boolean KYC check).
- Use a real Solana Devnet transfer with 0.001 SOL.
- Add dashboard panel showing escrow list.
- Integrate mock Jupiter quote (USDC ↔ KZTE).

**Deliverables:**
- Enhanced realism and perceived completeness.

---

### ✅ Summary of Goals
| Phase | Duration | Key Deliverable |
|--------|-----------|----------------|
| 1. Setup | 4h | Wallet connect working |
| 2. Frontend | 6h | Simulated escrow + Explorer links |
| 3. Backend | 4h | FastAPI API + docs |
| 4. Loom | 6h | 2-min demo video |
| 5. Submission | 4h | Packaged zip ready |
| 6. Enhancements | Optional | Extra realism |

---

**Outcome:** A visually convincing POC/MVP of RailHub that demonstrates KZTE’s feasibility for cross-border stablecoin settlements within the 36-hour window.


// ===== WEB 3.0 FRONT-END: WALLET INTEGRATION & DATA ON-CHAIN =====
// Sub-CPMK 54.2
//
// CATATAN CAKUPAN: kode ini HANYA membaca data on-chain (read-only) dari sisi
// front-end. Kita TIDAK menulis atau men-deploy smart contract di sini —
// itu topik rekayasa blockchain yang di luar cakupan mata kuliah desain web.
// Modul JS (pertemuan 13) menjadi dasar cara mengimpor & memakai library
// seperti ethers.js secara terstruktur.

const connectBtn = document.getElementById("connectBtn");
const walletInfo = document.getElementById("walletInfo");
const pesanStatus = document.getElementById("pesanStatus");

async function hubungkanWallet() {
  pesanStatus.textContent = "";

  // ----- 1. Cek apakah wallet (mis. MetaMask) terpasang di browser -----
  // window.ethereum disuntikkan otomatis oleh ekstensi wallet ke halaman web.
  if (typeof window.ethereum === "undefined") {
    pesanStatus.textContent =
      "MetaMask tidak terdeteksi. Install dari https://metamask.io untuk mencoba demo ini.";
    return;
  }

  connectBtn.disabled = true;
  connectBtn.textContent = "Menghubungkan...";

  try {
    // ----- 2. Minta izin pengguna untuk menghubungkan akun -----
    // Ini akan memunculkan pop-up MetaMask meminta persetujuan pengguna.
    // PENTING: proses ini TIDAK PERNAH meminta private key — hanya alamat publik.
    const provider = new ethers.BrowserProvider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const alamat = accounts[0];

    // ----- 3. Baca data on-chain: saldo & jaringan (read-only) -----
    const saldoWei = await provider.getBalance(alamat);
    const saldoEth = ethers.formatEther(saldoWei); // konversi dari satuan wei ke ETH
    const network = await provider.getNetwork();

    document.getElementById("alamatWallet").textContent = alamat;
    document.getElementById("saldoWallet").textContent = Number(saldoEth).toFixed(5);
    document.getElementById("jaringan").textContent = network.name;

    walletInfo.hidden = false;
    connectBtn.textContent = "Wallet Terhubung ✓";

  } catch (error) {
    // error umum: pengguna menolak permintaan koneksi di pop-up MetaMask
    console.error(error);
    pesanStatus.textContent = "Gagal terhubung: " + (error.message || "pengguna menolak permintaan.");
    connectBtn.disabled = false;
    connectBtn.textContent = "Hubungkan Wallet (MetaMask)";
  }
}

connectBtn.addEventListener("click", hubungkanWallet);

// ----- BONUS: contoh membaca data dari IPFS (Penyimpanan Desentralisasi) -----
// RPS menyebut IPFS sebagai bagian dari Web 3.0. Berbeda dari server biasa,
// IPFS mengambil file berdasarkan HASH kontennya, bukan lewat domain/URL biasa.
// Contoh ini hanya membaca (read-only) file publik lewat gateway IPFS,
// tidak perlu wallet atau biaya apa pun.
async function contohBacaIPFS() {
  // hash contoh: file teks "Hello World" yang umum dipakai sebagai demo IPFS
  const hashContoh = "QmUNLLsPACCz1vLxQVkXqqLX5R1X345qqfHbsf67hvA3Nn";
  const gatewayUrl = `https://ipfs.io/ipfs/${hashContoh}`;

  try {
    const res = await fetch(gatewayUrl);
    const teks = await res.text();
    console.log("Isi file dari IPFS:", teks);
    return teks;
  } catch (error) {
    console.error("Gagal mengambil dari IPFS (gateway publik kadang lambat/limit):", error);
  }
}
window.contohBacaIPFS = contohBacaIPFS; // panggil manual dari Console: contohBacaIPFS()

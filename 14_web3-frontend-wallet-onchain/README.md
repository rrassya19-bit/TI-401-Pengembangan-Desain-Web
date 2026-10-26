# Pertemuan 14 — Web 3.0 Front-End: Wallet Integration & Data On-Chain

**Sub-CPMK 54.2** — Mahasiswa mampu menghubungkan wallet dan menampilkan data on-chain pada antarmuka web menggunakan library JS, serta memahami risiko keamanan dasarnya.

## Cakupan (baca dulu sebelum praktik)
Sesuai RPS bagian "Batasan dan Pertimbangan Cakupan": demo ini **hanya sisi front-end**
(baca alamat wallet & saldo). Menulis/men-deploy smart contract **tidak** termasuk
cakupan mata kuliah ini.

## Isi
- `index.html` + `script.js` — tombol "Hubungkan Wallet" yang memakai `ethers.js` (CDN) untuk:
  1. Mendeteksi wallet (`window.ethereum`)
  2. Meminta izin koneksi (`eth_requestAccounts`)
  3. Membaca saldo & nama jaringan (read-only, `provider.getBalance`)
  4. **Bonus:** `contohBacaIPFS()` — contoh membaca file publik dari IPFS (penyimpanan desentralisasi) lewat gateway, dipanggil manual dari Console (F12) dengan mengetik `contohBacaIPFS()`. Menutup poin "IPFS" yang disebut di RPS bagian Teknologi & Tools.

## Cara mencoba
1. Install ekstensi browser **MetaMask** (https://metamask.io) — pakai jaringan testnet, jangan pakai wallet berisi aset asli untuk latihan.
2. Buka `index.html`, klik "Hubungkan Wallet", setujui pop-up MetaMask.

## Poin Keamanan Kritis (Sub-CPMK53.6)
- Aplikasi ini **tidak pernah** meminta private key/recovery phrase — hanya alamat publik.
- Ingatkan mahasiswa: kalau ada website yang minta private key/seed phrase, itu **selalu** phishing, tidak peduli seberapa meyakinkan tampilannya.

## Tugas Praktikum yang disarankan
1. Tambahkan tampilan jumlah transaksi wallet (`provider.getTransactionCount(alamat)`).
2. Diskusikan: dari sisi UX, bagaimana cara terbaik memberi tahu pengguna kalau mereka belum install wallet, tanpa membuat mereka panik?

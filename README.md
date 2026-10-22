# Rundown Kode Praktikum — TI401 Pengembangan Desain Web
Universitas Muhammadiyah Yogyakarta — S1 Teknologi Informasi

Rundown ini adalah kode pendukung praktikum untuk 16 pertemuan, mengikuti
persis tabel "Distribusi Sub-CPMK per 16 Pertemuan" pada RPS TI401 (versi
revisi dengan penambahan AI API & Web 3.0).

## Peta Folder ↔ Pertemuan

| # | Folder | Sub-CPMK | Topik |
|---|---|---|---|
| 1 | `01_html-dasar` | 51.1 | HTML Dasar |
| 2 | `02_html-dasar-lanjutan-form` | 51.1 | HTML Dasar (lanjutan) & HTML Form |
| 3 | `03_html-form-validasi` | 51.2 | HTML Form (lanjutan) & Validasi |
| 4 | `04_css-dasar` | 51.3 | CSS Dasar |
| 5 | `05_css-layout` | 51.4 | CSS Layout (Flexbox & Grid) |
| 6 | `06_bootstrap-dasar-layout` | 51.5 | Bootstrap Dasar & Layout |
| 7 | `07_mini-project-pengantar-ai-web3` | Integratif 51.1–51.5 | Mini Project Design + Pengantar AI & Web 3.0 (literasi, tanpa kode AI/Web3) |
| 8 | `08_UTS` | — | **Ujian Tengah Semester** (tidak ada kode) |
| 9 | `09_javascript-dasar` | 52.1 | JavaScript Dasar |
| 10 | `10_javascript-oop` | 52.2 | JavaScript OOP |
| 11 | `11_javascript-dom` | 52.3 | JavaScript DOM |
| 12 | `12_javascript-async-integrasi-ai-api` | 52.4 & 54.1 | JS Async, Fetch API & Integrasi AI API |
| 13 | `13_javascript-modules-bootstrap-component` | 52.5 | JS Modules & Bootstrap Form/Component |
| 14 | `14_web3-frontend-wallet-onchain` | 54.2 | Web 3.0 Front-End: Wallet Integration & Data On-Chain |
| 15 | `15_testing-debugging-evaluasi-kritis` | 53.1–53.6 | Testing, Debugging, Evaluasi Kritis & Refactoring |
| 16 | `16_UAS` | — | **Ujian Akhir Semester / Project Final** (tidak ada kode baru) |

## Cara menjalankan tiap folder

- **Folder 01–11 (HTML/CSS/JS dasar):** cukup buka `index.html` langsung di browser.
- **Folder 12 (AI API):** perlu Node.js. Lihat `README.md` di dalam folder (butuh `npm install` + isi `.env`).
- **Folder 13 (JS Modules):** butuh server lokal ringan (mis. `python3 -m http.server`) karena browser membatasi `import` ES Module dari `file://`. Lihat `README.md` di dalam folder.
- **Folder 14 (Web3 front-end):** buka `index.html` langsung, tapi butuh ekstensi browser MetaMask untuk mencoba fitur connect wallet.

## Progresi belajar (kenapa urutannya begini)
Setiap pertemuan sengaja dibangun di atas pertemuan sebelumnya:
HTML → Form → CSS → Layout → Bootstrap → (UTS) → JS Dasar → OOP → DOM →
Async+AI API → Modules+Bootstrap Component → Web3 Front-End → Testing kritis → (UAS).
Detail alasan keterkaitan antar-topik (terutama kenapa AI API taruh di
pertemuan 12 dan Web3 di pertemuan 14) ada di bagian "Keterkaitan Antar-Topik"
pada dokumen RPS.

## Prinsip keamanan yang dipraktikkan di rundown ini
- API key AI **tidak pernah** ditaruh di kode front-end — selalu lewat backend proxy (lihat folder 12).
- Fitur wallet **tidak pernah** meminta private key/seed phrase (lihat folder 14).
- Setiap folder yang melibatkan AI/Web3 disertai catatan evaluasi kritis (Sub-CPMK53.6), bukan cuma "cara pakai".

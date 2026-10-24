# Pertemuan 12 — JavaScript Async, Fetch API & Integrasi AI API

**Sub-CPMK 52.4 & 54.1** — Mahasiswa mampu menerapkan async/await untuk mengintegrasikan AI API, sekaligus mengenali batasan respons AI dan praktik aman pengelolaan API key.

## Arsitektur (penting dipahami, bukan cuma dijalankan)

```
Browser (public/script.js)  --fetch-->  Backend kita (server.js)  --fetch-->  AI API (Anthropic/OpenAI)
     (tidak pegang API key)                (API key ada di .env)
```

API key **tidak pernah** dikirim ke browser. Ini implementasi langsung dari poin
"praktik aman penyimpanan API key" di RPS bagian Teknologi & Tools.

## Isi
- `server.js` — backend Express, endpoint `POST /api/chat`, meneruskan pesan ke Anthropic Claude API, menangani error dengan try/catch.
- `public/index.html`, `public/style.css`, `public/script.js` — antarmuka chat sederhana, memakai `fetch` + `async/await` untuk memanggil backend sendiri.
- `.env.example` — contoh file environment variable.

## Cara menjalankan
```bash
cd 12_javascript-async-integrasi-ai-api
cp .env.example .env        # lalu isi ANTHROPIC_API_KEY di file .env
npm install
npm start
```
Buka `http://localhost:3000` di browser.

## Tes endpoint dulu sebelum pakai front-end (disarankan)
Sebelum mengandalkan tampilan chat, tes `POST /api/chat` langsung dulu pakai
Postman atau `curl`, supaya kalau ada error lebih mudah tahu apakah masalahnya
di backend atau di front-end:
```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Halo, siapa kamu?"}'
```
Kalau pakai Postman: buat request baru `POST http://localhost:3000/api/chat`,
tab Body → raw → JSON, isi `{"message": "Halo, siapa kamu?"}`.

## Tugas Praktikum yang disarankan
1. Ganti `model` di `server.js` atau sesuaikan dengan penyedia AI API lain (mis. OpenAI) — bandingkan formatnya.
2. Coba tanyakan sesuatu yang faktual dan sesuatu yang berupa opini ke chatbot ini. Diskusikan: bagian mana yang berpotensi *hallucination*? (bahan Sub-CPMK53.6 di pertemuan 15)
3. Coba matikan server (`Ctrl+C`) lalu kirim pesan dari browser — amati bagaimana blok `catch` di `script.js` menangani error jaringan tersebut.

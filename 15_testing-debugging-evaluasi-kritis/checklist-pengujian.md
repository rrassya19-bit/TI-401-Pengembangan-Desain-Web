# Checklist Pengujian Aplikasi Web
**Sub-CPMK 53.1–53.5** — dipakai untuk menguji hasil praktikum pertemuan 1-14.

## 1. HTML (Sub-CPMK53.1)
- [ ] Lolos validasi di https://validator.w3.org/ (0 error)
- [ ] Semua `<img>` punya atribut `alt`
- [ ] Struktur heading berurutan (h1 -> h2 -> h3, tidak meloncat)

## 2. CSS & Bootstrap — Responsivitas (Sub-CPMK53.2)
- [ ] Tampilan rapi di lebar HP (< 576px), tablet (768px), dan desktop (> 1200px)
- [ ] Tidak ada elemen yang overflow / terpotong di layar sempit
- [ ] Kontras warna teks vs background cukup jelas dibaca

## 3. JavaScript & DOM (Sub-CPMK53.3)
- [ ] Semua tombol/interaksi berfungsi sesuai yang diharapkan
- [ ] Tidak ada error merah di Console (F12) saat halaman dimuat & dipakai
- [ ] Input kosong/tidak valid ditangani dengan baik (tidak membuat aplikasi crash)

## 4. Performa & Asynchronous (Sub-CPMK53.4)
- [ ] Pemanggilan API (`fetch`) punya indikator loading (spinner/teks "Mengirim...")
- [ ] Ada penanganan kalau API lambat/gagal merespons (try/catch, pesan error yang jelas)

## 5. Evaluasi Kritis AI API & Web 3.0 (Sub-CPMK53.6) — WAJIB untuk fitur AI/Web3
- [ ] Sudah menguji chatbot dengan pertanyaan faktual — apakah jawabannya benar? (cek manual ke sumber lain)
- [ ] Sudah mencoba pertanyaan yang berpotensi membuat AI berhalusinasi (mis. tanya hal yang sangat spesifik/baru) — amati hasilnya
- [ ] API key AI **tidak** muncul di kode front-end (cek lewat "View Source" / tab Network di DevTools)
- [ ] Fitur wallet **tidak pernah** meminta private key/seed phrase ke pengguna
- [ ] Ada indikator jelas ke pengguna bahwa jawaban AI bisa saja salah (disclaimer)

## 6. Dokumentasi Refactoring (Sub-CPMK53.5)
- [ ] Ada catatan bug apa saja yang ditemukan dan bagaimana cara memperbaikinya
- [ ] Kode sudah dirapikan (indentasi konsisten, penamaan variabel jelas, komentar pada bagian rumit)

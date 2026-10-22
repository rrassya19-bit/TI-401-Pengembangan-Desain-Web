# Pertemuan 3 — HTML Form (Lanjutan) & Validasi

**Sub-CPMK 51.2** — Mahasiswa mampu merancang form interaktif dengan mempertimbangkan validasi dan usability.

## Isi
- `index.html` — **form yang persis sama** dengan pertemuan 2 (field: nama, email, nim, prodi, gender, setuju, pesan), sekarang ditambah atribut validasi HTML5 native: `required`, `minlength`, `maxlength`, `pattern`, `type="email"`. Sengaja dibuat literal melanjutkan file pertemuan 2 (bukan form baru) supaya mahasiswa melihat langsung bagaimana validasi "ditempelkan" ke form yang sudah ada.
- `style.css` — memakai pseudo-class `:valid` / `:invalid` supaya validasi terlihat visual (hijau/merah), tanpa satu baris JavaScript pun (JavaScript baru mulai pertemuan 9).

## Cara mencoba
Buka `index.html`, coba kosongkan field wajib lalu klik "Daftar" — browser akan menampilkan pesan validasi bawaan.

## Tugas Praktikum yang disarankan
1. Tambahkan atribut `pattern` untuk salah satu field baru buatan kalian sendiri (mis. nomor HP Indonesia: `pattern="08[0-9]{8,11}"`).
2. Refleksikan: validasi HTML5 native ini cukup untuk keamanan data, atau tetap perlu validasi di server? (Poin ini akan relevan lagi saat membahas keamanan API key di pertemuan 12.)

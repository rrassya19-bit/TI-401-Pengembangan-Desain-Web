# Pertemuan 13 — JavaScript Modules & Bootstrap Form/Component

**Sub-CPMK 52.5** — Mahasiswa mampu mengintegrasikan modul JS dan komponen Bootstrap dalam aplikasi web.

## Isi
- `modules/validasi.js` — fungsi validasi (named export + default export).
- `modules/ui.js` — fungsi untuk menampilkan Bootstrap Toast & Alert.
- `main.js` — entry point yang meng-`import` dari kedua module di atas, lalu menghubungkannya ke form.
- `index.html` — form Bootstrap + komponen Toast, memuat `main.js` dengan `<script type="module">`.

## Cara menjalankan
Karena pakai ES Modules, sebagian browser membatasi `import` untuk file yang dibuka langsung dari `file://`.
Jalankan lewat server lokal sederhana, contoh dengan Python:
```bash
cd 13_javascript-modules-bootstrap-component
python3 -m http.server 8080
```
Lalu buka `http://localhost:8080`.

## Tugas Praktikum yang disarankan
1. Tambahkan module baru `modules/format.js` berisi fungsi `formatRupiah(angka)`, lalu pakai di `main.js`.
2. Ganti komponen Toast dengan Bootstrap Modal untuk konfirmasi sebelum menyimpan produk.

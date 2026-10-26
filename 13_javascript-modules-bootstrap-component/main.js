// ===== main.js — entry point yang MENG-IMPORT dari modules/ =====
// Sub-CPMK 52.5
// Catatan: file ini dimuat di index.html dengan <script type="module">,
// itu wajib supaya import/export ES6 bisa berjalan di browser.

import validasiForm from "./modules/validasi.js";
import { tampilkanToast, tampilkanErrorList } from "./modules/ui.js";

const form = document.getElementById("formProduk");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // mencegah reload halaman saat submit

  const data = {
    nama: document.getElementById("nama").value,
    harga: document.getElementById("harga").value,
    email: document.getElementById("email").value,
  };

  const errors = validasiForm(data);
  tampilkanErrorList(errors);

  if (errors.length === 0) {
    tampilkanToast(`Produk "${data.nama}" berhasil disimpan!`, "success");
    form.reset();
  } else {
    tampilkanToast("Form belum valid, periksa kembali.", "danger");
  }
});

// ===== MODULE: validasi.js =====
// `export` membuat fungsi ini bisa dipakai (di-`import`) dari file lain.
// Ini adalah cara memecah kode jadi bagian-bagian kecil yang rapi (modular),
// alih-alih menumpuk semua logika dalam satu file besar.

export function validasiEmail(email) {
  const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pola.test(email);
}

export function validasiNamaProduk(nama) {
  return nama.trim().length >= 3;
}

export function validasiHarga(harga) {
  return Number(harga) > 0;
}

// contoh export default: satu nilai/fungsi utama dari module ini
export default function validasiForm({ nama, harga, email }) {
  const errors = [];
  if (!validasiNamaProduk(nama)) errors.push("Nama produk minimal 3 karakter.");
  if (!validasiHarga(harga)) errors.push("Harga harus lebih dari 0.");
  if (email && !validasiEmail(email)) errors.push("Format email tidak valid.");
  return errors; // array kosong berarti tidak ada error
}

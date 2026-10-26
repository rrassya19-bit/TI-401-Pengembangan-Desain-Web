// ===== TEKNIK DEBUGGING DASAR =====
// Sub-CPMK 53.3, 53.4, 53.5

// ----- 1. console.log vs console.table vs console.group -----
const mahasiswa = [
  { nama: "Budi", nilai: 85 },
  { nama: "Siti", nilai: 92 },
];

console.log("Cara biasa:", mahasiswa); // sulit dibaca kalau datanya banyak
console.table(mahasiswa);              // jauh lebih mudah dibaca dalam bentuk tabel

console.group("Proses penilaian");
console.log("Menghitung nilai Budi...");
console.log("Menghitung nilai Siti...");
console.groupEnd();

// ----- 2. `debugger` statement -----
// Kalau DevTools (F12) sedang terbuka, baris `debugger;` akan otomatis
// menghentikan eksekusi di titik itu, sehingga kalian bisa memeriksa
// nilai variabel satu per satu (mirip breakpoint).
function hitungDiskon(harga, persen) {
  const potongan = (harga * persen) / 100;
  // debugger; // <- aktifkan baris ini saat debugging manual
  return harga - potongan;
}
console.log("Harga setelah diskon:", hitungDiskon(100000, 10));

// ----- 3. Bug klasik #1: perbandingan tipe data (== vs ===) -----
console.log("Bug klasik '5' == 5  :", "5" == 5);   // true (tipe data dipaksa sama -> berbahaya)
console.log("Perbaikan '5' === 5 :", "5" === 5);   // false (lebih aman, tidak ada pemaksaan tipe)
// Rekomendasi: selalu pakai === dan !== kecuali punya alasan kuat memakai == / !=

// ----- 4. Bug klasik #2: lupa `return` di fungsi -----
function totalSalah(a, b) {
  a + b; // lupa "return" -> fungsi ini mengembalikan undefined
}
function totalBenar(a, b) {
  return a + b;
}
console.log("totalSalah(2,3):", totalSalah(2, 3)); // undefined
console.log("totalBenar(2,3):", totalBenar(2, 3)); // 5

// ----- 5. Selalu bungkus kode async dengan try/catch (lihat juga pertemuan 12) -----
async function contohFetchAman(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Server merespons status ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
    return null; // fallback, aplikasi tidak crash
  }
}

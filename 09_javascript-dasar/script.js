// ===== 1. VARIABEL =====
// let: nilainya bisa berubah. const: nilainya tetap (tidak boleh diubah).
let namaMahasiswa = "Budi";
const namaKampus = "Universitas Muhammadiyah Yogyakarta";

console.log("Nama:", namaMahasiswa);
console.log("Kampus:", namaKampus);

// ===== 2. TIPE DATA =====
let umur = 20;                 // number
let ipk = 3.75;                // number (desimal)
let aktif = true;              // boolean
let hobi = ["coding", "membaca", "olahraga"]; // array
let mahasiswa = {              // object
  nama: "Budi",
  semester: 4,
};

// ===== 3. OPERATOR =====
let totalSks = 20 + 4;         // operator aritmatika
let lulus = ipk >= 3.0;        // operator perbandingan -> boolean

// ===== 4. PERCABANGAN (if / else) =====
function statusKelulusan(nilai) {
  if (nilai >= 85) {
    return "A";
  } else if (nilai >= 70) {
    return "B";
  } else if (nilai >= 55) {
    return "C";
  } else {
    return "D";
  }
}
console.log("Status nilai 78:", statusKelulusan(78));

// ===== 5. PERULANGAN (loop) =====
console.log("Daftar hobi:");
for (let i = 0; i < hobi.length; i++) {
  console.log(`${i + 1}. ${hobi[i]}`);
}

// ===== 6. FUNGSI (function declaration & arrow function) =====
function hitungRataRata(a, b, c) {
  return (a + b + c) / 3;
}

// arrow function: cara singkat menulis fungsi (banyak dipakai di JS modern)
const hitungRataRataArrow = (a, b, c) => (a + b + c) / 3;

console.log("Rata-rata (function):", hitungRataRata(80, 75, 85));
console.log("Rata-rata (arrow):", hitungRataRataArrow(80, 75, 85));

// ===== 7. CONTOH INTERAKTIF: kalkulator nilai akhir =====
// Bobot: Tugas 30%, UTS 30%, UAS 40% (contoh — sesuaikan dgn kebijakan mata kuliah)
document.getElementById("hitungBtn").addEventListener("click", function () {
  const tugas = Number(document.getElementById("tugas").value);
  const uts = Number(document.getElementById("uts").value);
  const uas = Number(document.getElementById("uas").value);

  const nilaiAkhir = tugas * 0.3 + uts * 0.3 + uas * 0.4;
  const huruf = statusKelulusan(nilaiAkhir);

  document.getElementById("hasil").textContent =
    `Nilai Akhir: ${nilaiAkhir.toFixed(2)} (Grade ${huruf})`;
});

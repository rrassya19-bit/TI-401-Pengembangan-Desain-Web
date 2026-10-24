// ===== JAVASCRIPT DOM: SELEKSI, EVENT, MANIPULASI ELEMEN =====
// Sub-CPMK 52.3

// ----- 1. SELEKSI ELEMEN -----
const inputTugas = document.getElementById("inputTugas");
const tambahBtn = document.querySelector("#tambahBtn"); // querySelector: lebih fleksibel (bisa pakai class/tag)
const daftarTugas = document.getElementById("daftarTugas");
const ringkasan = document.getElementById("ringkasan");

let semuaTugas = []; // menyimpan data tugas di memori (array of object)

// ----- 2. FUNGSI RENDER: menggambar ulang tampilan dari data -----
function render() {
  // kosongkan dulu isi list sebelum digambar ulang
  daftarTugas.innerHTML = "";

  semuaTugas.forEach((tugas, index) => {
    // createElement: membuat elemen baru secara dinamis
    const li = document.createElement("li");
    if (tugas.selesai) li.classList.add("selesai");

    const span = document.createElement("span");
    span.textContent = tugas.teks;

    const hapusBtn = document.createElement("button");
    hapusBtn.textContent = "Hapus";

    // ----- 3. EVENT HANDLING -----
    span.addEventListener("click", () => {
      tugas.selesai = !tugas.selesai; // toggle status selesai
      render();
    });

    hapusBtn.addEventListener("click", () => {
      semuaTugas.splice(index, 1); // hapus dari array berdasarkan posisi
      render();
    });

    li.appendChild(span);
    li.appendChild(hapusBtn);
    daftarTugas.appendChild(li); // pasang elemen baru ke dalam DOM
  });

  const jumlahSelesai = semuaTugas.filter((t) => t.selesai).length;
  ringkasan.textContent = `${jumlahSelesai} dari ${semuaTugas.length} tugas selesai.`;
}

// ----- 4. EVENT: klik tombol tambah -----
tambahBtn.addEventListener("click", () => {
  const teks = inputTugas.value.trim();
  if (teks === "") return; // validasi sederhana, jangan tambah tugas kosong

  semuaTugas.push({ teks: teks, selesai: false });
  inputTugas.value = ""; // kosongkan input setelah ditambahkan
  render();
});

// ----- 5. EVENT: tekan Enter di input juga menambah tugas -----
inputTugas.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    tambahBtn.click();
  }
});

// data awal contoh
semuaTugas = [
  { teks: "Mengerjakan tugas CSS Layout", selesai: true },
  { teks: "Belajar DOM Manipulation", selesai: false },
];
render();

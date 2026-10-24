// ===== FRONT-END: FETCH API + ASYNC/AWAIT =====
// Sub-CPMK 52.4 & 54.1
//
// Perhatikan: front-end di sini TIDAK memanggil AI API secara langsung.
// Front-end hanya memanggil backend kita sendiri di "/api/chat" (lihat server.js).
// Ini praktik aman yang dibahas di RPS bagian Etika, Keamanan & Berpikir Kritis.

const chatBox = document.getElementById("chatBox");
const pesanInput = document.getElementById("pesanInput");
const kirimBtn = document.getElementById("kirimBtn");

// ----- STANDARD LIBRARY: menyimpan riwayat chat di memori -----
// (bagian dari Sub-CPMK52.4: "...Fetch API, dan Standard Library")
// riwayatChat memakai Array (Standard Library JS) untuk menyimpan setiap pesan.
let riwayatChat = [];

function tambahPesan(teks, jenis) {
  // Date (Standard Library) untuk mencatat waktu setiap pesan
  const waktu = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  riwayatChat.push({ teks, jenis, waktu }); // Array.push()

  const div = document.createElement("div");
  div.className = `msg ${jenis}`; // jenis: "user" | "ai" | "error"
  div.textContent = `${teks}`;

  const waktuSpan = document.createElement("span");
  waktuSpan.className = "waktu";
  waktuSpan.textContent = waktu;
  div.appendChild(waktuSpan);

  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight; // auto-scroll ke pesan terbaru
}

// Contoh lain pemakaian Standard Library: Array.filter() + Array.map()
// untuk menghitung ringkasan riwayat chat (dipanggil dari Console untuk didemokan)
function ringkasanChat() {
  const jumlahDariAI = riwayatChat.filter((pesan) => pesan.jenis === "ai").length;
  const daftarWaktu = riwayatChat.map((pesan) => pesan.waktu); // Array.map()
  return { totalPesan: riwayatChat.length, jumlahDariAI, daftarWaktu };
}
window.ringkasanChat = ringkasanChat; // supaya bisa dipanggil manual dari Console (F12)

// ----- ASYNC FUNCTION: kata kunci `async` membuat fungsi ini
// bisa memakai `await` di dalamnya, dan otomatis mengembalikan sebuah Promise -----
async function kirimPesan() {
  const teks = pesanInput.value.trim();
  if (teks === "") return;

  tambahPesan(teks, "user");
  pesanInput.value = "";
  kirimBtn.disabled = true;
  kirimBtn.textContent = "Mengirim...";

  try {
    // `await` menunggu Promise dari fetch() selesai sebelum lanjut ke baris berikutnya,
    // tanpa memblokir halaman (kode lain tetap bisa jalan sementara menunggu)
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: teks }),
    });

    const data = await response.json();

    if (!response.ok) {
      // penanganan error dari server (mis. API key belum diset, AI API down, dll.)
      tambahPesan(`Error: ${data.error}`, "error");
      return;
    }

    tambahPesan(data.reply, "ai");

  } catch (error) {
    // penanganan error jaringan (mis. server backend belum dijalankan)
    console.error(error);
    tambahPesan("Gagal terhubung ke server. Pastikan 'npm start' sudah dijalankan.", "error");
  } finally {
    kirimBtn.disabled = false;
    kirimBtn.textContent = "Kirim";
  }
}

kirimBtn.addEventListener("click", kirimPesan);
pesanInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") kirimPesan();
});

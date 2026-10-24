# Materi Literasi: Pengantar Teknologi Web Modern (Tanpa Kode)

Bagian ini **tidak berisi praktik coding** — tujuannya membekali konsep dasar
sebelum mahasiswa praktik langsung: AI API di pertemuan 12, Web 3.0 di
pertemuan 14. Cocok dipakai sebagai bahan diskusi/kuliah singkat di sesi ini.

## 1. Evolusi Web 1.0 → 2.0 → 3.0

| Era | Ciri Utama | Contoh |
|---|---|---|
| Web 1.0 | Read-only, statis, satu arah (situs seperti "brosur digital") | Website company profile lama |
| Web 2.0 | Read-write, interaktif, konten dibuat pengguna | Media sosial, blog, marketplace |
| Web 3.0 | Read-write-own, desentralisasi, data dimiliki pengguna sendiri (bukan platform) | Aplikasi berbasis blockchain (DApp), wallet crypto |

## 2. Apa itu AI Generatif / LLM (Large Language Model)?

- LLM adalah model yang dilatih dari sangat banyak teks untuk **memprediksi kata berikutnya** — sehingga bisa menghasilkan teks yang natural.
- LLM diakses lewat **AI API**: aplikasi kita mengirim teks (prompt), API mengembalikan teks hasil (respons), mirip API pada umumnya (lihat pertemuan 12).
- **Keterbatasan penting** (harus dipahami sebelum dipakai di aplikasi nyata):
  - *Hallucination* — model bisa menghasilkan informasi yang terdengar meyakinkan tapi salah/tidak nyata.
  - *Bias* — hasil bisa mencerminkan bias yang ada di data pelatihan.
  - *Tidak selalu konsisten* — pertanyaan yang sama bisa menghasilkan jawaban berbeda.
  - Karena itu, keluaran AI **tidak boleh ditelan mentah-mentah** — perlu dievaluasi kritis (ini nanti jadi Sub-CPMK53.6 di pertemuan 15).

## 3. Apa itu Blockchain, Wallet, dan Smart Contract? (Konseptual)

- **Blockchain** — buku catatan (ledger) digital yang disalin ke banyak komputer sekaligus, sehingga sulit diubah sepihak.
- **Wallet** (mis. MetaMask) — aplikasi untuk menyimpan identitas/aset digital pengguna serta menandatangani transaksi. Wallet punya *alamat publik* (boleh dibagikan) dan *private key* (**tidak boleh** pernah dibagikan ke siapa pun, termasuk ke developer/dosen).
- **Smart contract** — program yang berjalan di atas blockchain, otomatis dieksekusi kalau syarat terpenuhi. Di mata kuliah ini kita **hanya memahami konsepnya**, tidak menulis kode smart contract (fokusnya di sisi front-end — lihat pertemuan 14).
- **DApp (Decentralized Application)** — aplikasi web biasa (HTML/CSS/JS) yang terhubung ke blockchain lewat wallet, bukan ke server terpusat.

## 4. Diskusi Kelas (disarankan)

1. Menurut kalian, fitur apa di aplikasi sehari-hari yang sebenarnya memakai AI API di baliknya?
2. Apa risiko kalau developer menaruh API key langsung di kode front-end yang bisa dilihat siapa saja lewat "View Source"?
3. Kenapa private key wallet tidak boleh pernah diminta oleh aplikasi/website manapun?

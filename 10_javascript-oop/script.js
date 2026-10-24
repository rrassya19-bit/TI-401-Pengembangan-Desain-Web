// ===== JAVASCRIPT OOP (Object Oriented Programming) =====
// Sub-CPMK 52.2: struktur aplikasi modular dengan class & object

// ----- 1. CLASS & CONSTRUCTOR -----
class Produk {
  // constructor dijalankan otomatis saat objek dibuat dengan `new`
  constructor(nama, harga, stok) {
    this.nama = nama;
    this.harga = harga;
    this.stok = stok;
  }

  // method biasa
  info() {
    return `${this.nama} - Rp${this.harga.toLocaleString("id-ID")} (stok: ${this.stok})`;
  }

  kurangiStok(jumlah) {
    if (jumlah > this.stok) {
      console.log(`Stok ${this.nama} tidak cukup!`);
      return false;
    }
    this.stok -= jumlah;
    return true;
  }
}

const laptop = new Produk("Laptop", 8500000, 10);
console.log(laptop.info());
laptop.kurangiStok(3);
console.log(laptop.info());

// ----- 2. INHERITANCE (pewarisan) dengan extends & super -----
// ProdukDiskon "mewarisi" semua sifat Produk, lalu menambah kemampuan baru
class ProdukDiskon extends Produk {
  constructor(nama, harga, stok, persenDiskon) {
    super(nama, harga, stok); // panggil constructor induk (Produk)
    this.persenDiskon = persenDiskon;
  }

  hargaSetelahDiskon() {
    return this.harga - (this.harga * this.persenDiskon) / 100;
  }

  // override method info() milik induk
  info() {
    return `${super.info()} | Diskon ${this.persenDiskon}% -> Rp${this.hargaSetelahDiskon().toLocaleString("id-ID")}`;
  }
}

const mouse = new ProdukDiskon("Mouse Wireless", 250000, 20, 15);
console.log(mouse.info());

// ----- 3. ENCAPSULATION sederhana dengan # (private field, ES2022) -----
class Akun {
  #saldo; // # menandakan field ini privat, tidak bisa diakses langsung dari luar class

  constructor(saldoAwal) {
    this.#saldo = saldoAwal;
  }

  setor(jumlah) {
    this.#saldo += jumlah;
  }

  cekSaldo() {
    return this.#saldo;
  }
}

const akun = new Akun(100000);
akun.setor(50000);
console.log("Saldo akun:", akun.cekSaldo());
// akun.#saldo -> ini akan error kalau dicoba, karena #saldo bersifat privat

// ----- 4. Array of Objects: pola umum sebelum masuk ke DOM (pertemuan 11) -----
const daftarProduk = [laptop, mouse, new Produk("Keyboard", 350000, 15)];

daftarProduk.forEach((produk) => {
  console.log("-", produk.info());
});

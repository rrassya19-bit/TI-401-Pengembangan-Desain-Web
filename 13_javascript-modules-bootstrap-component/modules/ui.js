// ===== MODULE: ui.js =====
// Berisi fungsi-fungsi untuk menampilkan feedback ke pengguna
// lewat komponen Bootstrap (Toast & Alert), dipisah dari logika validasi.

export function tampilkanToast(pesan, jenis = "success") {
  // jenis: "success" | "danger"
  const toastEl = document.getElementById("liveToast");
  const toastBody = document.getElementById("toastBody");

  toastEl.classList.remove("text-bg-success", "text-bg-danger");
  toastEl.classList.add(jenis === "success" ? "text-bg-success" : "text-bg-danger");
  toastBody.textContent = pesan;

  // bootstrap.Toast tersedia secara global karena bootstrap.bundle.min.js dimuat di index.html
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
}

export function tampilkanErrorList(errors) {
  const container = document.getElementById("errorContainer");
  container.innerHTML = "";

  if (errors.length === 0) {
    container.classList.add("d-none");
    return;
  }

  container.classList.remove("d-none");
  const ul = document.createElement("ul");
  ul.className = "mb-0";
  errors.forEach((err) => {
    const li = document.createElement("li");
    li.textContent = err;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

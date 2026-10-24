// ===== BACKEND PROXY UNTUK AI API =====
// Sub-CPMK 52.4 & 54.1
//
// KENAPA PAKAI BACKEND, TIDAK MEMANGGIL AI API LANGSUNG DARI BROWSER?
// Kalau API key ditaruh di kode front-end (script.js yang dikirim ke browser),
// siapa pun bisa membukanya lewat "View Source" / DevTools dan mencuri key itu.
// Solusinya: front-end memanggil BACKEND kita sendiri (endpoint /api/chat),
// lalu BACKEND (yang key-nya tersimpan aman di server, lewat file .env)
// yang meneruskan permintaan ke AI API. Browser tidak pernah melihat API key.

require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // sajikan index.html & script.js

// Endpoint yang dipanggil oleh front-end (public/script.js)
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    if (!userMessage || typeof userMessage !== "string") {
      return res.status(400).json({ error: "Field 'message' wajib diisi." });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return res.status(500).json({
        error: "ANTHROPIC_API_KEY belum diset. Salin .env.example menjadi .env lalu isi key kalian.",
      });
    }

    // ----- Pemanggilan AI API pakai async/await -----
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY, // key aman, tidak pernah dikirim ke browser
        "anthropic-version": "2023-06-01",
      },
      // JSON.stringify (Standard Library JS) mengubah object JS menjadi teks JSON
      body: JSON.stringify({
        model: "claude-3-5-haiku-latest",
        max_tokens: 300,
        messages: [{ role: "user", content: userMessage }],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("AI API error:", response.status, errorBody);
      return res.status(502).json({ error: "Gagal menghubungi AI API. Coba lagi nanti." });
    }

    const data = await response.json();
    const teksJawaban = data.content?.[0]?.text ?? "(tidak ada respons)";

    res.json({ reply: teksJawaban });

  } catch (error) {
    // penting: selalu bungkus pemanggilan API eksternal dengan try/catch
    console.error("Server error:", error);
    res.status(500).json({ error: "Terjadi kesalahan di server." });
  }
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

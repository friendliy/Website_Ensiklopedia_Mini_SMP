// Menampilkan daftar artikel di index.html
window.onload = function () {
  const listContainer = document.getElementById("artikelList");
  const searchBox = document.getElementById("searchBox");

  if (listContainer) {
    tampilkanArtikel(artikelData);
    
    // Fitur pencarian
    searchBox.addEventListener("input", function () {
      const keyword = this.value.toLowerCase();
      const hasil = artikelData.filter(a => 
        a.judul.toLowerCase().includes(keyword) || 
        a.kategori.toLowerCase().includes(keyword)
      );
      tampilkanArtikel(hasil);
    });
  }

  // Menampilkan artikel di artikel.html
  const urlParams = new URLSearchParams(window.location.search);
  const artikelId = urlParams.get("id");
  if (artikelId) {
    const artikel = artikelData.find(a => a.id == artikelId);
    if (artikel) {
      document.getElementById("judulArtikel").textContent = artikel.judul;
      
      // Menampilkan konten dengan video YouTube
      let kontenLengkap = artikel.konten;
      
      // Tambahkan video YouTube jika ada
      if (artikel.videoYoutube) {
        kontenLengkap += tampilkanVideoArtikel(artikel);
      }
      
      // Tambahkan link materi
      if (artikel.linkMateri) {
        kontenLengkap += `
          <div class="link-materi">
            <h3>📚 Pelajari Lebih Lanjut</h3>
            <p>Untuk materi yang lebih lengkap dan mendalam, silakan kunjungi:</p>
            <a href="${artikel.linkMateri}" target="_blank" class="btn-link-materi">
              🔗 Cari Materi Lengkap di Google
            </a>
          </div>
        `;
      }
      
      document.getElementById("kontenArtikel").innerHTML = kontenLengkap;
    }
  }
};

// Fungsi menampilkan artikel
function tampilkanArtikel(data) {
  const listContainer = document.getElementById("artikelList");
  listContainer.innerHTML = "";
  data.forEach(a => {
    const card = document.createElement("div");
    card.className = "artikelCard";
    card.innerHTML = `
      <h3>${a.judul}</h3>
      <p><b>Kategori:</b> ${a.kategori}</p>
      <div class="card-actions">
        <a href="artikel.html?id=${a.id}" class="btn-baca">Baca Selengkapnya</a>
        ${a.videoYoutube ? createVideoButton(a.videoYoutube, a.judul) : ''}
        ${a.linkMateri ? `<a href="${a.linkMateri}" target="_blank" class="btn-link-google">🔗 Materi Lengkap</a>` : ''}
      </div>
    `;
    listContainer.appendChild(card);
  });
}

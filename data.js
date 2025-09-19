const artikelData = [
  {
    id: 1,
    kategori: "IPA",
    judul: "Sistem Tata Surya",
    konten: `
      <p>Tata Surya adalah kumpulan benda langit yang terdiri atas Matahari sebagai pusatnya, 
      dan semua objek yang terikat oleh gravitasi Matahari. Objek-objek tersebut meliputi 
      delapan planet utama, planet kerdil, asteroid, komet, meteoroid, dan satelit alami.</p>

      <p>🌞 <b>Matahari</b> adalah bintang yang menjadi pusat tata surya, dengan diameter sekitar 
      1,39 juta km. Energi dari Matahari berasal dari reaksi fusi nuklir di dalam intinya, 
      yang memancarkan cahaya dan panas ke seluruh Tata Surya.</p>

      <p>🌍 <b>Planet dalam</b> (Merkurius, Venus, Bumi, Mars) memiliki permukaan padat 
      dan jarak relatif dekat dengan Matahari.</p>

      <p>🪐 <b>Planet luar</b> (Jupiter, Saturnus, Uranus, Neptunus) disebut raksasa gas/es.</p>

      <p>Selain planet, terdapat juga benda langit lain:</p>
      <ul>
        <li>☄️ Asteroid → banyak ditemukan di sabuk asteroid antara Mars dan Jupiter.</li>
        <li>🌠 Komet → memiliki orbit lonjong dan ekor indah saat mendekati Matahari.</li>
        <li>💫 Meteoroid → jika masuk atmosfer disebut meteor, jika sampai permukaan disebut meteorit.</li>
      </ul>

      <p>Tata Surya diperkirakan terbentuk sekitar 4,6 miliar tahun yang lalu dari awan gas 
      dan debu kosmik yang runtuh karena gravitasi.</p>
    `,
    linkMateri: "https://www.google.com/search?q=sistem+tata+surya+lengkap+planet+matahari+asteroid+komet",
    videoYoutube: "jFIz8izir3U", // Video Sistem Tata Surya - dari link yang diberikan user
    videoFallback: ["libKVRa01L8", "jhRG8QzIQ04", "wm2bAF_hZWY"] // Video alternatif jika utama tidak tersedia
  },
  {
    id: 2,
    kategori: "IPS",
    judul: "Proklamasi Kemerdekaan Indonesia",
    konten: `
      <p>Proklamasi Kemerdekaan Indonesia dibacakan oleh Ir. Soekarno pada 17 Agustus 1945, 
      di Jalan Pegangsaan Timur No. 56 Jakarta, dengan didampingi oleh Drs. Mohammad Hatta.</p>

      <p>📜 Isi proklamasi menyatakan bahwa bangsa Indonesia telah merdeka dan berdaulat, 
      serta mulai menentukan nasibnya sendiri tanpa campur tangan bangsa lain. 
      Peristiwa ini menjadi tonggak sejarah yang sangat penting.</p>

      <p>⚔️ <b>Latar belakang proklamasi</b> antara lain:</p>
      <ul>
        <li>Kekalahan Jepang dalam Perang Dunia II setelah Hiroshima dan Nagasaki dibom atom.</li>
        <li>Desakan para pemuda agar Indonesia segera memproklamasikan kemerdekaan tanpa menunggu janji Jepang.</li>
        <li>Kesempatan emas karena kekuatan Jepang mulai melemah.</li>
      </ul>

      <p>📌 <b>Dampak proklamasi</b> bagi Indonesia:</p>
      <ul>
        <li>Indonesia diakui sebagai negara merdeka.</li>
        <li>Perjuangan diplomasi dan fisik untuk mempertahankan kemerdekaan.</li>
        <li>Semangat persatuan bangsa semakin kuat.</li>
      </ul>

      <p>Proklamasi bukan hanya pernyataan kemerdekaan, tetapi juga awal perjuangan mempertahankan 
      dan mengisi kemerdekaan.</p>
    `,
    linkMateri: "https://www.google.com/search?q=proklamasi+kemerdekaan+indonesia+17+agustus+1945+soekarno+hatta+sejarah",
    videoYoutube: "OVL5ruoBXRo", // Video Proklamasi Kemerdekaan - dari link yang diberikan user
    videoFallback: ["P6bzZa2DU9k", "owS3bJ6WGCM", "UcvjXAQER34"] // Video alternatif proklamasi
  },
  {
    id: 3,
    kategori: "Bahasa",
    judul: "Jenis-jenis Kalimat dalam Bahasa Indonesia",
    konten: `
      <p>Dalam Bahasa Indonesia, kalimat dapat dibedakan berdasarkan tujuan dan fungsinya. 
      Berikut beberapa jenis kalimat utama:</p>

      <ul>
        <li>1️⃣ <b>Kalimat Deklaratif</b> (pernyataan) → menyampaikan informasi.<br>
        Contoh: "Budi sedang belajar di kamar."</li>

        <li>2️⃣ <b>Kalimat Interogatif</b> (pertanyaan) → menanyakan sesuatu.<br>
        Contoh: "Apakah kamu sudah makan?"</li>

        <li>3️⃣ <b>Kalimat Imperatif</b> (perintah) → memberi perintah, ajakan, atau larangan.<br>
        Contoh: "Tolong tutup pintunya!"</li>

        <li>4️⃣ <b>Kalimat Eksklamatif</b> (seruan) → mengungkapkan perasaan kuat.<br>
        Contoh: "Wah, indah sekali pemandangannya!"</li>
      </ul>

      <p>✍️ Memahami jenis kalimat penting agar kita bisa menulis dan berbicara sesuai konteks.</p>
    `,
    linkMateri: "https://www.google.com/search?q=jenis+kalimat+bahasa+indonesia+deklaratif+interogatif+imperatif+eksklamatif",
    videoYoutube: "cuD8zF8lJYg", // Video Jenis Kalimat - dari link yang diberikan user
    videoFallback: ["ZWXsNdgGcgA", "iGj_hJw3NFA", "x8VYWazHAoY"] // Video alternatif jenis kalimat
  },
  {
    id: 4,
    kategori: "Seni",
    judul: "Seni Batik Indonesia",
    konten: `
      <p>Batik adalah kain bergambar yang dibuat dengan cara khusus, yaitu menuliskan atau menutup 
      kain dengan malam (lilin), kemudian diberi pewarna tertentu. Bagian yang ditutup malam akan 
      menahan warna sehingga menghasilkan pola yang indah.</p>

      <p>🎨 <b>Teknik batik</b> ada dua:</p>
      <ul>
        <li>Batik tulis → digambar dengan canting, detail, bernilai tinggi.</li>
        <li>Batik cap → menggunakan cap (stempel), lebih cepat dibuat.</li>
      </ul>

      <p>📌 <b>Motif batik di Indonesia</b>:</p>
      <ul>
        <li>Batik Parang (Yogyakarta) → melambangkan kekuatan.</li>
        <li>Batik Kawung (Solo) → melambangkan kesucian.</li>
        <li>Batik Megamendung (Cirebon) → menggambarkan kesejukan.</li>
        <li>Batik Papua → penuh warna dan simbol alam.</li>
      </ul>

      <p>UNESCO mengakui batik sebagai Warisan Budaya Takbenda Dunia pada 2 Oktober 2009. 
      Sejak saat itu, setiap tanggal 2 Oktober diperingati sebagai Hari Batik Nasional.</p>

      <p>Batik tidak hanya pakaian, tetapi juga identitas dan kebanggaan bangsa Indonesia.</p>
    `,
    linkMateri: "https://www.google.com/search?q=batik+indonesia+sejarah+motif+teknik+unesco+warisan+budaya",
    videoYoutube: "iqu4JefvOX0", // Video Batik Indonesia - dari link yang diberikan user
    videoFallback: ["xN-AysmpB38", "4WiUQtOhfIc", "s9_46oHIGTs"] // Video alternatif batik
  }
];

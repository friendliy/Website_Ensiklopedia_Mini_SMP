// Fungsi untuk membuat embed YouTube dengan error handling
function createYouTubeEmbed(videoId, title = "Video Pembelajaran") {
  if (!videoId) return "";
  
  return `
    <div class="video-container">
      <h3>🎥 Video Pembelajaran Bahasa Indonesia</h3>
      <div class="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&hl=id&cc_lang_pref=id&autoplay=0" 
          title="${title}"
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          loading="lazy"
          onload="handleVideoLoad(this)"
          onerror="handleVideoError(this, '${videoId}', '${title}')">
        </iframe>
      </div>
      <p class="video-caption">Tonton video berbahasa Indonesia di atas untuk pemahaman yang lebih mendalam!</p>
      <div class="video-links">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn-youtube-link">
          📺 Buka di YouTube
        </a>
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' bahasa indonesia pembelajaran SMP')}" target="_blank" class="btn-search-more">
          🔍 Cari Video Serupa
        </a>
      </div>
      <div class="video-disclaimer">
        <small>💡 Jika video tidak muncul, klik "Buka di YouTube" atau gunakan pencarian untuk video alternatif</small>
      </div>
    </div>
  `;
}

// Fungsi untuk menangani error loading video dengan fallback
function handleVideoError(iframe, videoId, title, fallbackVideos = []) {
  console.log(`Video error for ID: ${videoId}`);
  
  // Coba video fallback jika ada
  if (fallbackVideos && fallbackVideos.length > 0) {
    const nextVideo = fallbackVideos[0];
    const remainingFallbacks = fallbackVideos.slice(1);
    
    console.log(`Trying fallback video: ${nextVideo}`);
    iframe.src = `https://www.youtube.com/embed/${nextVideo}?rel=0&modestbranding=1&hl=id&cc_lang_pref=id&autoplay=0`;
    iframe.onerror = () => handleVideoError(iframe, nextVideo, title, remainingFallbacks);
    return;
  }
  
  // Jika semua fallback gagal, tampilkan error message
  iframe.parentElement.innerHTML = `
    <div class="video-error">
      <div class="error-icon">⚠️</div>
      <h4>Video Tidak Dapat Dimuat</h4>
      <p>Maaf, video ini sedang tidak tersedia atau telah dihapus.</p>
      <div class="error-actions">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn-youtube-direct">
          🔗 Coba Buka di YouTube
        </a>
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' bahasa indonesia pembelajaran SMP')}" target="_blank" class="btn-search-alternative">
          🔍 Cari Video Bahasa Indonesia
        </a>
      </div>
    </div>
  `;
}

// Fungsi untuk menangani load sukses video
function handleVideoLoad(iframe) {
  console.log('Video loaded successfully');
  iframe.parentElement.classList.add('video-loaded');
}

// Fungsi untuk menampilkan video di halaman artikel
function tampilkanVideoArtikel(artikel) {
  if (artikel.videoYoutube) {
    return createYouTubeEmbedWithFallback(artikel.videoYoutube, artikel.judul, artikel.videoFallback);
  }
  return "";
}

// Fungsi untuk membuat embed YouTube dengan fallback support
function createYouTubeEmbedWithFallback(videoId, title = "Video Pembelajaran", fallbackVideos = []) {
  if (!videoId) return "";
  
  return `
    <div class="video-container">
      <h3>🎥 Video Pembelajaran Bahasa Indonesia</h3>
      <div class="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&hl=id&cc_lang_pref=id&autoplay=0" 
          title="${title}"
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
          loading="lazy"
          onload="handleVideoLoad(this)"
          onerror="handleVideoError(this, '${videoId}', '${title}', ${JSON.stringify(fallbackVideos)})">
        </iframe>
      </div>
      <p class="video-caption">Tonton video berbahasa Indonesia di atas untuk pemahaman yang lebih mendalam!</p>
      <div class="video-links">
        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="btn-youtube-link">
          📺 Buka di YouTube
        </a>
        <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' bahasa indonesia pembelajaran SMP')}" target="_blank" class="btn-search-more">
          🔍 Cari Video Serupa
        </a>
      </div>
      <div class="video-disclaimer">
        <small>💡 Jika video tidak muncul, klik "Buka di YouTube" atau gunakan pencarian untuk video alternatif</small>
      </div>
    </div>
  `;
}

// Fungsi untuk mendapatkan thumbnail YouTube dengan fallback
function getYouTubeThumbnail(videoId) {
  if (!videoId) return "https://via.placeholder.com/320x180/3498db/ffffff?text=Video+Tidak+Tersedia";
  // Gunakan hqdefault yang lebih reliable daripada maxresdefault
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// Fungsi untuk mendapatkan thumbnail alternatif jika hq tidak ada
function getAlternativeThumbnail(videoId) {
  if (!videoId) return "https://via.placeholder.com/320x180/3498db/ffffff?text=Video+Tidak+Tersedia";
  // Fallback ke mqdefault yang hampir selalu ada
  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
}

// Fungsi untuk membuat tombol video dengan validasi
function createVideoButton(videoId, title) {
  if (!videoId) return "";
  
  return `
    <a href="https://www.youtube.com/watch?v=${videoId}" 
       target="_blank" 
       class="btn-video"
       title="Tonton video bahasa Indonesia: ${title}"
       onclick="trackVideoClick('${videoId}', '${title}')">
      🎥 Video Indonesia
    </a>
  `;
}

// Fungsi untuk tracking klik video (untuk analisis)
function trackVideoClick(videoId, title) {
  console.log(`Video clicked: ${title} (ID: ${videoId})`);
  // Bisa ditambahkan analytics tracking di sini
}

// Fungsi untuk menangani error loading thumbnail
function handleThumbnailError(img, videoId, title) {
  // Coba thumbnail alternatif
  if (!img.src.includes('mqdefault')) {
    img.src = getAlternativeThumbnail(videoId);
    return;
  }
  
  // Jika semua thumbnail gagal, buat placeholder custom
  img.style.display = 'none';
  const placeholder = document.createElement('div');
  placeholder.className = 'thumbnail-placeholder';
  placeholder.innerHTML = `
    <div class="placeholder-content">
      <div class="placeholder-icon">📺</div>
      <div class="placeholder-text">${title}</div>
    </div>
  `;
  img.parentElement.appendChild(placeholder);
}

// Fungsi untuk validasi apakah video ID valid
function isValidVideoId(videoId) {
  const pattern = /^[a-zA-Z0-9_-]{11}$/;
  return pattern.test(videoId);
}

// Fungsi untuk membuat video card dengan error handling
function createVideoCard(artikel) {
  if (!artikel.videoYoutube || !isValidVideoId(artikel.videoYoutube)) {
    return `
      <div class="video-card error-card" data-category="${artikel.kategori}">
        <div class="video-thumbnail">
          <div class="error-thumbnail">
            <div class="error-icon">❌</div>
            <div class="error-text">Video Tidak Valid</div>
          </div>
        </div>
        <div class="video-info">
          <h3>${artikel.judul}</h3>
          <p class="video-category">📚 ${artikel.kategori}</p>
          <p class="video-description">Video untuk topik ini sedang tidak tersedia.</p>
          <div class="video-actions">
            <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(artikel.judul + ' pembelajaran SMP')}" 
               target="_blank" 
               class="btn-search">🔍 Cari Video</a>
            <a href="artikel.html?id=${artikel.id}" 
               class="btn-article">📖 Baca Artikel</a>
          </div>
        </div>
      </div>
    `;
  }

  return `
    <div class="video-card" data-category="${artikel.kategori}">
      <div class="video-thumbnail">
        <img src="${getYouTubeThumbnail(artikel.videoYoutube)}" 
             alt="${artikel.judul}" 
             onerror="handleThumbnailError(this, '${artikel.videoYoutube}', '${artikel.judul}')"
             onload="this.style.opacity = '1'; this.parentElement.classList.add('loaded');"
             style="opacity: 0; transition: opacity 0.3s;">
        <div class="play-button">▶</div>
        <div class="video-duration">📺</div>
      </div>
      <div class="video-info">
        <h3>${artikel.judul}</h3>
        <p class="video-category">📚 ${artikel.kategori}</p>
        <p class="video-description">Video pembelajaran interaktif untuk memahami materi dengan lebih mudah.</p>
        <div class="video-actions">
          <a href="https://www.youtube.com/watch?v=${artikel.videoYoutube}" 
             target="_blank" 
             class="btn-watch"
             onclick="trackVideoClick('${artikel.videoYoutube}', '${artikel.judul}')">🎥 Tonton di YouTube</a>
          <a href="artikel.html?id=${artikel.id}" 
             class="btn-article">📖 Baca Artikel</a>
        </div>
      </div>
    </div>
  `;
}

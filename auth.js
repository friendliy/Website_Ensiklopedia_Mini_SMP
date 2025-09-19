// Authentication System untuk Ensiklopedia Mini SMP

// Fungsi untuk cek apakah user sudah login
function checkAuth() {
  const currentUser = localStorage.getItem('currentUser');
  const currentPage = window.location.pathname.split('/').pop();
  
  // Jika belum login dan bukan di halaman login, redirect ke login
  if (!currentUser && currentPage !== 'login.html') {
    window.location.href = 'login.html';
    return false;
  }
  
  // Jika sudah login dan di halaman login, redirect ke dashboard
  if (currentUser && currentPage === 'login.html') {
    window.location.href = 'dashboard.html';
    return false;
  }
  
  // Update nama user di dashboard jika ada
  if (currentUser && document.getElementById('userName')) {
    const userData = JSON.parse(currentUser);
    document.getElementById('userName').textContent = userData.name;
  }
  
  return true;
}

// Fungsi untuk registrasi user baru
function registerUser(name, username, password, confirmPassword) {
  // Validasi input
  if (!name || !username || !password || !confirmPassword) {
    showAlert('Semua field harus diisi!', 'error');
    return false;
  }
  
  if (password !== confirmPassword) {
    showAlert('Password dan konfirmasi password tidak sama!', 'error');
    return false;
  }
  
  if (password.length < 6) {
    showAlert('Password minimal 6 karakter!', 'error');
    return false;
  }
  
  // Cek apakah username sudah ada
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(user => user.username === username)) {
    showAlert('Username sudah digunakan, pilih username lain!', 'error');
    return false;
  }
  
  // Simpan user baru
  const newUser = {
    id: Date.now(),
    name: name,
    username: username,
    password: password,
    registeredAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  showAlert('Registrasi berhasil! Silakan login dengan akun Anda.', 'success');
  setTimeout(() => {
    showLoginForm();
  }, 2000);
  
  return true;
}

// Fungsi untuk login user
function loginUser(username, password) {
  // Validasi input
  if (!username || !password) {
    showAlert('Username dan password harus diisi!', 'error');
    return false;
  }
  
  // Cek user di localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    showAlert('Username atau password salah!', 'error');
    return false;
  }
  
  // Simpan session
  const sessionData = {
    id: user.id,
    name: user.name,
    username: user.username,
    loginAt: new Date().toISOString()
  };
  
  localStorage.setItem('currentUser', JSON.stringify(sessionData));
  
  showAlert('Login berhasil! Mengarahkan ke dashboard...', 'success');
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1500);
  
  return true;
}

// Fungsi untuk logout
function logout() {
  if (confirm('Apakah Anda yakin ingin keluar?')) {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
  }
}

// Fungsi untuk menampilkan alert
function showAlert(message, type) {
  const alertDiv = document.getElementById('alertMessage');
  if (alertDiv) {
    alertDiv.textContent = message;
    alertDiv.className = `alert alert-${type}`;
    alertDiv.style.display = 'block';
    
    // Auto hide setelah 5 detik
    setTimeout(() => {
      alertDiv.style.display = 'none';
    }, 5000);
  }
}

// Event listeners untuk form
document.addEventListener('DOMContentLoaded', function() {
  // Cek authentication saat halaman load
  checkAuth();
  
  // Login form
  const loginForm = document.getElementById('loginFormElement');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value.trim();
      const password = document.getElementById('loginPassword').value;
      loginUser(username, password);
    });
  }
  
  // Register form
  const registerForm = document.getElementById('registerFormElement');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('registerName').value.trim();
      const username = document.getElementById('registerUsername').value.trim();
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('registerConfirmPassword').value;
      registerUser(name, username, password, confirmPassword);
    });
  }
});

// Fungsi utility untuk mendapatkan user yang sedang login
function getCurrentUser() {
  const userData = localStorage.getItem('currentUser');
  return userData ? JSON.parse(userData) : null;
}

// Fungsi untuk mengecek apakah user adalah admin (untuk fitur masa depan)
function isAdmin() {
  const user = getCurrentUser();
  return user && user.username === 'admin';
}

// Auto logout setelah 24 jam (untuk keamanan)
function checkSessionExpiry() {
  const user = getCurrentUser();
  if (user && user.loginAt) {
    const loginTime = new Date(user.loginAt);
    const now = new Date();
    const hoursDiff = (now - loginTime) / (1000 * 60 * 60);
    
    if (hoursDiff > 24) {
      logout();
    }
  }
}

// Cek session expiry setiap 30 menit
setInterval(checkSessionExpiry, 30 * 60 * 1000);
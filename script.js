// ===== HIGHLIGHT NAVBAR SAAT SCROLL =====
// Ambil semua link di navbar
var navLinks = document.querySelectorAll('nav a');

// Fungsi untuk mengecek section mana yang sedang terlihat
function updateNavActive() {
  var sections = document.querySelectorAll('section');
  var scrollPos = window.scrollY + 100;

  sections.forEach(function(section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;
    var id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < bottom) {
      // Hapus class aktif dari semua link
      navLinks.forEach(function(link) {
        link.style.backgroundColor = '';
      });

      // Beri warna pada link yang sesuai
      var activeLink = document.querySelector('nav a[href="#' + id + '"]');
      if (activeLink) {
        activeLink.style.backgroundColor = 'rgba(255,255,255,0.2)';
      }
    }
  });
}

// Jalankan saat scroll
window.addEventListener('scroll', updateNavActive);

// ===== TOMBOL KEMBALI KE ATAS =====
// Buat tombol scroll-to-top
var btnTop = document.createElement('button');
btnTop.textContent = '↑ Atas';
btnTop.style.cssText =
  'position: fixed;' +
  'bottom: 24px;' +
  'right: 24px;' +
  'background-color: #b22222;' +
  'color: white;' +
  'border: none;' +
  'padding: 10px 16px;' +
  'border-radius: 4px;' +
  'font-size: 13px;' +
  'cursor: pointer;' +
  'display: none;' +
  'z-index: 999;';

document.body.appendChild(btnTop);

// Tampilkan tombol saat scroll ke bawah
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

// Klik tombol untuk kembali ke atas
btnTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== TAMPILKAN TAHUN DI FOOTER =====
var tahunSekarang = new Date().getFullYear();
var footer = document.querySelector('footer');
if (footer) {
  var pTahun = document.createElement('p');
  pTahun.textContent = '© ' + tahunSekarang;
  pTahun.style.cssText = 'font-size: 11px; opacity: 0.4; margin-top: 6px;';
  footer.appendChild(pTahun);
}

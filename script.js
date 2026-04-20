// Mengambil elemen HTML berdasarkan ID
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Menambahkan aksi saat tombol hamburger diklik
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        // Membuka atau menutup menu dengan mengganti class 'hidden'
        mobileMenu.classList.toggle('hidden');
    });

    // Otomatis menutup menu saat salah satu link diklik
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  const demoButton = document.getElementById("demoButton");
  if (demoButton) {
    demoButton.addEventListener("click", () => {
      alert("Merhaba! JavaScript çalışıyor ✨");
    });
  }

  console.log("Hitit Group: Uygulama yüklendi.");
});

// Mobil menü toggle fonksiyonu
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
}

// Mobil alt menü toggle fonksiyonu
function toggleMobileSubmenu() {
  const submenu = document.getElementById('mobile-submenu');
  if (submenu) {
    submenu.classList.toggle('hidden');
  }
}



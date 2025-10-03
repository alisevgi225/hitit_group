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



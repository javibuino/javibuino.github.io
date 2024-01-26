const dropdownButton = document.querySelector(".menubutton");
const dropdownMenu = document.querySelector(".menu");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove("show");
  }
});


        




//Banner Politica de privacidad
// Función para ocultar el banner al hacer clic en "Entendido"
function entendido() {
  document.getElementById("avisoBanner").style.display = "none";
  // Almacena la información en el almacenamiento local
  localStorage.setItem("avisoBannerCerrado", "true");
}

// Mostrar el banner al cargar la página si no se ha cerrado anteriormente
document.addEventListener("DOMContentLoaded", function() {
  if (localStorage.getItem("avisoBannerCerrado") !== "true") {
    document.getElementById("avisoBanner").style.display = "block";
  }
});

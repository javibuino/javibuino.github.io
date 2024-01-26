const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

document.addEventListener("click", (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove("show");
  }
});


        

//Menu desplegable
$(document).ready(function() {
    $(".menubutton").click(function() { // trigger
        $(this).next(".ul-list").slideToggle("fast"); // blendet beim Klick auf "dt" die nächste "dd" ein.
        $(this).children("a").toggleClass("closed open"); // wechselt beim Klick auf "dt" die Klasse des enthaltenen a-Tags von "closed" zu "open".
    });
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

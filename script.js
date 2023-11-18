document.addEventListener('DOMContentLoaded', function () {
  // ... (votre code existant)

  var carousel = document.querySelector("#carousel");
  var slides = carousel.querySelectorAll(".slide");

  var currentSlide = 0;
  var previousSlide = slides.length - 1;

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].style.display = "flex"; // Changez 'block' à 'flex'
    slides[previousSlide].style.display = "none";

    previousSlide = currentSlide;
  }

  // Utilisez setTimeout au lieu de setInterval pour éviter les problèmes de synchronisation
  setInterval(nextSlide, 2500);

  // Ajoutez ces lignes pour vous assurer que la première diapositive est affichée initialement
  slides[currentSlide].style.display = "flex";
  slides[previousSlide].style.display = "none";
});

// ... (votre code existant)

document.getElementById("logo").addEventListener("click", function() {
  window.location.href = "index.html"; // Ajustez le chemin vers votre page d'accueil
});

// ... (votre code existant)


document.getElementById("logo").addEventListener("click", function() {
  window.location.href = "/";
});
document.getElementById("logo").addEventListener("mouseover", function() {
    document.getElementById("logo").classList.add("cursor-hand");
});


const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  console.log(mobileMenuButton); // Vérifiez si l'élément du bouton mobile existe
  console.log(navList); // Vérifiez si l'élément de la liste de navigation existe

  mobileMenuButton.addEventListener('click', function () {
      console.log('Mobile menu button clicked'); // Ajoutez un journal de console pour le débogage
      navList.classList.toggle('show');
  });



  var carousel = document.querySelector("#carousel");
  var slides = carousel.querySelectorAll(".slide");

  var currentSlide = 0;
  var previousSlide = slides.length - 1; // Modifiez cette ligne pour résoudre le problème de la première diapositive

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";
    slides[previousSlide].style.display = "none";

    previousSlide = currentSlide;
  }

  // Lancez la première transition
  nextSlide();

  // Utilisez setTimeout au lieu de setInterval pour éviter des problèmes de synchronisation
  setInterval(nextSlide, 3000); // Changez la valeur à votre préférence (3000 ms = 3 secondes)
});

// Ajoutez ces lignes dans votre script.js

document.addEventListener("scroll", function() {
  var header = document.querySelector(".scroll-header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
      header.classList.add("fixed");
  } else {
      header.classList.remove("fixed");
  }
});

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
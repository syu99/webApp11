document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');

  mobileMenuButton.addEventListener('click', function () {
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

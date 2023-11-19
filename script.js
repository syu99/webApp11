document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.querySelector("#carousel");
  var slides = carousel.querySelectorAll(".slide");
  var currentSlide = 0;
  var previousSlide = slides.length - 1;

  function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
          currentSlide = 0;
      }

      slides[currentSlide].style.display = "flex";
      slides[previousSlide].style.display = "none";

      previousSlide = currentSlide;
  }

  setInterval(nextSlide, 2710);

  slides[currentSlide].style.display = "flex";
  slides[previousSlide].style.display = "none";

  document.getElementById("logo").addEventListener("click", function () {
      window.location.href = "index.html";
  });

  document.getElementById("logo").addEventListener("mouseover", function () {
      document.getElementById("logo").classList.add("cursor-hand");
  });

  const cardsContainer = document.querySelector('.cards-container');
  const cardWidth = document.querySelector('.card').offsetWidth;
  let currentIndex = 0;

  function showNextCard() {
      currentIndex++;
      if (currentIndex >= cardsContainer.children.length) {
          currentIndex = 0;
      }
      updateSliderPosition();
  }

  function showPreviousCard() {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = cardsContainer.children.length - 1;
      }
      updateSliderPosition();
  }

  function updateSliderPosition() {
      const newPosition = -currentIndex * cardWidth;
      cardsContainer.style.transform = `translateX(${newPosition}px)`;
  }

  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  nextButton.addEventListener('click', showNextCard);
  prevButton.addEventListener('click', showPreviousCard);
});

const nav = document.getElementById('nav');
const icons = document.getElementById('icons');

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const links = document.querySelectorAll("nav li");

links.forEach((link) => {
  link.addEventListener("click", () => {
      nav.classList.remove("active");
  });
});

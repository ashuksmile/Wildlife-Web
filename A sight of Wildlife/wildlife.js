// scripts.js

const slides = document.querySelectorAll('.animal-slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Modify JavaScript to handle more slides



// JavaScript for handling more slides

// script.js
document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector('.ham-burger-logo');
  const navbar = document.querySelector('.navbar');

  burger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
});

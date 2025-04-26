const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.header-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
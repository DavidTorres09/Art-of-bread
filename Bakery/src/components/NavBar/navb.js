const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
  if (window.scrollY > navbar.offsetTop) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

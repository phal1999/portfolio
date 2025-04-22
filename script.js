
function toggleMenu() {
  const nav = document.querySelector('nav ul');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.createElement('div');
  hamburger.className = 'hamburger';
  hamburger.innerHTML = '&#9776;';
  hamburger.setAttribute('aria-label', 'Toggle navigation menu');
  hamburger.setAttribute('role', 'button');
  hamburger.setAttribute('tabindex', '0');
  document.querySelector('header').appendChild(hamburger);
  hamburger.addEventListener('click', toggleMenu);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

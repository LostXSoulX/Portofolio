// Animasi scroll sederhana
const fadeElements = document.querySelectorAll('.fade-in');

function fadeInOnScroll() {
  fadeElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

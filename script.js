// Animasi scroll & highlight menu
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.sidebar nav a');

function onScroll(){
  sections.forEach(sec=>{
    const top = sec.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      sec.classList.add('visible');
      history.replaceState(null,null, `#${sec.id}`);
    }
  });
  navLinks.forEach(link=>{
    link.classList.toggle('active', link.getAttribute('href')===location.hash);
  });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Smooth scroll
navLinks.forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

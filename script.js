// ACTIVE NAV LINKS
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');

function changeActiveNav() {
    let index = sections.length;
    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if(navLinks[index]) navLinks[index].classList.add('active');
}
changeActiveNav();
window.addEventListener('scroll', changeActiveNav);

// FADE-IN SECTIONS
const faders = document.querySelectorAll('.section');
const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// SEARCH FUNCTION
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
searchBtn.addEventListener('click', ()=>{
    const query = searchInput.value.toLowerCase().trim();
    if(query) document.getElementById('destinations').scrollIntoView({behavior:'smooth'});
});

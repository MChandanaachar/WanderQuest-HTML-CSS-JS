// ================= ACTIVE NAV LINKS =================
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

// ================= FADE-IN SECTIONS =================
const faders = document.querySelectorAll('.section');
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// ================= SCROLL TO CONTACT =================
function goToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

// ================= SEARCH FUNCTION =================
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');

if(searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase().trim();
        if(query) document.getElementById('destinations').scrollIntoView({behavior:'smooth'});
    });
}

// ================= LOGIN MODAL =================
const bookBtn = document.getElementById("bookNowBtn");
const loginModal = document.getElementById("loginModal");

if(bookBtn && loginModal) {
    bookBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loginModal.style.display = "flex";
    });
}
document.addEventListener("DOMContentLoaded", () => {

    // ================= ACTIVE NAV LINKS =================
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

    // ================= FADE-IN SECTIONS =================
    const faders = document.querySelectorAll('.section');
    const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

    // ================= SCROLL TO CONTACT =================
    function goToContact() {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }

    // ================= SEARCH FUNCTION =================
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    if(searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase().trim();
            if(query) document.getElementById('destinations').scrollIntoView({behavior:'smooth'});
        });
    }

    // ================= LOGIN MODAL =================
    const bookBtn = document.getElementById("bookNowBtn");
    const loginModal = document.getElementById("loginModal");
    if(bookBtn && loginModal) {
        bookBtn.addEventListener("click", (e) => {
            e.preventDefault();
            loginModal.style.display = "flex";
        });
    }

    // ================= DESTINATIONS SELECTION & CONTINUE =================
    const destCards = document.querySelectorAll(".destination-card");
    const destContinueBtn = document.getElementById("destContinueBtn");

    if(destCards && destContinueBtn) {
        destCards.forEach(card => {
            card.addEventListener("click", () => {
                card.classList.toggle("selected");

                const selectedCount = document.querySelectorAll(".destination-card.selected").length;

                // Enable Continue if 0 or >= 8
                if(selectedCount === 0 || selectedCount <= 8) {
                    destContinueBtn.disabled = false;
                    destContinueBtn.classList.remove("disabled");
                } else {
                    destContinueBtn.disabled = true;
                    destContinueBtn.classList.add("disabled");
                }
            });
        });

        destContinueBtn.addEventListener("click", () => {
            document.getElementById("services").scrollIntoView({ behavior: "smooth" });
        });
    }
// ================= SERVICE SELECTION & CONTINUE =================
const serviceCards = document.querySelectorAll(".service-card");
const continueBtn = document.getElementById("continueBtn");

if(serviceCards && continueBtn) {
    serviceCards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("selected");

            const selectedServices = document.querySelectorAll(".service-card.selected").length;

            // Enable Services Continue button only if at least 1 service selected
            if(selectedServices > 0){
                continueBtn.disabled = false;
                continueBtn.classList.remove("disabled");
            } else {
                continueBtn.disabled = true;
                continueBtn.classList.add("disabled");
            }
        });
    });

    continueBtn.addEventListener("click", () => {
        if(!continueBtn.disabled){
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        }
    });
}

    
});




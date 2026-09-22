// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.textContent = "Close";
    } else {
        menuButton.textContent = "Menu";
    }
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navLinks = nav.querySelectorAll("a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.textContent = "Menu";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// SUBTLE SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".section-content, .hero-text, .hero-image-wrapper"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


// MAKE HERO CONTENT VISIBLE IMMEDIATELY

window.addEventListener("load", () => {
    document.querySelector(".hero-text").classList.add("visible");
    document.querySelector(".hero-image-wrapper").classList.add("visible");
});

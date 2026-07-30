/*==================================================
AOS
==================================================*/

AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true,
    offset: 80
});

/*==================================================
TYPING EFFECT
==================================================*/

new Typed("#typing", {

    strings: [

        "Embedded Systems Enthusiast",
        "Electronics Engineer",
        "IoT Developer",
        "PCB Design Learner"

    ],

    typeSpeed: 60,
    backSpeed: 35,
    backDelay: 1800,
    loop: true

});

/*==================================================
MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

/*==================================================
HEADER SHADOW
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        header.style.boxShadow = "0 6px 20px rgba(15,23,42,.08)";

    }else{

        header.style.boxShadow = "none";

    }

});

/*==================================================
ACTIVE NAVIGATION
==================================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*==================================================
SMOOTH SCROLL
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*==================================================
CARD HOVER
==================================================*/

document.querySelectorAll(

    ".project-card, .skill-card, .certificate-card, .timeline-card"

).forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

    });

});

/*==================================================
CURRENT YEAR
==================================================*/

const year = document.querySelector("#year");

if(year){

    year.textContent = new Date().getFullYear();

}
/*=========================================
CONTACT FORM
=========================================*/

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Portfolio Contact from " + name);

    const body = encodeURIComponent(
`Name: ${name}

Email: ${email}

Message:
${message}`
    );

    window.location.href =
        `mailto:sheeatalsaggam@gmail.com?subject=${subject}&body=${body}`;

});
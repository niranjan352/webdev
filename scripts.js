// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.8s";
    }, 1000);

});

// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

// ==============================
// NAVBAR SCROLL EFFECT
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(0,0,0,.92)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.5)";

    } else {

        navbar.style.background = "rgba(0,0,0,.55)";
        navbar.style.boxShadow = "none";

    }

});

// ==============================
// SMOOTH SCROLL
// ==============================

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

// ==============================
// SCROLL REVEAL
// ==============================

const reveals = document.querySelectorAll(

".card, .burger-card, .review, .gallery-grid img, .contact-box div"

);

function revealElements(){

    reveals.forEach(item=>{

        const top = item.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 80){

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item=>{

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealElements);

revealElements();

// ==============================
// ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// ==============================
// HERO IMAGE FLOAT
// ==============================

const heroBurger = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    let x = (window.innerWidth/2 - e.clientX)/40;

    let y = (window.innerHeight/2 - e.clientY)/40;

    heroBurger.style.transform =
    `translate(${x}px, ${y}px)`;

});

// ==============================
// BUTTON HOVER GLOW
// ==============================

document.querySelectorAll("button,.btn1,.btn2,.order-btn")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow =
        "0 0 30px rgba(255,180,0,.6)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="none";

    });

});

// ==============================
// PARALLAX BANNER
// ==============================

const banner = document.querySelector(".banner");

window.addEventListener("scroll",()=>{

    let offset = window.pageYOffset;

    if(banner){

        banner.style.backgroundPositionY =
        offset * 0.4 + "px";

    }

});
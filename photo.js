const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// PORTFOLIO

// const hamburger1 = document.querySelector(".hamburger1");
// const navMenu1 = document.querySelector(".nav-menu1");
// const navLink1 = document.querySelectorAll(".nav-link1");

// hamburger1.addEventListener("click", mobileMenu);
// navLink1.forEach(n => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//     hamburger1.classList.toggle("active");
//     navMenu1.classList.toggle("active");
// }

// function closeMenu() {
//     hamburger1.classList.remove("active");
//     navMenu1.classList.remove("active");
// }
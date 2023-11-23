const hamburger = document.querySelector(".hamburger1");
const navMenu = document.querySelector(".nav-menu1");
const navLink = document.querySelectorAll(".nav-link1");

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
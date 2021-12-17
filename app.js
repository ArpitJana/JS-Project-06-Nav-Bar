const toggleButton = document.querySelector(".nav-header #toggle");
const navLinks = document.querySelector(".nav-links");
const socialIcons = document.querySelector(".nav-social-icons");

toggleButton.addEventListener("click", function() {
    navLinks.classList.toggle("show-nav-links");
    socialIcons.classList.toggle("show-nav-social-icons");
});
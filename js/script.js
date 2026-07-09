// ======================================================
// Divine Connectionz
// script.js
// ======================================================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.classList.toggle("open");
}

// Close the menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("#mobileMenu a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            document.getElementById("mobileMenu").classList.remove("open");
        });
    });

});

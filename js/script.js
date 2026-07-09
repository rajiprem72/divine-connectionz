// ======================================================
// Divine Connectionz
// script.js
// ======================================================

// Toggle Mobile Menu
function toggleMenu() {

    document.getElementById("mobileMenu").classList.toggle("open");

}

// Close Mobile Menu after clicking a link
document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll("#mobileMenu a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {
                document.getElementById("mobileMenu").classList.remove("open");
            }

        });

    });

});

// ==========================================
// Divine Connectionz
// mobile.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".menu-toggle");
    const menuWrapper = document.querySelector(".menu-wrapper");

    // Toggle Hamburger Menu
    menuButton.addEventListener("click", function () {

        menuWrapper.classList.toggle("open");

    });

    // Accordion Menu
    const dropdownLinks = document.querySelectorAll(".dropdown > a");

    dropdownLinks.forEach(function(link){

        link.addEventListener("click", function(e){

            e.preventDefault();

            const submenu = this.nextElementSibling;

            submenu.classList.toggle("show");

        });

    });

    // Close menu when a normal link is clicked
    const menuLinks = document.querySelectorAll(".mobile-menu a");

    menuLinks.forEach(function(link){

        link.addEventListener("click", function(){

            // Ignore dropdown headers
            if(this.nextElementSibling &&
               this.nextElementSibling.classList.contains("submenu")){

                return;

            }

            menuWrapper.classList.remove("open");

        });

    });

});

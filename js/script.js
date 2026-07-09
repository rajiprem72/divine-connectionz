// ======================================================
// Divine Connectionz
// script.js
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    // Load Navigation
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("navigation").innerHTML = data;

            // Add click event after navigation is loaded
            const links = document.querySelectorAll("#mobileMenu a");

            links.forEach(function(link){

                link.addEventListener("click", function(){

                    document.getElementById("mobileMenu").classList.remove("open");

                });

            });

        });

});


// Toggle Menu
function toggleMenu(){

    document.getElementById("mobileMenu").classList.toggle("open");

}

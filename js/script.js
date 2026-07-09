// ======================================================
// Divine Connectionz
// script.js
// ======================================================

// Toggle Mobile Menu
function toggleMenu(){

    document.querySelector(".menu-wrapper").classList.toggle("open");

}

document.addEventListener("DOMContentLoaded",function(){

    document.querySelectorAll(".dropdown > a").forEach(function(item){

        item.addEventListener("click",function(e){

            if(window.innerWidth<=768){

                e.preventDefault();

                this.nextElementSibling.classList.toggle("show");

            }

        });

    });

});

document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("coursePopup");

    const okBtn = document.getElementById("okBtn");

    const cancelBtn = document.getElementById("cancelBtn");

    okBtn.addEventListener("click", function () {

        window.location.href = "email-7days-course.html";

    });

    cancelBtn.addEventListener("click", function () {

        popup.style.display = "none";

    });

});

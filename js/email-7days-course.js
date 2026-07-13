// ==========================================================
// Project      : Divine Connectionz
// Page         : email-7days-course.html
// File         : email-7days-course.js
// ==========================================================

const SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";

const form = document.getElementById("courseForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async function (event) {

    event.preventDefault();

    const submitButton = form.querySelector("button");

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    messageDiv.className = "";
    messageDiv.innerHTML = "";

    const formData = {
        name: document.getElementById("name").value.trim(),
        mobile: document.getElementById("mobile").value.trim(),
        email: document.getElementById("email").value.trim(),
        country: document.getElementById("country").value.trim(),
        language: document.getElementById("language").value
    };

    try {

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.status === "success") {

            messageDiv.className = "success";

            messageDiv.innerHTML = `
                Thank you for registering.<br><br>
                The Raja Yoga 7 Days Course has been emailed to
                <strong>${formData.email}</strong>.
            `;

            form.reset();

        } else {

            throw new Error(result.message);

        }

    } catch (error) {

        console.error(error);

        messageDiv.className = "error";

        messageDiv.innerHTML = `
            Sorry, something went wrong.<br>
            Please try again after some time.
        `;

    } finally {

        submitButton.disabled = false;
        submitButton.textContent = "Get Free Course";

    }

});

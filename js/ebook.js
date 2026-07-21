// =========================================================
// TOTAL PAGES FOR EACH LANGUAGE
// =========================================================

const books = {
    english: 10,
    gujarati: 22,
    hindi: 29,
    malayalam: 31,
    telugu: 36,
    kannada: 35,
    tamil: 28
};

// =========================================================
// GLOBAL VARIABLES
// =========================================================

let currentLanguage = "";
let currentPage = 1;
let totalPages = 0;
const audioLanguages = [
    "tamil"
];
// =========================================================
// HTML ELEMENTS
// =========================================================

const form = document.getElementById("language-form");
const languageDropdown = document.getElementById("language");

const introSection = document.getElementById("intro-section");
const ebookSection = document.getElementById("ebook-section");

const ebookImage = document.getElementById("ebook-image");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const pageNumber = document.getElementById("page-number");

const audio = document.getElementById(
    "page-audio"
);

audio.pause();

audio.currentTime = 0;

function playCurrentPageAudio() {

    const language = document
        .getElementById("language")
        .value;

    if (!audioLanguages.includes(language)) {

        return;

    }

    const audio = document
        .getElementById("page-audio");

    audio.pause();

    audio.currentTime = 0;

    audio.src =
        `audio/${language}/${currentPage}.m4a`;

    audio.load();

    audio.play().catch(function (error) {

        console.log(
            "Audio playback blocked:",
            error
        );

    });

}
function showPage() {

    image.src = ...;

    pageNumber.textContent = ...;

}

playCurrentPageAudio();

// =========================================================
// START COURSE
// =========================================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    currentLanguage = languageDropdown.value;

    if (!currentLanguage) {

        alert("Please select a language.");

        return;
    }

    totalPages = books[currentLanguage];

    // Check saved progress

    const savedProgress = JSON.parse(
        localStorage.getItem("rajayoga-progress")
    );

    if (
        savedProgress &&
        savedProgress.language === currentLanguage
    ) {

        const continueReading = confirm(
            `You previously stopped at page ${savedProgress.page}.\n\nPress OK to continue.\nPress Cancel to start from page 1.`
        );

        if (continueReading) {

            currentPage = savedProgress.page;

        } else {

            currentPage = 1;
        }

    } else {

        currentPage = 1;
    }

    // Hide intro and show ebook

    introSection.style.display = "none";

    ebookSection.style.display = "block";

    loadPage();
});

// =========================================================
// LOAD PAGE
// =========================================================

function loadPage() {

    ebookImage.classList.remove("page-turn");

    void ebookImage.offsetWidth;

    ebookImage.classList.add("page-turn");

    ebookImage.src =
        `ebooks/${currentLanguage}/${currentPage}.webp`;

    pageNumber.textContent =
        `Page ${currentPage} / ${totalPages}`;

    saveProgress();

    updateButtons();

    preloadNextPage();
}

// =========================================================
// NEXT PAGE
// =========================================================

nextBtn.addEventListener("click", function () {

    if (currentPage < totalPages) {

        currentPage++;

        loadPage();
    }
});

// =========================================================
// PREVIOUS PAGE
// =========================================================

prevBtn.addEventListener("click", function () {

    if (currentPage > 1) {

        currentPage--;

        loadPage();
    }
});

// =========================================================
// ENABLE / DISABLE BUTTONS
// =========================================================

function updateButtons() {

    prevBtn.disabled = (currentPage === 1);

    nextBtn.disabled = (currentPage === totalPages);

    prevBtn.style.opacity =
        currentPage === 1 ? "0.5" : "1";

    nextBtn.style.opacity =
        currentPage === totalPages ? "0.5" : "1";
}

// =========================================================
// SAVE PROGRESS
// =========================================================

function saveProgress() {

    const progress = {

        language: currentLanguage,

        page: currentPage
    };

    localStorage.setItem(

        "rajayoga-progress",

        JSON.stringify(progress)
    );
}

// =========================================================
// PRELOAD NEXT PAGE
// =========================================================

function preloadNextPage() {

    if (currentPage < totalPages) {

        const image = new Image();

        image.src =
            `ebooks/${currentLanguage}/${currentPage + 1}.webp`;
    }
}

// =========================================================
// SWIPE SUPPORT FOR MOBILE
// =========================================================

let touchStartX = 0;
let touchEndX = 0;

ebookImage.addEventListener("touchstart", function (event) {

    touchStartX = event.changedTouches[0].screenX;
});

ebookImage.addEventListener("touchend", function (event) {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();
});

function handleSwipe() {

    const difference = touchStartX - touchEndX;

    // Swipe left → Next page

    if (difference > 50 && currentPage < totalPages) {

        currentPage++;

        loadPage();
    }

    // Swipe right → Previous page

    if (difference < -50 && currentPage > 1) {

        currentPage--;

        loadPage();
    }
}

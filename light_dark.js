// light_dark.js

document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("modeToggle");
    const currentMode = localStorage.getItem("darkMode");

    // Apply dark mode if it was enabled previously
    if (currentMode === "enabled") {
        enableDarkMode();
    }

    // Event listener for the mode toggle button
    modeToggle.addEventListener("click", () => {
        currentMode === "enabled" ? disableDarkMode() : enableDarkMode();
    });

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        document.querySelectorAll(".navbar, .sidebar, .card, .header").forEach(element => {
            element.classList.add("dark-mode");
        });
        localStorage.setItem("darkMode", "enabled");
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        document.querySelectorAll(".navbar, .sidebar, .card, .header").forEach(element => {
            element.classList.remove("dark-mode");
        });
        localStorage.setItem("darkMode", "disabled");
    }
});

// Immediately apply dark mode before the DOM is fully loaded
(function() {
    const currentMode = localStorage.getItem("darkMode");

    if (currentMode === "enabled") {
        document.body.classList.add("dark-mode");
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".navbar, .sidebar, .card, .header").forEach(element => {
                element.classList.add("dark-mode");
            });
        });
    }
})();
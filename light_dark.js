// light_dark.js

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.querySelectorAll(".navbar, .sidebar, .card, .header").forEach(element => {
        element.classList.add("dark-mode");
    });
    localStorage.setItem("darkMode", "enabled");
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.querySelectorAll(".navbar, .sidebar, .card, .header").forEach(element => {
        element.classList.remove("dark-mode");
    });
    localStorage.setItem("darkMode", "disabled");
}

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

// Add event listeners after DOM content is loaded
document.addEventListener("DOMContentLoaded", () => {
    const modeToggle = document.getElementById("modeToggle");

    // Set initial mode based on localStorage
    const currentMode = localStorage.getItem("darkMode");
    if (currentMode === "enabled") {
        enableDarkMode();
    }

    // Event listener for the mode toggle button
    modeToggle.addEventListener("click", () => {
        const currentMode = localStorage.getItem("darkMode");
        if (currentMode === "enabled") {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});

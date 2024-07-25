// script.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const icon = document.querySelector('#modeToggle i');
    const isDarkMode = body.classList.contains('dark-mode');

    // Update button icon based on mode
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun'); // Sun icon for light mode
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); // Moon icon for dark mode
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateChartColors(isDarkMode ? 'dark' : 'light');
}

// Event listener for the toggle button
document.getElementById('modeToggle').addEventListener('click', toggleDarkMode);

// Initialize based on saved mode in local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('#modeToggle i').classList.replace('fa-moon', 'fa-sun');
    updateChartColors('dark');
} else {
    updateChartColors('light');
}

// Function to update chart colors based on theme
function updateChartColors(theme) {
    const charts = Chart.instances || []; // Ensure Chart.instances exists
    charts.forEach(chart => {
        chart.options.plugins.legend.labels.color = theme === 'dark' ? '#ffffff' : '#000000';
        chart.options.scales.x.ticks.color = theme === 'dark' ? '#ffffff' : '#000000';
        chart.options.scales.y.ticks.color = theme === 'dark' ? '#ffffff' : '#000000';
        chart.update();
    });
}

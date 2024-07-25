// Dummy data for Occupancy Statistics

// Function to update chart colors based on the theme
// Function to update chart colors based on the theme
function updateChartColors(theme) {
    const textColor = theme === 'dark' ? '#ffffff' : '#000000';
    const tooltipBgColor = theme === 'dark' ? '#333' : '#fff';
    const tooltipTextColor = theme === 'dark' ? '#ffffff' : '#000000';

    // Update Occupancy Chart
    occupancyChart.options.plugins.legend.labels.color = textColor;
    occupancyChart.options.scales.x.ticks.color = textColor;
    occupancyChart.options.scales.y.ticks.color = textColor;
    occupancyChart.options.plugins.tooltip.backgroundColor = tooltipBgColor;
    occupancyChart.options.plugins.tooltip.titleColor = tooltipTextColor; // Tooltip title text color
    occupancyChart.options.plugins.tooltip.bodyColor = tooltipTextColor; // Tooltip body text color
    occupancyChart.update();

    // Update Maintenance Chart
    maintenanceChart.options.plugins.legend.labels.color = textColor;
    maintenanceChart.options.scales.x.ticks.color = textColor;
    maintenanceChart.options.scales.y.ticks.color = textColor;
    maintenanceChart.options.plugins.tooltip.backgroundColor = tooltipBgColor;
    maintenanceChart.options.plugins.tooltip.titleColor = tooltipTextColor; // Tooltip title text color
    maintenanceChart.options.plugins.tooltip.bodyColor = tooltipTextColor; // Tooltip body text color
    maintenanceChart.update();

    // Update Room Types Chart
    roomTypesChart.options.plugins.legend.labels.color = textColor;
    roomTypesChart.options.plugins.tooltip.backgroundColor = tooltipBgColor;
    roomTypesChart.options.plugins.tooltip.titleColor = tooltipTextColor; // Tooltip title text color
    roomTypesChart.options.plugins.tooltip.bodyColor = tooltipTextColor; // Tooltip body text color
    roomTypesChart.update();
}


// Function to toggle dark mode
function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const theme = isDarkMode ? 'dark' : 'light';

    // Update the mode icon
    const icon = document.querySelector('#modeToggle i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }

    // Update chart colors
    updateChartColors(theme);

    // Save the theme to local storage
    localStorage.setItem('theme', theme);
}

// Event listener for the toggle button
document.getElementById('modeToggle').addEventListener('click', toggleDarkMode);

// Initialize charts
var ctx1 = document.getElementById('occupancyChart').getContext('2d');
var occupancyChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Occupancy Rate',
            data: [65, 59, 80, 81, 56, 55],
            backgroundColor: 'rgba(19, 102, 217, 0.2)',
            borderColor: '#1366D9',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: '#000000' // Default text color
                }
            },
            y: {
                ticks: {
                    color: '#000000' // Default text color
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000000' // Default text color
                }
            },
            tooltip: {
                backgroundColor: '#fff' // Default tooltip background color
            }
        }
    }
});

var ctx2 = document.getElementById('maintenanceChart').getContext('2d');
var maintenanceChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Maintenance Requests',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(19, 102, 217, 0.2)',
            borderColor: '#1366D9',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    color: '#000000' // Default text color
                }
            },
            y: {
                ticks: {
                    color: '#000000' // Default text color
                },
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#000000' // Default text color
                }
            },
            tooltip: {
                backgroundColor: '#fff' // Default tooltip background color
            }
        }
    }
});

var ctx3 = document.getElementById('roomTypesChart').getContext('2d');
var roomTypesChart = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Single Rooms', 'Quadruple Rooms', 'Double Rooms'],
        datasets: [{
            data: [30, 20, 50],
            backgroundColor: ['#FFD7B5', '#5283FF', '#F94727']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#000000' // Default text color
                }
            },
            tooltip: {
                backgroundColor: '#fff' // Default tooltip background color
            }
        }
    }
});

// Initialize based on saved mode in local storage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('#modeToggle i').classList.replace('fa-moon', 'fa-sun');
}

// Update charts on initialization
updateChartColors(savedTheme);

document.addEventListener('DOMContentLoaded', function() {
    const settingsButton = document.getElementById('settings-button');
    const settingsSection = document.getElementById('settings-section');
    const mainContent = document.querySelector('section[role="main"]');

    settingsButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Hide main content and show settings section
        mainContent.classList.add('d-none');
        settingsSection.classList.remove('d-none');
    });

    // If you want to show the main content again when clicking on other buttons
    // Add additional event listeners for other sidebar links
});

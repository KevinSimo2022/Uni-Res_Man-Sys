// Dummy data for Occupancy Statistics
var ctx = document.getElementById('occupancyChart').getContext('2d');
var occupancyChart = new Chart(ctx, {
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
            y: {
                beginAtZero: true
            }
        }
    }
});

// Dummy data for Maintenance Requests Over Time
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
            y: {
                beginAtZero: true
            }
        }
    }
});

// Dummy data for Room Types Utilization
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
        responsive: true
    }
});

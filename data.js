// Sample data for rooms
const roomsData = [
    { roomNumber: '101', bedType: 'Single', roomFloor: '1', roomFacility: 'AC', status: 'occupied' },
    { roomNumber: '102', bedType: 'Double', roomFloor: '1', roomFacility: 'Non-AC', status: 'available' },
    { roomNumber: '103', bedType: 'Suite', roomFloor: '1', roomFacility: 'AC', status: 'full' },
    { roomNumber: '104', bedType: 'Single', roomFloor: '1', roomFacility: 'AC', status: 'empty' },
    { roomNumber: '105', bedType: 'Double', roomFloor: '1', roomFacility: 'Non-AC', status: 'unavailable' },
    // Add more sample data as needed
];

// Sample data for management requests
const requestsData = [
    { requestId: 'R001', roomNumber: '101', roomFloor: '1', description: 'Fix AC', status: 'pending' },
    { requestId: 'R002', roomNumber: '102', roomFloor: '1', description: 'Repair Light', status: 'completed' },
    { requestId: 'R003', roomNumber: '103', roomFloor: '1', description: 'Clean Room', status: 'ongoing' },
    { requestId: 'R004', roomNumber: '104', roomFloor: '1', description: 'Replace Bed', status: 'pending' },
    { requestId: 'R005', roomNumber: '105', roomFloor: '1', description: 'Fix Door', status: 'completed' },
    // Add more sample data as needed
];

// Function to populate the rooms table
function populateRoomsTable(filter) {
    const tableBody = document.getElementById('roomsTable').querySelector('tbody');
    tableBody.innerHTML = '';
    const filteredData = roomsData.filter(room => filter === 'all' || room.status === filter);
    filteredData.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.roomNumber}</td>
            <td>${room.bedType}</td>
            <td>${room.roomFloor}</td>
            <td>${room.roomFacility}</td>
            <td>${room.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to populate the requests table
function populateRequestsTable(filter) {
    const tableBody = document.getElementById('requestsTable').querySelector('tbody');
    tableBody.innerHTML = '';
    const filteredData = requestsData.filter(request => filter === 'all' || request.status === filter);
    filteredData.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.requestId}</td>
            <td>${request.roomNumber}</td>
            <td>${request.roomFloor}</td>
            <td>${request.description}</td>
            <td>${request.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Event listeners for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const filter = event.target.getAttribute('data-filter');
        if (event.target.closest('.table-container').querySelector('table').id === 'roomsTable') {
            populateRoomsTable(filter);
        } else {
            populateRequestsTable(filter);
        }
    });
});

// Initial population of tables
populateRoomsTable('all');
populateRequestsTable('all');

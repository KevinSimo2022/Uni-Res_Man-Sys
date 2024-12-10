document.addEventListener('DOMContentLoaded', function () {
    const roomAvailability = [
        { room: 'A101', status: 'Available' },
        { room: 'A102', status: 'Occupied' },
        // More rooms...
    ];

    const ongoingOffers = [
        { offer: '10% off for early booking', property: 'Residence A' },
        { offer: 'Free gym access', property: 'Residence B' },
        // More offers...
    ];

    const locations = [
        { name: 'North Campus', residences: 5 },
        { name: 'South Campus', residences: 3 },
        // More locations...
    ];

    const roomAvailabilityDiv = document.getElementById('room-availability');
    const ongoingOffersDiv = document.getElementById('ongoing-offers');
    const locationsDiv = document.getElementById('locations');

    roomAvailability.forEach(room => {
        const p = document.createElement('p');
        p.textContent = `Room ${room.room}: ${room.status}`;
        roomAvailabilityDiv.appendChild(p);
    });

    ongoingOffers.forEach(offer => {
        const p = document.createElement('p');
        p.textContent = `${offer.offer} at ${offer.property}`;
        ongoingOffersDiv.appendChild(p);
    });

    locations.forEach(location => {
        const p = document.createElement('p');
        p.textContent = `${location.name}: ${location.residences} residences`;
        locationsDiv.appendChild(p);
    });
});

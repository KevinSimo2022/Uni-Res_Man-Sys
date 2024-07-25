function animateNumber(id, endValue, duration) {
    const element = document.getElementById(id);
    let startValue = 0;
    const step = endValue / (duration / 100);

    function updateNumber() {
        if (startValue < endValue) {
            startValue += step;
            if (startValue > endValue) {
                startValue = endValue;
            }
            element.textContent = Math.floor(startValue);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = endValue;
        }
    }

    updateNumber();
}

document.addEventListener('DOMContentLoaded', () => {
    animateNumber('checkIn', 23, 2000);
    animateNumber('checkOut', 13, 2000);
    animateNumber('inHotel', 60, 2000);
    animateNumber('availableRoom', 10, 2000);
    animateNumber('occupiedRoom', 90, 2000);

    animateNumber('cleanOccupied', 90, 2000);
    animateNumber('dirtyOccupied', 4, 2000);
    animateNumber('inspectedOccupied', 60, 2000);
    animateNumber('cleanAvailable', 90, 2000);
    animateNumber('dirtyAvailable', 4, 2000);
    animateNumber('inspectedAvailable', 60, 2000);
});

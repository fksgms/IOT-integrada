function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').textContent = timeString;
}

// Update clock immediately and set interval for every second
updateClock();
setInterval(updateClock, 1000);

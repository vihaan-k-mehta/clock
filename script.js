let speedMultiplier = 10; // 1 real second = 10 fake seconds
let currentTime = new Date();

function updateClock() {
    // Increment by multiplier in real milliseconds
    currentTime = new Date(currentTime.getTime() + 1000 * speedMultiplier);
    
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every 1 second in real time
setInterval(updateClock, 1000);
updateClock();

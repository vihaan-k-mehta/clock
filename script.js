let speedMultiplier = 10; // 1 real minute = 10 fake minutes
let currentTime = new Date();

function updateClock() {
    // Increment the current time by real delta * speedMultiplier
    currentTime = new Date(currentTime.getTime() + 1000 * speedMultiplier / 60);
    
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();

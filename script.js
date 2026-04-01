let speedMultiplier = 60; // 1 real second = 1 fake minute
let startTime = new Date(); // fake clock starting point
let realStart = Date.now(); // reference for real time

function updateClock() {
    let elapsedRealMs = Date.now() - realStart; // how much real time passed
    let elapsedFakeMs = elapsedRealMs * speedMultiplier; // scale by speed
    let currentTime = new Date(startTime.getTime() + elapsedFakeMs);

    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let seconds = String(currentTime.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    
    requestAnimationFrame(updateClock); // smooth continuous update
}

updateClock();

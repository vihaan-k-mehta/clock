// 1 real second = 1 fake hour
let speedMultiplier = 3600; // multiply elapsed real time in milliseconds
let startTime = new Date(); 
let realStart = performance.now();

function updateClock() {
    // Calculate how much fake time has passed
    let elapsedRealMs = performance.now() - realStart;
    let elapsedFakeMs = elapsedRealMs * speedMultiplier;

    let currentTime = new Date(startTime.getTime() + elapsedFakeMs);

    // Format hours, minutes, seconds
    let h = String(currentTime.getHours()).padStart(2, '0');
    let m = String(currentTime.getMinutes()).padStart(2, '0');
    let s = String(currentTime.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${h}:${m}:${s}`;

    // Smooth continuous update
    requestAnimationFrame(updateClock);
}

updateClock();

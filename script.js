// Set how many fake seconds pass per 1 real second
let fakeSecondsPerRealSecond = 600; // 1 real second = 10 fake minutes

let startTime = new Date();        // starting point of fake clock
let realStart = performance.now(); // reference real time

function updateClock() {
    // Real time elapsed in seconds
    let elapsedRealSec = (performance.now() - realStart) / 1000;

    // Calculate fake time elapsed
    let elapsedFakeMs = elapsedRealSec * fakeSecondsPerRealSecond * 1000;

    let currentTime = new Date(startTime.getTime() + elapsedFakeMs);

    let h = String(currentTime.getHours()).padStart(2, '0');
    let m = String(currentTime.getMinutes()).padStart(2, '0');
    let s = String(currentTime.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${h}:${m}:${s}`;

    requestAnimationFrame(updateClock);
}

updateClock();

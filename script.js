let fakeSpeed = 1000 * 60 * 60; // 1 real second = 1 fake hour in milliseconds
let startFakeTime = Date.now();

function updateClock() {
    // Ignore how often updateClock is called — calculate exact fake time
    let elapsed = (Date.now() - startFakeTime) * fakeSpeed / 1000;
    let now = new Date(startFakeTime + elapsed);

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${h}:${m}:${s}`;

    requestAnimationFrame(updateClock);
}

updateClock();

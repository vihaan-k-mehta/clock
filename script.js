const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// Correct multiplier: 18,000 fake seconds / 2,700 real seconds
const fakeMsPerRealMs = 6.6667; // 1 real ms = 6.6667 fake ms

let startFakeTime = new Date();
let realStart = Date.now();

function formatTime(val) {
    return val < 10 ? "0" + val : val;
}

function clock() {
    const elapsedRealMs = Date.now() - realStart;

    // Correct: scale by fakeMsPerRealMs, no extra *1000
    const elapsedFakeMs = elapsedRealMs * fakeMsPerRealMs;

    const d = new Date(startFakeTime.getTime() + elapsedFakeMs);

    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    dayOfWeekOutPut.innerHTML = weekday[d.getDay()];
    monthOutPut.innerHTML = monthName[d.getMonth()];
    dayOutPut.innerHTML = d.getDate();

    timeOutPut.innerHTML = `${formatTime(h)}:${formatTime(m)}`;
    secOutPut.innerHTML = `${formatTime(s)}`;
    ampmOutPut.innerHTML = h >= 12 ? "PM" : "AM";

    requestAnimationFrame(clock);
}

clock();

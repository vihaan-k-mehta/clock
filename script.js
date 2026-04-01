const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

// 1 real second = 6.6667 fake seconds (5 hours in 45 minutes)
const fakeSpeed = 6.6667;

let startFakeTime = new Date();
let realStart = Date.now();

function formatTime(val) {
    return val < 10 ? "0" + val : val;
}

function clock() {
    const elapsedRealMs = Date.now() - realStart;
    const elapsedFakeMs = elapsedRealMs * fakeSpeed * 1000; // convert seconds → ms
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

const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");

const speedInput = document.getElementById("speed");
const speedValue = document.getElementById("speedValue");

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let startFakeTime = new Date();
let realStart = Date.now();

// Initial multiplier
let speedMultiplier = parseFloat(speedInput.value);

// Update multiplier when slider changes
speedInput.addEventListener("input", () => {
  speedMultiplier = parseFloat(speedInput.value);
  speedValue.textContent = speedMultiplier;
});

function formatTime(val) {
  return val < 10 ? "0" + val : val;
}

function clock() {
  const elapsedRealMs = Date.now() - realStart;
  const elapsedFakeMs = elapsedRealMs * speedMultiplier;
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

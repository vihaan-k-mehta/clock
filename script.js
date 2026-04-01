// Select output elements
const timeOutPut = document.querySelector(".time");
const secOutPut = document.querySelector(".sec");
const ampmOutPut = document.querySelector(".ampm");
const monthOutPut = document.querySelector(".month");
const dayOfWeekOutPut = document.querySelector(".dayofweek");
const dayOutPut = document.querySelector(".day");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// How many fake seconds pass per 1 real second
const fakeSpeed = 600; // 1 real second = 10 fake minutes

// Store the "fake clock" start time
let startFakeTime = new Date();
let realStart = Date.now();

function formatTime(val) {
  return val < 10 ? "0" + val : val;
}

function clock() {
  // Calculate elapsed real time
  const elapsedRealMs = Date.now() - realStart;

  // Convert to fake milliseconds
  const elapsedFakeMs = elapsedRealMs * fakeSpeed;

  // Current fake time
  const d = new Date(startFakeTime.getTime() + elapsedFakeMs);

  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  dayOfWeekOutPut.innerHTML = weekday[d.getDay()];
  monthOutPut.innerHTML = monthName[d.getMonth()];
  dayOutPut.innerHTML = d.getDate();

  const time = `${formatTime(h)}:${formatTime(m)}`;
  const sec = `${formatTime(s)}`;
  const ampm = h >= 12 ? "PM" : "AM";

  timeOutPut.innerHTML = time;
  secOutPut.innerHTML = sec;
  ampmOutPut.innerHTML = ampm;

  requestAnimationFrame(clock); // smooth updates
}

// Initialize clock
clock();

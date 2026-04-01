// ----- Configuration -----
// How many fake seconds pass per 1 real second
const fakeSpeed = 600; // 1 real second = 10 fake minutes

// Store the "fake clock" start time
let startFakeTime = new Date();
let realStart = Date.now();

// ----- Update function -----
function updateClock() {
  // Calculate elapsed real time in milliseconds
  const elapsedRealMs = Date.now() - realStart;

  // Multiply by fakeSpeed to get elapsed fake milliseconds
  const elapsedFakeMs = elapsedRealMs * fakeSpeed;

  // Calculate the current fake time
  const now = new Date(startFakeTime.getTime() + elapsedFakeMs);

  // Extract hours, minutes, seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Display clock
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  // Smooth update every frame
  requestAnimationFrame(updateClock);
}

// Initialize clock
updateClock();

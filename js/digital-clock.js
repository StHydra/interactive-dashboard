function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // AM/PM session
  let session = "AM";
  if (hours >= 12) {
    session = "PM";
  }

  // Convert to 12-hour format
  if (hours > 12) {
    hours = hours - 12;
  }
  if (hours === 0) {
    hours = 12;
  }

  // Leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = hours + ":" + minutes + ":" + seconds + " " + session;
  const dateString = now.toLocaleDateString();

  document.getElementById("clock-face").innerHTML = timeString;
  document.getElementById("calendar-date").innerHTML = dateString;
}

// Run once immediately so there's no blank first second, then every second
updateClock();
setInterval(updateClock, 1000);
const dayEl = document.querySelector('.day');
const timeEl = document.querySelector('.time');

// prettier-ignore
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// * Get current Day of the week
const getCurrentDay = function () {
  const now = new Date();
  const day = days[now.getDay()];

  return day;
};

// * Get current Universal Coordinated Time
const getCurrentUTCTime = function () {
  const now = new Date();
  const currentTime = now.getTime();

  // The difference between the local time and UTC time
  const offsetInMilliseconds = now.getTimezoneOffset() * 60 * 1000;

  const accurateUTCTimeInMilliseconds = currentTime + offsetInMilliseconds;

  return accurateUTCTimeInMilliseconds;
};

const updateTime = function () {
  time += 1000;
  timeEl.innerHTML = time;
};

/* ----------------------------------------------------- */
dayEl.innerHTML = getCurrentDay();

let time = getCurrentUTCTime();
timeEl.innerHTML = time;

// * Update the Universal Coordinated Time every second
setInterval(updateTime, 1000);

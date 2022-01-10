const timer = document.querySelector('#time');
const startButton = document.querySelector('#StartButton');
const pauseButton = document.querySelector('#PauseButton');
const resetButton = document.querySelector('#ResetButton');

let time = 0,
  interval;

function showTime() {
  time += 1;
  timer.innerHTML = toHHMMSS(time);
}

function start() {
  interval = setInterval(showTime, 1000);
  hideButton([startButton]);
  showButton([pauseButton, resetButton]);
}

function pause() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    pauseButton.innerHTML = 'RESUME';
  } else {
    interval = setInterval(showTime, 1000);
    pauseButton.innerHTML = 'PAUSE';
  }
}

function reset() {
  clearInterval(interval);
  interval = null;
  pauseButton.innerHTML = 'PAUSE';
  time = 0;
  timer.innerHTML = toHHMMSS(time);
  hideButton([pauseButton, resetButton]);
  showButton([startButton]);
}

function toHHMMSS(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time - hours * 3600) / 60);
  let seconds = time - hours * 3600 - minutes * 60;

  hours = `${hours}`.padStart(2, '0');
  minutes = `${minutes}`.padStart(2, '0');
  seconds = `${seconds}`.padStart(2, '0');

  return hours + ':' + minutes + ':' + seconds;
}

function showButton(attribute) {
    attribute.forEach((btn) => (btn.style.display = 'inline-block'));
}
function hideBtn(BUtton) {
    attribute.forEach((Button) => (btn.style.display = 'none'));
}

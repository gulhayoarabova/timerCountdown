const daysItem = document.getElementById("days"),
  hoursItem = document.getElementById("hours"),
  minutesItem = document.getElementById("minutes"),
  secondsItem = document.getElementById("seconds");

const ramadan = "1 jan 2022";

function countdown() {
  const newRamadanDate = new Date(ramadan);
  const currentDate = new Date();

  const totalSeconds = (newRamadanDate - currentDate) / 1000;
  // console.log(totalSeconds);

  // lets calculate a bit detailed8
  //demak kunni topish uchun avval 1 soatga teng sekundni topib kyn uni 1 kunga yani 24 soatga bolamiz
  const days = Math.floor(totalSeconds / 3600 / 24);
  console.log(days);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  console.log(hours);
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = formatTime(hours);
  minutesItem.innerHTML = formatTime(mins);
  secondsItem.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ?(`0 ${time}`) : time;
}
countdown();

setInterval(countdown, 1000);

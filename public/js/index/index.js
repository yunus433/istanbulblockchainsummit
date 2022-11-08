const END_TIME = new Date('11.14.2022');

function updateTime() {
  const days = parseInt((END_TIME - new Date()) / 1000 / 60 / 60 / 24);
  const hours = parseInt((END_TIME - new Date()) / 1000 / 60 / 60) % 24;
  const minutes = parseInt((END_TIME - new Date()) / 1000 / 60) % 60;
  const seconds = parseInt((END_TIME - new Date()) / 1000) % 60;

  document.getElementById('days').innerHTML = (days < 10 ? '0' + days : days);
  document.getElementById('hours').innerHTML = (hours < 10 ? '0' + hours : hours);
  document.getElementById('minutes').innerHTML = (minutes < 10 ? '0' + minutes : minutes);
  document.getElementById('seconds').innerHTML = (seconds < 10 ? '0' + seconds : seconds);

  setTimeout(() => {
    updateTime();
  }, 300);
}

window.addEventListener('load', () => {
  updateTime();
});

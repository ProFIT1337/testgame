let leftButton = document.querySelector('.leftButton');
let rightButton = document.querySelector('.rightButton');
let buttons = [leftButton, rightButton];
let activeButton;
let startTime;
let bestRez = 150000;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function activateButton(button) {
  startTime = new Date();
  button.classList.add('active');
  activeButton = button;
}

function finishGame() {
  let rez = new Date() - startTime;
  document.querySelector('.res__value').innerText = rez + 'ms';

  if (rez < bestRez) {
    bestRez = rez;
    document.querySelector('.res__best__value').innerText = rez + 'ms';
  }
  activeButton.classList.remove('active');
  activeButton = undefined;
  setTimeout(() => {
    activateButton(buttons[getRandomInt(2)]);
  }, getRandomInt(3000));
}

function clickHandler(e) {
  if (e.target == activeButton && activeButton.classList.contains('active')) {
    finishGame();
  }
}

function start() {
  leftButton.onclick = clickHandler;
  rightButton.onclick = clickHandler;
  activateButton(leftButton);
}

start();

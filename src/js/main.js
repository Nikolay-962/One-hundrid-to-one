"use strict";
let card = document.querySelectorAll('.card');

let out = document.querySelector('.middle');
let start = document.querySelector('.start');
let end = document.querySelector('.end');

let totalOut = out.textContent;

const sum = (a, b) => {
  return Number(a) + Number(b);
}

card.forEach((element) => {
  const value = element.querySelector('.number').innerHTML;
  element.addEventListener('click', () => {
    element.classList.toggle('is-flipped');
    out.textContent = sum(totalOut, value);
    totalOut = sum(totalOut, value);
    lineOpen()
  });
})
start.addEventListener('click', () => {
  start.textContent = totalSum(allOne, totalOut);
  out.textContent = '';
  sessionStorage.setItem('ball-1', start.textContent);
})

end.addEventListener('click', () => {
  end.textContent = totalSum(allTwo, totalOut);
  out.textContent = '';
  sessionStorage.setItem('ball-2', end.textContent);
})

let error = document.querySelectorAll('.error-btn');
for (let i = 0; i < error.length; i++) {
  let er = error[i];
  er.addEventListener('click', () => {
    er.classList.toggle('visual');
    ansverError();
  })
};
function nextRound() {
  let audio = document.getElementById("next-round");
  audio.src = 'sounds/next-round.mp3';
  return;
}
let startGame = document.querySelector('.title-one');
startGame.addEventListener('click', () => {
  document.getElementById('next-round').play();
})
function lineOpen() {
  //let audio = document.getElementById("line-open");
  document.getElementById('line-open').play();
  //audio.src = 'sounds/line-open.mp3';
  return;
}
function ansverError() {
  //let audio = document.getElementById("error");
  document.getElementById('error').play();
  //audio.src = 'sounds/error.mp3';

  return;
}

let allOne = sessionStorage.getItem('ball-1');
let allTwo = sessionStorage.getItem('ball-2');
allOne = Number(allOne);
allTwo = Number(allTwo);

let question = document.querySelector('.question');
question.addEventListener('click', () => {
  question.classList.toggle('is-flipped');
  start.textContent = totalSum(allOne, totalOut);
  end.textContent = totalSum(allTwo, totalOut);
  //nextRound()
})

const totalSum = (a, b) => {
  return Number(a) + Number(b);
}

let infoFile = document.querySelector('.file');
let button = document.querySelector('.button-oll');
let on = document.getElementById('on');
//button.onclick = function () {
  //let oll  = infoFile.value;
  //on.innerHTML = oll;
  //infoFile.value = '';
//}

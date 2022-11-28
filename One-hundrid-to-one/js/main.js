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
  });
})
start.addEventListener('click', () => {
  start.textContent = totalSum(allOne, totalOut);
  out.textContent = '';
  localStorage.setItem('ball-1', start.textContent);
})

end.addEventListener('click', () => {
  end.textContent = totalSum(allTwo, totalOut);
  out.textContent = '';
  localStorage.setItem('ball-2', end.textContent);
})

let error = document.querySelectorAll('.error-btn');
for (let i = 0; i < error.length; i++) {
  let er = error[i];
  er.addEventListener('click', () => {
    er.classList.toggle('visual');
  })
};

let allOne = localStorage.getItem('ball-1');
let allTwo = localStorage.getItem('ball-2');
allOne = Number(allOne);
allTwo = Number(allTwo);

let question = document.querySelector('.question');
question.addEventListener('click', () => {
  question.classList.toggle('is-flipped');
  start.textContent = totalSum(allOne, totalOut);
  end.textContent = totalSum(allTwo, totalOut);
})

const totalSum = (a, b) => {
  return Number(a) + Number(b);
}



"use strict";

let card = document.querySelectorAll('.card');
let out = document.querySelector('.middle');
let start = document.querySelector('.start');
let end = document.querySelector('.end');
let sum = 0;
let balls = 0;

for (let i = 0; i < card.length; i++) {
  let num = card[i];
  num.addEventListener('click', () => {
    num.classList.toggle('is-flipped');
    let ball = +card[i].querySelector('.number').innerHTML;
    sum += ball;
    out.innerHTML = sum;
  })
};

function clearStorge() {
  localStorage.clear();
}

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
//console.log(allOne)

function clearStorge() {
  localStorage.removeItem();
}

let question = document.querySelector('.question');
question.addEventListener('click', () => {
  question.classList.toggle('is-flipped');
  start.value += allOne;
  end.value += allTwo;

})


let startOne = start.value;
let endOne = end.value;
startOne = Number(startOne);
endOne = Number(endOne)
//console.log(typeof startOne)

start.addEventListener('click', () => {
  start.value += sum;
  out.textContent = '';
  check();
  localStorage.setItem('ball-1', start.value);
})

end.addEventListener('click', () => {
  end.value += sum;
  out.textContent = '';
  check();
  localStorage.setItem('ball-2', end.value);
})



function check() {
  sum = '';
}



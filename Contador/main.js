const $div = document.querySelector("div"),
  $decrease = document.querySelector("#decrease"),
  $reset = document.querySelector("#reset"),
  $increase = document.querySelector("#increase");

let num = 0;

const incrementClick = () => {
  updateDisplay(++num);
};
const decreaseClick = () => {
  if (num >= 1) {
    updateDisplay(--num);
  }
};

const resetCounter = () => {
  num = 0;
  updateDisplay(num);
};

const $span = document.createElement("span");
$span.innerHTML = num;
$div.appendChild($span);

const updateDisplay = () => {
  $span.innerHTML = num;
};

$increase.addEventListener("click", incrementClick);
$decrease.addEventListener("click", decreaseClick);
$reset.addEventListener("click", resetCounter);

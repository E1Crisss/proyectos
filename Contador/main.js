$decrease = document.querySelector("#decrease"),
$reset = document.querySelector('#reset'),
$increase = document.querySelector("#increase");
const $div = document.querySelector("div");

let num = 0;

  const incrementClick = () => {
    updateDisplay(++num);
}
  const decreaseClick = () => {
    updateDisplay(--num);
}

const resetCounter = () => {
    num = 0;
    updateDisplay(num);
  }
  
  const $span = document.createElement("span");
const updateDisplay = () =>{

  $span.innerHTML = num;
  $div.appendChild($span);
}

  
  
$increase.addEventListener("click", incrementClick);
$decrease.addEventListener("click", decreaseClick);
$reset.addEventListener('click', resetCounter)


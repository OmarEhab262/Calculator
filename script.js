const num = document.querySelector(".num h1");
const result = document.querySelector(".result h1");
function playClickSound() {
  const clickSound = new Audio("vioce/click.mp4");
  clickSound.play();
}
function addNum(button) {
  var value = button.innerText;
  if (num.innerText == 0) {
    num.innerText = "";
  }
  num.innerText += value;
  playClickSound();
}
function addOperation(button) {
  var oper = button.innerText;
  const lastChar = num.innerText.slice(-1);
  if (!["/", "*", "-", "+", "%"].includes(lastChar)) {
    num.innerText += oper;
    playClickSound();
  }
}
function equal() {
  try {
    const expression = num.innerText;
    const resultValue = eval(expression);
    result.innerText = resultValue;
    playClickSound();
  } catch (error) {
    result.innerText = "Error";
  }
}
function clearrr() {
  num.innerText = "0";
  result.innerText = "0";
  playClickSound();
}
function removeLast() {
  const currentText = num.innerText;
  num.innerText = currentText.slice(0, -1);
  playClickSound();
}

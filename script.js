let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function isValidColor(color) {
  if (!color) return false;

  let test = document.createElement("div");
  test.style.color = color;
  return test.style.color !== "";
}

function changeColor(color) {
  color = color.trim();

  if (!color) {
    alert("Please enter a color!");
    return;
  }

  if (!isValidColor(color)) {
    alert("Invalid color! Please enter a valid color name or HEX code.");
    return;
  }

  container.style.backgroundColor = color;
  currentColorValue.textContent = color;
}

function handlerRandomBtnClick() {
  let randomColor = getRandomColor();
  changeColor(randomColor);
  colorInput.value = randomColor;
}

function handlerApplyBtnClick() {
  changeColor(colorInput.value);
}

randomBtn.addEventListener("click", handlerRandomBtnClick);
applyBtn.addEventListener("click", handlerApplyBtnClick);

colorInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    changeColor(colorInput.value);
  }
});

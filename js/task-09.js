const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = document.body.style.backgroundColor;
});



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector("[type=number]"),
  btnCreateEl: document.querySelector("[data-create]"),
  btnDestroyEl: document.querySelector("[data-destroy]"),
  boxesNewList: document.querySelector("#boxes"),
};

refs.btnCreateEl.addEventListener("click", createNewElements);

function createNewElements(amount) {
  amount = refs.inputEl.value;
  const arrOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const elementInBox = document.createElement("div");
    elementInBox.style.width = 30 + i * 10 + "px";
    elementInBox.style.height = 30 + i * 10 + "px";
    elementInBox.style.backgroundColor = getRandomHexColor();

    arrOfBoxes.push(elementInBox);
    refs.boxesNewList.append(...arrOfBoxes);
  }
}

refs.btnDestroyEl.addEventListener("click", (event) => {
  refs.boxesNewList.innerHTML = "";
});

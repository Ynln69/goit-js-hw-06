const input = document.querySelector("#validation-input");

input.addEventListener("blur", inputChangeColor);

function inputChangeColor(event) {
  const contentInput = event.currentTarget.value;
  input.classList.remove("invalid", "valid");
  const changeColor =
    contentInput.length === Number(input.dataset.length)
      ? input.classList.add("valid")
      : input.classList.add("invalid");
  console.log(changeColor);
}

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", inputChangeColor);
// input.classList.remove("ivalid", "valid");

// function inputChangeColor(event) {
//   if (event.currentTarget.value.length === Number(input.dataset.length)) {
//     input.classList.remove("invalid");
//     return input.classList.add("valid");
//   }
//   return input.classList.add("invalid");
// }

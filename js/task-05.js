const refs = {
  input: document.querySelector("#name-input"),
  nameLable: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== "") {
    refs.nameLable.textContent = event.currentTarget.value;
  } else refs.nameLable.textContent = "Anonymous";
}

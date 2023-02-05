const refs = {
  input: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.textEl.style.fontSize = refs.input.value + "px";
refs.input.addEventListener("input", (event) => {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
});

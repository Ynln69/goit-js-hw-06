const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredientsEl = document.querySelector("#ingredients");

const ingredientArr = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList = "item";
  return itemEl;
});
listIngredientsEl.append(...ingredientArr);

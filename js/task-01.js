const categoriesList = document.querySelector("#categories");
const listOfItem = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${listOfItem.length}`);

listOfItem.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

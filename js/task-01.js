// const list = document.querySelector("#categories");
const item = document.querySelectorAll(".item");
console.log("Number of categories:", item.length);

item.forEach(function (listElement) {
  console.log("Elements:", listElement.firstElementChild.textContent);
  console.log("Category:", listElement.querySelectorAll("li").length);
});

const title = document.getElementById("title");
title.style.backgroundColor = "red";
title.style.padding = "15px";
title.style.borderRadius = "15px";

//It shows all the content even if it is hidden by css
console.log("textContent: ", title.textContent);

//It does not shows all the content that is hidden by css
console.log("innerText: ", title.innerText);

//provides the content with html tags
console.log("innerHTML: ", title.innerHTML);

//querySelector: gives the first occurance
console.log(document.querySelector("h3"));

//querySelectorAll: gives all the occurance in NODELIST
const headings = document.querySelectorAll("h3");
headings.forEach((heading) => {
  heading.style.backgroundColor = "green";
  heading.style.padding = "15px";
  heading.style.borderRadius = "15px";
});

//getElementByClassName: gives all the occurance in HTMLCollections
const listItems = document.getElementsByClassName("list-item");
const listItemsArray = Array.from(listItems);
listItemsArray.map((item) => {
  item.style.color = "red";
});

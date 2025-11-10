const item1 = document.createElement("li");
item1.textContent = "First item";

const item2 = document.createElement("li");
item2.textContent = "Second item";
item2.classList.add("my-list")

const item3 = document.createElement("li")
item3.textContent = "Third item";

document.querySelector('#target').appendChild(item1);
document.querySelector('#target').appendChild(item2);
document.querySelector('#target').appendChild(item3);
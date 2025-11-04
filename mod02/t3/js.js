let dogs = [];

for (let i = 0; i < 6; i++) {
  dogs.push(prompt(`Dog ${i + 1}:`))
}

dogs.reverse()

for (let i = 0; i < dogs.length; i++) {
  let dog = document.createElement("li");
  dog.textContent = dogs[i];
  document.getElementById('list').appendChild(dog)
}
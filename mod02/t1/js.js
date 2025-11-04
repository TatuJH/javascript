let numbers = [];

for (let i = 0; i < 5; i++) {
  numbers.push(prompt(`Number ${i + 1}`));
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
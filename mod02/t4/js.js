let numbers = [];

while (true) {
  const num = parseFloat(prompt('Number:'));

  if (num === 0) {
    break;
  } else {
    numbers.push(num)
  }
}

numbers.sort(function(a, b){return b - a})

console.log(numbers)
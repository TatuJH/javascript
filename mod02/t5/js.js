let numbers = [];

while (true) {
  const input = parseFloat(prompt('Number:'));

  if (numbers.includes(input)) {
    alert('Number previously given')
    break;
  } else {
    numbers.push(input)
  }
}

numbers.sort(function(a, b){return a - b});

console.log(numbers);
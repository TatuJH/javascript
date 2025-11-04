const rolls = parseFloat(prompt('How many dice?'));

const desiredSum = parseFloat(prompt('What sum?'));

let match = 0;

for (let i = 0; i <= 100000; i++) {
  let sum = 0;

  for (let roll = 0; roll < rolls; roll++) {
  sum += Math.floor(Math.random() * 6) + 1
  }

  if (sum === desiredSum) {
    match += 1;
  }
}

document.querySelector('.text').innerHTML = 'Probability of rolling ' + desiredSum + ' with ' + rolls + ' dice is ' + (match / 100000 * 100) + '%.';
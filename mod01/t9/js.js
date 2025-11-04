const num = parseFloat(prompt('Number:'));

let isprime = false;

for (let i = 2; i <= num; i++) {
  if (num % i === 0 && i !== num) {
    break;
  } else if (num === i) {
    isprime = true;
  }
}

if (isprime) {
  document.querySelector('.text').innerHTML = num + ' is a prime number.';
} else {
  document.querySelector('.text').innerHTML = num + ' is not a prime number.';
}
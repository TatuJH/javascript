if (confirm('Should I calculate the square root?') === true) {
  const num = parseFloat(prompt('Number:'))
  document.querySelector('.text').innerHTML = Math.sqrt(num);
} else {
  document.querySelector('.text').innerHTML = 'The square root is not calculated.';
}

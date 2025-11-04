const num1 = parseFloat(prompt("Number 1:"));

const num2 = parseFloat(prompt("Number 2:"));

const num3 = parseFloat(prompt("Number 3:"));

document.querySelector('.text').innerHTML = 'Sum: ' + (num1 + num2 + num3) + ', ';

document.querySelector('.text').innerHTML = document.querySelector('.text').textContent + 'product: ' + (num1 * num2 * num3) + ', ';

document.querySelector('.text').innerHTML = document.querySelector('.text').textContent + 'average: ' + (num1 * num2 * num3) / 3;

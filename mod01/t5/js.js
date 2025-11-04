const year = parseFloat(prompt("Year:"));

if (year % 100 === 0 && year % 400 === 0) {
  document.querySelector('.text').innerHTML = 'The year ' + year + ' is a leap year.';
} else if (year % 100 !== 0 && year % 4 === 0) {
  document.querySelector('.text').innerHTML = 'The year ' + year + ' is a leap year.';
} else {
  document.querySelector('.text').innerHTML = 'The year ' + year + ' is not a leap year.';
}
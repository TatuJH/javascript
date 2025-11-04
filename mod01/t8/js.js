const syear = parseFloat(prompt('Start year:'));

const eyear = parseFloat(prompt('End year:'));

for (let i = syear; i <= eyear; i++) {
  if (i % 100 === 0 && i % 400 === 0) {
    let year = document.createElement("li");
    year.textContent = i;
    document.getElementById('list').appendChild(year)
  } else if (i % 100 !== 0 && i % 4 === 0) {
    let year = document.createElement("li");
    year.textContent = i;
    document.getElementById('list').appendChild(year)
  }
}
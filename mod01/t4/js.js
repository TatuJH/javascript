const name = prompt("What is your name?");

let house = Math.floor(Math.random() * 4) + 1;

if (house === 1) {
  house = 'Gryffindor';
} else if (house === 2) {
  house = 'Slytherin';
} else if (house === 3) {
  house = 'Ravenclaw';
} else {
  house = 'Hufflepuff';
}

document.querySelector('.text').innerHTML = name + ', you are ' + house;
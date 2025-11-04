function roll(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function main() {
  let rolls = [];

  let currentRoll = 0;

  const sideAmount = parseInt(prompt('Number of sides:'))

  while (currentRoll !== sideAmount) {
    currentRoll = roll(sideAmount);

    rolls.push(currentRoll);
  }

  for (let i = 0; i < rolls.length; i++) {
  let dieRoll = document.createElement("li");
  dieRoll.textContent = rolls[i];
  document.getElementById('list').appendChild(dieRoll);
  }
}

main()


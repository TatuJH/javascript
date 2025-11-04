function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  let rolls = [];

  let currentRoll = 0;

  while (currentRoll !== 6) {
    currentRoll = roll();

    rolls.push(currentRoll);
  }

  for (let i = 0; i < rolls.length; i++) {
  let dieRoll = document.createElement("li");
  dieRoll.textContent = rolls[i];
  document.getElementById('list').appendChild(dieRoll);
  }
}

main()


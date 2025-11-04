const cAmount = parseInt(prompt('Number of candidates:'));

let candidates = [];

for (let i = 0; i < cAmount; i++) {
  candidates.push(new Object({name:prompt(`Name of candidate ${i + 1}:`), votes:0}));
}

const vAmount = parseInt(prompt('Number of voters:'));

for (let i = 0; i < vAmount; i++) {
  const cName = prompt(`Voter ${i + 1}, choose candidate:`);

  let candidate = candidates.find(x => x.name === cName);
  if (candidate) {
    candidate["votes"] += 1;
  }
}

let winner = candidates[0];

for (let i = 0; i < candidates.length; i++) {
  if (candidates[i]["votes"] > winner["votes"]) {
    winner = candidates[i];
  }
}

console.log('The winner is ' + winner["name"] + ' with ' + winner["votes"] + ' votes.');

for (let i = 0; i < candidates.length; i++) {
  console.log(candidates[i]["name"] + ': ' + candidates[i]["votes"] + ' votes');
}
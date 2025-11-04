const amount = parseFloat(prompt('How many participants?'));

let participants = [];

for (let i = 0; i < amount; i++) {
  participants.push(prompt(`Participant ${i + 1}:`))
}

participants.sort()

for (let i = 0; i < participants.length; i++) {
  let participant = document.createElement("li");
  participant.textContent = participants[i];
  document.getElementById('list').appendChild(participant)
}
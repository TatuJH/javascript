document.getElementById("source").addEventListener("submit", function(event) {event.preventDefault();
  document.getElementById("target").textContent =
      `Your name is ${document.querySelector('input[name="firstname"]').value} ${document.querySelector('input[name="lastname"]').value}`;
});

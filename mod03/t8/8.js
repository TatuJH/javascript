const button = document.getElementById("start");
button.addEventListener("click", a)

function a() {
  const num1 = parseInt(document.getElementById("num1").value);

  const num2 = parseInt(document.getElementById("num2").value);

  const operation = document.getElementById("operation").value;

  if (operation === "add") {
    document.getElementById("result").textContent = `${num1 + num2}`;
  } else if (operation === "sub") {
    document.getElementById("result").textContent = `${num1 - num2}`;
  } else if (operation === "multi") {
    document.getElementById("result").textContent = `${num1 * num2}`;
  } else if (operation === "div") {
    document.getElementById("result").textContent = `${num1 / num2}`;
  }
}

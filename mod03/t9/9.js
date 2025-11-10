const button = document.getElementById("start");
button.addEventListener("click", a);

function a() {
  const inputField = document.getElementById("calculation");

  const operation = inputField.value.split("");

  console.log(operation)

  if (inputField.value.includes("+")) {
    document.getElementById("result").textContent = `${parseInt(operation[0]) + parseInt(operation[2])}`;
  } else if (inputField.value.includes("-")) {
    document.getElementById("result").textContent = `${parseInt(operation[0]) - parseInt(operation[2])}`;
  } else if (inputField.value.includes("*")) {
    document.getElementById("result").textContent = `${parseInt(operation[0]) * parseInt(operation[2])}`;
  } else if (inputField.value.includes("/")) {
    document.getElementById("result").textContent = `${parseInt(operation[0]) / parseInt(operation[2])}`;
  }
}
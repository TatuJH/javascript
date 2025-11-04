function concat(array) {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result;
}

document.querySelector('.text').innerHTML = concat(["Johnny", "DeeDee", "Joey", "Marky"]);
const p = document.querySelector('#trigger');
p.addEventListener("mouseover", a);
p.addEventListener("mouseout", b);

function a() {
  document.querySelector('#target').src = "img/picB.jpg";
}

function b() {
  document.querySelector('#target').src = "img/picA.jpg";
}
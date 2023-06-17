let precio = 15000;

let monto = document.querySelector("#cantidad");
let color = document.querySelector("#color");

let button = document.querySelector("#operar");

button.addEventListener("click", () => {
  document.querySelector("#totalPrice").innerHTML = monto.value * precio;
  document.querySelector("#qt").innerHTML = monto.value;
  document.querySelector("#selectedColor").style.backgroundColor = color.value;
});

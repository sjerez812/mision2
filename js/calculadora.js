function actualizarHora() {
  let ahora = new Date();
  let horas = ahora.getHours().toString().padStart(2, "0");
  let minutos = ahora.getMinutes().toString().padStart(2, "0");
  let segundos = ahora.getSeconds().toString().padStart(2, "0");

  let horaFormateada = `${horas}:${minutos}:${segundos}`;
  document.getElementById("reloj").textContent = horaFormateada;
}

setInterval(actualizarHora, 1000);

actualizarHora();

let pantalla = document.getElementById("pantalla");
let operacionActual = "";

function ingresarNumero(numero) {
  if (pantalla.textContent === "0") {
    pantalla.textContent = numero;
  } else {
    pantalla.textContent += numero;
  }
  operacionActual += numero;
}

function ingresarOperacion(operador) {
  let ultimoCaracter = operacionActual.slice(-1);
  if ("+-*/%".includes(ultimoCaracter)) return; // Evita doble operador
  pantalla.textContent += " " + operador + " ";
  operacionActual += operador;
}

function calcularResultado() {
  try {
    let resultado = eval(operacionActual);
    pantalla.textContent = resultado;
    operacionActual = resultado.toString();
  } catch (e) {
    pantalla.textContent = "Error";
    operacionActual = "";
  }
}

function limpiar() {
  pantalla.textContent = "0";
  operacionActual = "";
}

function borrar() {
  operacionActual = operacionActual.slice(0, -1);
  pantalla.textContent = operacionActual || "0";
}

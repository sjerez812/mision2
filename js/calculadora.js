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

//calculadora
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

  if ("+-*/".includes(ultimoCaracter) && operador !== "%") return; // Evita doble operador repetido

  if (operador === "%") {
    let valores = operacionActual.split(/[\+\-\*\/]/); // Divide la operación en números
    let ultimoNumero = valores[valores.length - 1];

    if (ultimoNumero) {
      let base = parseFloat(valores[valores.length - 2]) || 0; // Toma el número antes del operador
      let porcentaje = (parseFloat(ultimoNumero) / 100) * base; // Calcula el porcentaje

      operacionActual = operacionActual.replace(ultimoNumero, porcentaje);
      pantalla.textContent = eval(operacionActual); // Evalúa la operación completa
      return;
    }
  } else {
    pantalla.textContent += " " + operador + " ";
    operacionActual += operador;
  }
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

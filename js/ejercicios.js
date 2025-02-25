//reloj
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

//fibonacci
function fibonacci(n) {
  if (n < 0) return "Número inválido";
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function calcularFibonacci() {
  let numero = parseInt(document.getElementById("numero").value);
  let resultado = fibonacci(numero);
  document.getElementById("resultado").textContent = resultado;
}

//ordenador de números
function ordenarNumeros() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  if (num1 === "" || num2 === "" || num3 === "") {
    document.getElementById("resultado").textContent =
      "Por favor, ingresa los tres números.";
    return;
  }

  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  let numeros = [num1, num2, num3];
  numeros.sort((a, b) => b - a);

  document.getElementById("ordenados").textContent = numeros.join(", ");
}

//factorial
function factorial(n) {
  if (n < 0) return "Número inválido";
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function calcularFactorial() {
  let numero = parseInt(document.getElementById("numerof").value);
  if (isNaN(numero)) {
    document.getElementById("resultado").textContent =
      "Por favor, ingresa un número válido.";
    return;
  }
  document.getElementById("resultadof").textContent = factorial(numero);
}

//función suma
function sumarNumeros() {
  let nume1 = parseFloat(document.getElementById("numero1s").value);
  let nume2 = parseFloat(document.getElementById("numero2s").value);

  if (isNaN(nume1) || isNaN(nume2)) {
    document.getElementById("resultadoSuma").textContent =
      "Ingresa números válidos.";
    return;
  }

  let suma = nume1 + nume2;
  document.getElementById("resultadoSuma").textContent = suma;
}

// Cálculo de operaciones básicas
function calcularOperaciones() {
  let numbob1 = parseFloat(document.getElementById("numob1").value);
  let numbob2 = parseFloat(document.getElementById("numob2").value);

  if (isNaN(numbob1) || isNaN(numbob2)) {
    alert("Por favor, ingresa números válidos.");
    return;
  }

  document.getElementById("suma").textContent = numbob1 + numbob2;
  document.getElementById("resta").textContent = numbob1 - numbob2;
  document.getElementById("multiplicacion").textContent = numbob1 * numbob2;
  document.getElementById("division").textContent =
    numbob2 !== 0 ? (numbob1 / numbob2).toFixed(2) : "Error (división por 0)";
  document.getElementById("modulo").textContent =
    numbob2 !== 0 ? numbob1 % numbob2 : "Error (módulo por 0)";
  document.getElementById("raiz1").textContent =
    numbob1 >= 0 ? Math.sqrt(numbob1).toFixed(2) : "Error (número negativo)";
  document.getElementById("raiz2").textContent =
    numbob2 >= 0 ? Math.sqrt(numbob2).toFixed(2) : "Error (número negativo)";
  document.getElementById("potencia").textContent = numbob1 ** numbob2;
}

//encontrar el mayor
function encontrarMayor() {
  let n1 = parseFloat(document.getElementById("n1").value);
  let n2 = parseFloat(document.getElementById("n2").value);
  let n3 = parseFloat(document.getElementById("n3").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    document.getElementById("mayorr").textContent =
      "Por favor, ingresa tres números válidos.";
    return;
  }

  if (n1 >= n2 && n1 >= n3) {
    mayor = n1;
  } else if (n2 >= n1 && n2 >= n3) {
    mayor = n2;
  } else {
    mayor = n3;
  }

  document.getElementById("mayorr").textContent = "El mayor es: " + mayor;
}

//múltiplo 3 y 5
function multiploTresCinco() {
  let num = parseInt(document.getElementById("numero35").value);
  let resultadoTexto = document.getElementById("resultado35");

  if (isNaN(num)) {
    resultadoTexto.textContent = "Por favor, ingresa un número válido.";
    resultadoTexto.style.color = "red";
    return;
  }

  if (num % 3 === 0 && num % 5 === 0) {
    resultadoTexto.textContent = num + " es múltiplo de 3 y 5 al mismo tiempo.";
    resultadoTexto.style.color = "green";
  } else {
    resultadoTexto.textContent =
      num + " no es múltiplo de 3 y 5 al mismo tiempo";
  }
}

//divisores exactos
function encontrarDivisores() {
  let num = parseInt(document.getElementById("numerodiv").value);
  let resultadoTexto = document.getElementById("resultadodiv");

  if (isNaN(num) || num <= 0) {
    resultadoTexto.textContent =
      "Por favor, ingresa un número entero positivo.";
    resultadoTexto.style.color = "red";
    return;
  }

  let divisores = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisores.push(i);
    }
  }

  resultadoTexto.textContent =
    "Los divisores de " + num + " son: " + divisores.join(", ");
}

//primo o no
function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function verificarPrimo() {
  let num = parseInt(document.getElementById("numerop").value);
  let resultadoTexto = document.getElementById("resultadop");

  if (isNaN(num) || num <= 0) {
    resultadoTexto.textContent = "Por favor, ingresa un número entero positivo";
    return;
  }

  if (esPrimo(num)) {
    resultadoTexto.textContent = num + " es un número primo";
  } else {
    resultadoTexto.textContent = num + " no es un número primo";
  }
}

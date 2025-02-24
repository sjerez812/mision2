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

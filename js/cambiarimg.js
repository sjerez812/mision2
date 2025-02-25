//cambiar desde la lista
function cambiarImagen2() {
  let selector = document.getElementById("selectorImagen");
  let imagen = document.getElementById("miImagen2");
  imagen.src = selector.value;
}

//cambiar con clic
function cambiarImagenClic() {
  let imagen = document.getElementById("miImagen");
  let imagenActual = imagen.src;

  if (imagenActual.includes("/img/happy1.png")) {
    imagen.src = "/img/happy2.png";
  } else if (imagenActual.includes("/img/happy2.png")) {
    imagen.src = "/img/happy3.png"; // Tercera imagen
  } else {
    imagen.src = "/img/happy1.png"; // Vuelve a la primera
  }
}

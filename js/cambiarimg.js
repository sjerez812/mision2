function cambiarImagen2() {
  let selector = document.getElementById("selectorImagen");
  let imagen = document.getElementById("miImagen2");
  imagen.src = selector.value;
}

function cambiarImagen() {
  //lectura de la imagen inicial
  let imagen = document.getElementById("miImagen");
  // en un if pregunto que estado tiene si esta en la imagen 1 "perros" cambio a gatos
  if (imagen.src.includes("/img/faru.png")) {
    imagen.src = "/img/lyla.png";
    imagen.style.borderRadius = "20px";
  } else {
    imagen.src = "/img/faru.png";
  }
}

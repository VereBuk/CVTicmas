var botonDescripcion = document.getElementById("boton-descripcion");
var descripcion = document.getElementById("descripcion");

botonDescripcion.addEventListener("click", function() {
  descripcion.innerHTML = "Soy una diseñadora gráfica amante del café, el arte y los gatos. Me encanta trabajar en proyectos creativos y divertidos que me permitan experimentar con nuevas ideas y técnicas. Mi objetivo es siempre crear diseños atractivos y funcionales que superen las expectativas de mis clientes.";
});

var elemento = document.querySelector(".cambiar-color");

elemento.addEventListener("mouseover", function() {
  elemento.style.backgroundColor = "lightgreen";
});

elemento.addEventListener("mouseout", function() {
  elemento.style.backgroundColor = " rgb(247, 246, 246)";
});

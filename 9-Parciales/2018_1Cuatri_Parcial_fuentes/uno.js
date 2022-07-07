
function mostrar()
{
let ancho;
let largo;
let perimetro;

ancho = prompt("Ancho: ");
ancho = parseInt(ancho);

largo = prompt("Largo: ");
largo = parseInt(largo);

perimetro = ancho * 2 + largo * 2;

alert("Permimetro: " + perimetro);
}

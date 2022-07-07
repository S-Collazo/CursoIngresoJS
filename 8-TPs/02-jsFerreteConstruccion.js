/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    let largo;
    let ancho;
    let perimetro;
    let rectangulo;

    largo = document.getElementById('txtIdLargo').value;
    largo = parseFloat(largo);

    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;
    rectangulo = perimetro * 3;

    alert("Largo de alambre: " + rectangulo.toFixed(2) + " cm");
}
function Circulo() {
    let radio;
    let circunferencia;
    let circulo;

    radio = document.getElementById('txtIdRadio').value;
    radio = parseFloat(radio);

    circunferencia = 2 * Math.PI * radio;
    circulo = circunferencia * 3;

    alert("Largo de alambre: " + circulo.toFixed(2) + " cm");
}
function Materiales() {
    let largo;
    let ancho;
    let perimetro;
    let cemento;
    let cal;

    largo = document.getElementById('txtIdLargo').value;
    largo = parseFloat(largo);

    ancho = document.getElementById('txtIdAncho').value;
    ancho = parseFloat(ancho);

    perimetro = largo * 2 + ancho * 2;

    cemento = perimetro * 2 / 4;
    cemento = parseInt(cemento);
    cal = perimetro * 3 / 4;
    cal = parseInt(cal);

    alert("Materiales contrapiso: " + cemento + " bolsas de cemento y " + cal + " bolsas de cal");
}

/* Santiago Collazo - santiago.collazo7@gmail.com */
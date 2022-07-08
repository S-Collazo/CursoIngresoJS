/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseFloat(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseFloat(precioTres);

    resultado = precioUno + precioDos + precioTres;

    alert("Suma: " + resultado.toFixed(1));
}

function Promedio() {
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseFloat(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseFloat(precioTres);

    resultado = (precioUno + precioDos + precioTres) / 3;

    alert("Promedio: " + resultado.toFixed(1));
}

function PrecioFinal() {
    let precioUno;
    let precioDos;
    let precioTres;
    let total;
    let resultado;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioUno = parseFloat(precioUno);

    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioDos = parseFloat(precioDos);

    precioTres = document.getElementById('txtIdPrecioTres').value;
    precioTres = parseFloat(precioTres);

    total = precioUno + precioDos + precioTres;

    resultado = total + (total * 21 / 100);

    alert("Precio Final: " + resultado.toFixed(1));
}

// Santiago Collazo - santiago.collazo7@gmail.com
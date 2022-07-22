/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numero;
	let suma;
	let cantidad;
	let verificador;
	let promedio;

	numero = 0;

	suma = 0;

	cantidad = 0;

	do {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		suma = suma + numero;

		cantidad++;

		verificador = confirm("¿Continuar agregando números?");
	} while (verificador);

	promedio = suma / cantidad;
	promedio = parseFloat(promedio);
	promedio = promedio.toFixed(2);

	document.getElementById('txtIdSuma').value = suma;

	document.getElementById('txtIdPromedio').value = promedio;
}

// Santiago Collazo - santiago.collazo7@gmail.com
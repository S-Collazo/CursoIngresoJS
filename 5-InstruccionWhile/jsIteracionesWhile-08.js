/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let numero;
	let totalPositivo;
	let totalNegativo;
	let verificador;

	numero = 0;

	totalPositivo = 0;

	totalNegativo = 1;

	do {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		if (numero > 0) {
			totalPositivo = totalPositivo + numero;
		} else {
			totalNegativo = totalNegativo * numero;
		}

		verificador = confirm("¿Continuar agregando números?")
	} while (verificador);

	document.getElementById('txtIdSuma').value = totalPositivo;

	document.getElementById('txtIdProducto').value = totalNegativo;
}

// Santiago Collazo - santiago.collazo7@gmail.com
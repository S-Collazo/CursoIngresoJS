/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero;
	let numeroMaximo;
	let numeroMinimo;
	let verificador;

	numeroMaximo = Number.NEGATIVE_INFINITY;

	numeroMinimo = Number.POSITIVE_INFINITY;

	do {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		if (numero > numeroMaximo) {
			numeroMaximo = numero;
		} else {
			if (numero < numeroMinimo) {
				numeroMinimo = numero;
			}
		}

		verificador = confirm("¿Continuar agregando números?")
	} while (verificador);

	document.getElementById('txtIdMaximo').value = numeroMaximo;

	document.getElementById('txtIdMinimo').value = numeroMinimo;
}

// Santiago Collazo - santiago.collazo7@gmail.com
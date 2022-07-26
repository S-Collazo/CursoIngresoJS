/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
	let numero;
	let bandera;
	let numeroMaximo;
	let numeroMinimo;
	let verificador;

	bandera = true;

	numeroMaximo = 0;
	numeroMinimo = 0;

	do {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		if (bandera == true) {
			numeroMinimo = numero;
			numeroMaximo = numero;

			bandera = false;
		}
		else {
			if (numero > numeroMaximo) {
				numeroMaximo = numero;
			}
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
function mostrar() {
	let numero;
	let suma;
	let cantidad;
	let promedio;

	numero = 0;

	suma = 0;

	cantidad = 0;

	while (cantidad < 5) {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		suma = suma + numero;

		cantidad++;
	}

	promedio = suma / cantidad;
	promedio = parseFloat(promedio);
	promedio = promedio.toFixed(2);

	document.getElementById('txtIdSuma').value = suma;

	document.getElementById('txtIdPromedio').value = promedio;
}

// Santiago Collazo - santiago.collazo7@gmail.com
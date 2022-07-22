/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	let numero;
	let verificador;
	let sumaPos;
	let sumaNeg;
	let cantidadPos;
	let cantidadNeg;
	let cantidadCero;
	let cantidadPar;
	let promedioPos;
	let promedioNeg;
	let diferencia;
	let mensaje;

	sumaPos = 0;

	sumaNeg = 0;

	cantidadPos = 0;

	cantidadNeg = 0;

	cantidadCero = 0;

	cantidadPar = 0;

	do {
		numero = prompt("Indicar número:");
		numero = parseInt(numero);

		if (numero == 0) {
			cantidadCero++;
		} else {
			if (numero > 0) {
				sumaPos = sumaPos + numero;
				cantidadPos++;
			} else {
				sumaNeg = sumaNeg + numero;
				cantidadNeg++;
			}
		}

		if (numero % 2 == 0) {
			cantidadPar++;
		}

		verificador = confirm("¿Continuar agregando números?");
	} while (verificador);

	promedioPos = sumaPos / cantidadPos;
	promedioPos = parseFloat(promedioPos);
	promedioPos = promedioPos.toFixed(2);

	promedioNeg = sumaNeg / cantidadNeg;
	promedioNeg = parseFloat(promedioNeg);
	promedioNeg = promedioNeg.toFixed(2);

	diferencia = sumaNeg + sumaPos;

	/* mensaje = "Suma de los positivos: " + sumaPos + "\n";
	mensaje += "Suma de los negativos: " + sumaNeg + "\n";
	mensaje += "Cantidad de positivos: " + cantidadPos + "\n";
	mensaje += "Cantidad de negativos: " + cantidadNeg + "\n";
	mensaje += "Cantidad de ceros: " + cantidadCero + "\n";
	mensaje += "Cantidad de números pares: " + cantidadPar + "\n";
	mensaje += "Promedio de positivos: " + promedioPos + "\n";
	mensaje += "Promedio de negativos: " + promedioNeg + "\n";
	mensaje += "Diferencia entre positivos y negativos: " + diferencia + "\n";
	
	alert(mensaje);*/

	document.write("Suma de los positivos: " + sumaPos);
	document.write("<br>");
	document.write("Suma de los negativos: " + sumaNeg);
	document.write("<br>");
	document.write("Cantidad de positivos: " + cantidadPos);
	document.write("<br>");
	document.write("Cantidad de negativos: " + cantidadNeg);
	document.write("<br>");
	document.write("Cantidad de ceros: " + cantidadCero);
	document.write("<br>");
	document.write("Cantidad de números pares: " + cantidadPar);
	document.write("<br>");
	document.write("Promedio de positivos: " + promedioPos);
	document.write("<br>");
	document.write("Promedio de negativos: " + promedioNeg);
	document.write("<br>");
	document.write("Diferencia entre positivos y negativos: " + diferencia);
}

// Santiago Collazo - santiago.collazo7@gmail.com
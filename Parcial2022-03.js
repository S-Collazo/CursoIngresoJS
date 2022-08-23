/*
3)Una distribuidora de bebidas llena 5 camiones con sus productos y necesita guardar ciertos datos de cada una:
-Nombre del conductor
-Cantidad de litros de agua transportada($100 el litro)
-Cantidad de litros de gaseosa transportada ($150 el litro)
-Cantidad de litros de cerveza transportada ($200 el litro)
Y debemos mostrar que tipo de bebida se transportó en mayor cantidad (cerveza,agua o gaseosa)
Además se pide un total de facturación que estará dado por cada litro de gaseosa vendida a $150,
cada litro de agua a $100 y cada litro de cerveza a $200.
*/

function mostrar() {
	let i;
	let mensaje;

	let conductor;

	let litrosAgua;
	let litrosGaseosa;
	let litrosCerveza;

	let mayorCantidad;

	let litrosAguaTotal;
	let litrosGaseosaTotal;
	let litrosCervezaTotal;

	let totalAgua;
	let totalGaseosa;
	let totalCerveza;
	let totalFinal;

	litrosAguaTotal = 0;
	litrosGaseosaTotal = 0;
	litrosCervezaTotal = 0;

	totalFinal = 0;

	for (i = 0; i < 5; i++) {
		do {
			conductor = prompt("Nombre del conductor:");
		} while (!(isNaN(conductor)));

		do {
			litrosAgua = prompt("Cantidad de litros de agua transportada:");
			litrosAgua = parseInt(litrosAgua);
		} while (isNaN(litrosAgua) || litrosAgua < 0);

		do {
			litrosGaseosa = prompt("Cantidad de litros de gaseosa transportada:");
			litrosGaseosa = parseInt(litrosGaseosa);
		} while (isNaN(litrosGaseosa) || litrosGaseosa < 0);

		do {
			litrosCerveza = prompt("Cantidad de litros de cerveza transportada:");
			litrosCerveza = parseInt(litrosCerveza);
		} while (isNaN(litrosCerveza) || litrosCerveza < 0);

		if (litrosAgua > 0) {
			litrosAguaTotal = litrosAguaTotal + litrosAgua;
		}
		if (litrosGaseosa > 0) {
			litrosGaseosaTotal = litrosGaseosaTotal + litrosGaseosa;
		}
		if (litrosCerveza > 0) {
			litrosCervezaTotal = litrosCervezaTotal + litrosCerveza;
		}
	}

	if (litrosAguaTotal > litrosGaseosaTotal && litrosAguaTotal > litrosCervezaTotal) {
		mayorCantidad = "Agua";
	} else {
		if (litrosGaseosaTotal > litrosAguaTotal && litrosGaseosaTotal > litrosCervezaTotal) {
			mayorCantidad = "Gaseosa";
		} else {
			mayorCantidad = "Cerveza";
		}
	}

	totalAgua = litrosAguaTotal * 100;
	totalGaseosa = litrosGaseosaTotal * 150;
	totalCerveza = litrosCervezaTotal * 200;

	totalFinal = totalAgua + totalGaseosa + totalCerveza;

	mensaje = "Bebida transportada en mayor cantidad: " + mayorCantidad + "\n";
	mensaje += "Total de facturación: " + totalFinal + "\n";

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
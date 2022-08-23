/*
1)De 5  personas que ingresan a la farmacia se deben tomar y validar los siguientes datos.
nombre, numero de espera(del 0 al 99),DNI(validar entre 10.000.000 a 99.999.999) 
y monto de la factura emitida (validar que no sea negativo):
a)informar el promedio gastado por persona.
b)La cantidad de personas que su DNI es menor a 80.000.000 
y la cantidad de personas que su DNI es igual o mayor a los 80.000.000
c)el nombre y numero de espera del que más gastó
pedir datos por prompt y mostrar por document.write

*/

function mostrar() {
	let i;
	let bandera;

	let nombre;
	let numeroEspera;
	let dni;
	let factura;

	let gastoTotal;
	let promedio;
	let dniMenores;
	let dniMayores;
	let montoMasGasto;
	let nombreMasGasto;
	let numeroEsperaMasGasto;

	bandera = true;

	gastoTotal = 0;

	dniMenores = 0;

	dniMayores = 0;

	for (i = 0; i < 5; i++) {
		do {
			nombre = prompt("Nombre:");
		} while (!(isNaN(nombre)));

		do {
			numeroEspera = prompt("Numero de espera:");
			numeroEspera = parseInt(numeroEspera);
		} while (!(numeroEspera >= 0 && numeroEspera <= 99));
		
		do {
			dni = prompt("DNI:");
			dni = parseInt(dni);
		} while (!(dni >= 10000000 && dni <= 99999999));
		
		do {
			factura = prompt("Monto de la factura:");
			factura = parseInt(factura);
		} while (factura < 0);

		gastoTotal = gastoTotal + factura;

		if (dni < 80000000) {
			dniMenores++;
		} else {
			dniMayores++;
		}

		if (bandera) {
			nombreMasGasto = nombre;
			montoMasGasto = factura;
			numeroEsperaMasGasto = numeroEspera;

			bandera = false;
		} else {
			if (factura > montoMasGasto) {
				nombreMasGasto = nombre;
				montoMasGasto = factura;
				numeroEsperaMasGasto = numeroEspera;
			}
		}
	}

	promedio = gastoTotal / 5;
	promedio = parseFloat(promedio);
	promedio = promedio.toFixed(2);

	document.write("<br> Promedio gastado por persona: " + promedio);
	document.write("<br> Cantidad de personas con DNI menor a 80.000.000: " + dniMenores);
	document.write("<br> Cantidad de personas con DNI mayor o igual a 80.000.000: " + dniMayores);
	document.write("<br> Nombre de la persona que más gastó: " + nombreMasGasto);
	document.write("<br> Numero de espera de la persona que más gastó: " + numeroEsperaMasGasto);
}

// Santiago Collazo - santiago.collazo7@gmail.com
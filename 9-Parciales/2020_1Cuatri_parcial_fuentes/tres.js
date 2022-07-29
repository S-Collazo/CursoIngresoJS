function mostrar() {
	let bandera;
	let verificador;
	let mensaje;

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;

	let temperaturaMayor;
	let nombreTemperaturaMayor;
	let solterosOViudos;
	let solteros;
	let edadSolteros;
	let viudosMayores;
	let altasTemperaturas;

	let promedio;

	bandera = true;

	solterosOViudos = 0;

	solteros = 0;

	viudosMayores = 0;

	edadSolteros = 0;

	altasTemperaturas = 0;

	do {
		do {
			nombre = prompt("Nombre:");
		} while (!(isNaN(nombre)));

		do {
			edad = prompt("Edad:");
			edad = parseInt(edad);
		} while (isNaN(edad) || edad <= 0);

		do {
			sexo = prompt("Sexo (f o m):");
			sexo = sexo.toLowerCase();
		} while (sexo != "f" && sexo != "m");

		do {
			estadoCivil = prompt("Estado civil (soltero, casado o viudo):");
			estadoCivil = estadoCivil.toLowerCase();
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			temperatura = prompt("Temperatura:");
			temperatura = parseInt(temperatura);
		} while (isNaN(temperatura));

		if (bandera) {
			temperaturaMayor = temperatura;
			nombreTemperaturaMayor = nombre;

			bandera = false;
		} else {
			if (temperatura > temperaturaMayor) {
				temperaturaMayor = temperatura;
				nombreTemperaturaMayor = nombre;
			}
		}

		switch (estadoCivil) {
			case "soltero":
				if (sexo = "m") {
					solteros++;
					solterosOViudos++;

					edadSolteros = edadSolteros + edad;
				}
				break;
			case "viudo":
				if (sexo = "m") {
					solterosOViudos++;
				}
				if (edad >= 18) {
					viudosMayores++;
				}
				break;
		}

		if (edad > 60 && temperatura > 38) {
			altasTemperaturas++;
		}

		verificador = confirm("¿Agregar otra persona?");
	} while (verificador);

	promedio = edadSolteros / solteros;

	mensaje = "Persona con mayor temperatura: " + nombreTemperaturaMayor + "\n";
	mensaje += "Mayores de edad viudos: " + viudosMayores + "\n";
	mensaje += "Hombres solteros o viudos: " + solterosOViudos + "\n";
	mensaje += "Personas de tercera edad con temperaturas altas: " + altasTemperaturas + "\n";
	mensaje += "Promedio de edad de los hombres solteros: " + promedio + "\n";

	alert(mensaje);
}

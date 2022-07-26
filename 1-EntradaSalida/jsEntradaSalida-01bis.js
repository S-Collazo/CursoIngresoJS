function mostrar() {
	let bandera;
	let nombre;
	let apellido;
	let edad;
	let edadMayor;
	let nombreMayor;
	let apellidoMayor;
	let verificador;
	let mensaje;

	bandera = true;

	do {
		nombre = prompt("Nombre:");

		apellido = prompt("Apellido:");

		edad = prompt("Edad:");
		edad = parseInt(edad);

		if (bandera) {
			edadMayor = edad;
			nombreMayor = nombre;
			apellidoMayor = apellido;

			bandera = false;
		}
		else {
			if (edad > edadMayor) {
				edadMayor = edad;
				nombreMayor = nombre;
				apellidoMayor = apellido;
			}
		}

		verificador = confirm("¿Agregar otra persona?")
	} while (verificador);

	mensaje = nombreMayor + " " + apellidoMayor + " (" + edadMayor + " años) es la persona de mayor edad.";

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
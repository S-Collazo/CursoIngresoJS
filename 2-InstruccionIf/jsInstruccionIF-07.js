function mostrar() {
	let edad;
	let estadoCivil;
	let mensaje;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad < 18 && estadoCivil != "Soltero") {
		mensaje = "Es muy pequeño para NO ser soltero.";
	} else {
		mensaje = "-";
	}

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
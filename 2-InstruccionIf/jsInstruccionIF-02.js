function mostrar() {
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("Mayor de edad.");
	}
}

// Santiago Collazo - santiago.collazo7@gmail.com
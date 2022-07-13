function mostrar() {
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad <= 12) {
		alert("Menor de edad.");
	} else if (edad <= 17) {
		alert("Adolescente.");
	} else {
		alert("Mayor de edad.");
	}
}

// Santiago Collazo - santiago.collazo7@gmail.com
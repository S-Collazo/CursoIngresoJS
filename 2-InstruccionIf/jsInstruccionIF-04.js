function mostrar() {
	let edad;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	if (edad >= 13 && edad <= 17) {
		alert("Adolescente.");
	}
}

// Santiago Collazo - santiago.collazo7@gmail.com
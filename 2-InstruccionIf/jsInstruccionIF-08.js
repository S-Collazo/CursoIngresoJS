function mostrar() {
	let edad;
	let estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById('estadoCivil').value;
	estadoCivil = String(estadoCivil);

	if (edad >= 18 && estadoCivil == "Soltero") {
		alert("Es soltero y no es menor.");
	}
}

// Santiago Collazo - santiago.collazo7@gmail.com
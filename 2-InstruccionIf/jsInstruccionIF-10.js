function mostrar() {
	let nota;
	let mensaje;
	let mensajeFinal;

	nota = Math.random() * 10 + 1;
	nota = Math.floor(nota);

	if (nota >= 9) {
		mensaje = "EXCELENTE.";
	} else if (nota >= 4) {
		mensaje = "APROBÓ.";
	} else {
		mensaje = "Vamos, la próxima se puede.";
	}

	mensajeFinal = "Su nota es " + nota + ". " + mensaje;

	alert(mensajeFinal);
}

// Santiago Collazo - santiago.collazo7@gmail.com
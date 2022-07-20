function mostrar() {
	let estacion;
	let destino;
	let mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	mensaje = "Inválido.";

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					mensaje = "Se viaja."
					break;
				default:
					mensaje = "No se viaja."
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja."
					break;
				default:
					mensaje = "No se viaja."
					break;
			}
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					mensaje = "No se viaja."
					break;
				default:
					mensaje = "Se viaja."
					break;
			}
			break;
		default:
			mensaje = "Se viaja."
			break;
	}

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
function mostrar() {
	let estacion;
	let destino;
	let estadia;
	let porcentaje;
	let precioFinal;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	estadia = 15000;

	porcentaje = 0;

	if (destino == "Bariloche") {
		switch (estacion) {
			case "Invierno":
				porcentaje = 0.20;
				break;
			case "Verano":
				porcentaje = -0.20;
				break;
			default:
				porcentaje = 0.10;
				break;
		}
	} else {
		if (destino == "Cataratas") {
			switch (estacion) {
				case "Invierno":
					porcentaje = -0.10;
					break;
				case "Verano":
					porcentaje = 0.10;
					break;
				default:
					porcentaje = 0.10;
					break;
			}
		}
		if (destino == "Mar del plata") {
			switch (estacion) {
				case "Invierno":
					porcentaje = -0.20;
					break;
				case "Verano":
					porcentaje = 0.20;
					break;
				default:
					porcentaje = 0.10;
					break;
			}
		}
		if (destino == "Cordoba") {
			switch (estacion) {
				case "Invierno":
					porcentaje = -0.10;
					break;
				case "Verano":
					porcentaje = 0.10;
					break;
			}
		}
	}

	precioFinal = estadia + (estadia * porcentaje);

	alert(precioFinal);
}

// Santiago Collazo - santiago.collazo7@gmail.com
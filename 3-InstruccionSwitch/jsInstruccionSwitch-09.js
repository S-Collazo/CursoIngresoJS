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

	switch (destino) {
		case "Bariloche":
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
			break;
		case "Cataratas":
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
			break;
		case "Mar del plata":
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
			break;
		default:
			switch (estacion) {
				case "Invierno":
					porcentaje = -0.10;
					break;
				case "Verano":
					porcentaje = 0.10;
					break;
			}
			break;
	}

	precioFinal = estadia + (estadia * porcentaje);

	alert(precioFinal);
}

// Santiago Collazo - santiago.collazo7@gmail.com
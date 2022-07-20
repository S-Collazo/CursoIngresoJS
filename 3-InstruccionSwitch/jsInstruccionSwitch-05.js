function mostrar() {
	let hora;
	let mensaje;

	hora = document.getElementById('txtIdHora').value;
	hora = parseInt(hora);

	if (hora >= 0 && hora <= 24) {
		switch (hora) {
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				mensaje = "Es de mañana.";
				break;
			default:
				mensaje = "No es de mañana.";
				break;
		}
	} else {
		mensaje = "Hora invalida.";
	}

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
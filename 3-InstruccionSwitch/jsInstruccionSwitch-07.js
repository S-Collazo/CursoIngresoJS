function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case 'Bariloche':
			mensaje = "Oeste";
			break;
		case 'Mar del plata':
			mensaje = "Este";
			break;
		case 'Cataratas':
			mensaje = "Norte";
			break;
		default:
			mensaje = "Sur";
			break;
	}

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
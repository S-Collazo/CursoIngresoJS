function mostrar()
{
	let destino;
	let mensaje;

	destino = document.getElementById('txtIdDestino').value;

	switch (destino) {
		case 'Mar del plata':
		case 'Cataratas':
			mensaje = "Calor";
			break;
		default:
			mensaje = "Frío";
			break;
	}

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
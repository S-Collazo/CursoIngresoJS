function mostrarAumento()
{
	let importe;
	let porcentaje;
	let resultado;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe);

	porcentaje = prompt("Porcentaje:");
	porcentaje = parseInt(porcentaje);
	
	resultado = importe - (importe * porcentaje / 100);
	document.getElementById('txtIdResultado').value = resultado;
}

/* Santiago Collazo - santiago.collazo7@gmail.com */
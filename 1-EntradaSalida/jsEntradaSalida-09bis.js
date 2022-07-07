function mostrarAumento()
{
	let sueldo;
	let porcentaje;
	let resultado;

	sueldo = document.getElementById('txtIdSueldo').value;
	sueldo = parseInt(sueldo);

	porcentaje = prompt("Porcentaje:");
	porcentaje = parseInt(porcentaje);
	
	resultado = sueldo + (sueldo * porcentaje / 100);
	resultado = parseInt(resultado);

	document.getElementById('txtIdResultado').value = resultado;
}

/* Santiago Collazo - santiago.collazo7@gmail.com */
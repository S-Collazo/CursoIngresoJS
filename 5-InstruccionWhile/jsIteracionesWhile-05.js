/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let sexoIngresado;

	do {
		sexoIngresado = prompt("Ingrese f ó m:");
		sexoIngresado.toLowerCase;
	} while (sexoIngresado != "m" && sexoIngresado != "f");

	document.getElementById('txtIdSexo').value = sexoIngresado;
}

// Santiago Collazo - santiago.collazo7@gmail.com
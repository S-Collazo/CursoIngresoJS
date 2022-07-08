/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numeroUno;
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	let numeroDos;
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	let totalSuma = numeroUno + numeroDos;
	alert("La suma es " + totalSuma);
}

function restar()
{
	let numeroUno;
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	let numeroDos;
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	let totalResta = numeroUno - numeroDos;
	alert("La resta es " + totalResta);
}

function multiplicar()
{ 
	let numeroUno;
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	let numeroDos;
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	let totalMulti = numeroUno * numeroDos;
	alert("La multiplicación es " + totalMulti);
}

function dividir()
{
	let numeroUno;
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	let numeroDos;
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	let totalDivi = numeroUno / numeroDos;
	alert("La división es " + totalDivi);
}

// Santiago Collazo - santiago.collazo7@gmail.com

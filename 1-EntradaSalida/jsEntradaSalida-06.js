/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	var numeroDos;
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);
	var total = numeroUno + numeroDos;
	alert("La suma es " + total);
}

// Santiago Collazo - santiago.collazo7@gmail.com
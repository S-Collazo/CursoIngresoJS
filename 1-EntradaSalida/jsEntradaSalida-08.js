/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let numeroDividendo;
	numeroDividendo = parseInt(document.getElementById('txtIdNumeroDividendo').value);
	let numeroDivisor;
	numeroDivisor = parseInt(document.getElementById('txtIdNumeroDivisor').value);
	let totalResto = numeroDividendo % numeroDivisor;
	alert("El resto es " + totalResto);
}

// Santiago Collazo - santiago.collazo7@gmail.com
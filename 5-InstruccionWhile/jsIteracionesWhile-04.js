/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
let numero;

do{
	numero = prompt("Ingresar número entre 0 y 9 inclusive:");
}while(!(numero >= 0 && numero <= 9));
	
document.getElementById('txtIdNumero').value = numero;
}

// Santiago Collazo - santiago.collazo7@gmail.com
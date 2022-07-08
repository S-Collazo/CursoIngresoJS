function mostrar()
{
let nombreA;
let nombreB;
let pesoA;
let pesoB;
let pesoTotal;
let promedio;
let mensaje;

nombreA = prompt("Nombre de la primera persona: ");

pesoA = prompt("Peso de la primera persona: ");
pesoA = parseInt(pesoA);

nombreB = prompt("Nombre de la segunda persona: ");

pesoB = prompt("Peso de la segunda persona: ");
pesoB = parseInt(pesoB);

pesoTotal = pesoA + pesoB;

promedio = pesoTotal / 2;

mensaje = "Ustedes se llaman " + nombreA + " y " + nombreB;
mensaje += ", pesan " + pesoA + " y " + pesoB + " kilos";
mensaje +=  ", que sumados son " + pesoTotal + " kilos";
mensaje += " y el promedio de peso " + promedio + " kilos.";

alert(mensaje);
}

/* Santiago Collazo - santiago.collazo7@gmail.com */
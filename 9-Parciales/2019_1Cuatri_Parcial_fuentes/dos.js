function mostrar()
{
let nombreA;
let nombreB;
let pesoA;
let pesoB;
let pesoTotal;
let promedio;

nombreA = prompt("Nombre de la primera persona: ");
pesoA = prompt("Peso de la primera persona: ");
pesoA = parseInt(pesoA);

nombreB = prompt("Nombre de la segunda persona: ");
pesoB = prompt("Peso de la segunda persona: ");
pesoB = parseInt(pesoB);

pesoTotal = pesoA + pesoB;

promedio = pesoTotal / 2;

alert("Ustedes se llaman " + nombreA + " y " + nombreB + ", pesan " + pesoA + " y " + pesoB + " kilos, que sumados son " + pesoTotal + " kilos y el promedio de peso " + promedio);
}

/* Santiago Collazo - santiago.collazo7@gmail.com */
/*
2)Se requiere el ingreso de datos para un video juego de pokemon en línea hasta que el usuario quiera:
-Necesitaremos: nombre del jugador/a
-Género (validar M/F/X)
-Edad (validar entre 3 a 99 años)
-Pokemon inicial (validar Charmander, Squirtle o Bolbasaur)
Y deberemos mostrar el promedio de edad de los jugadores ingresados.
El nombre y el pokemon elegido del jugador más grande de edad y del jugador más joven.
*/

function mostrar() {
	let verificador;
	let bandera;
	let contador;
	let mensaje;

	let nombre;
	let genero;
	let edad;
	let pokemon;

	let edadTotal;
	let promedioEdad;

	let edadMayor;
	let nombreMayor;
	let pokemonMayor;

	let edadMenor;
	let nombreMenor;
	let pokemonMenor;

	bandera = true;

	contador = 0;

	edadTotal = 0;

	do {
		do {
			nombre = prompt("Nombre del jugador/a:");
		} while (!(isNaN(nombre)));

		do {
			genero = prompt("Género (f/m/x):");
			genero = genero.toLowerCase();
		} while (genero != "m" && genero != "f" && genero != "x");

		do {
			edad = prompt("Edad:");
			edad = parseInt(edad);
		} while (!(edad >= 3 && edad <= 99));

		do {
			pokemon = prompt("Pokemon inicial (Charmander, Squirtle o Bolbasaur):");
			pokemon = pokemon.toLowerCase();
		} while (pokemon != "charmander" && pokemon != "squirtle" && pokemon != "bolbasaur");

		if (bandera) {
			nombreMayor = nombre;
			edadMayor = edad;
			pokemonMayor = pokemon;

			nombreMenor = nombre;
			edadMenor = edad;
			pokemonMenor = pokemon;

			bandera = false;
		} else {
			if (edad > edadMayor) {
				nombreMayor = nombre;
				edadMayor = edad;
				pokemonMayor = pokemon;
			}
			if (edad < edadMenor) {
				nombreMenor = nombre;
				edadMenor = edad;
				pokemonMenor = pokemon;
			}
		}

		edadTotal = edadTotal + edad;

		contador++;

		verificador = confirm("¿Continuar agregando jugadores?");
	} while (verificador);

	promedioEdad = edadTotal / contador;
	promedioEdad = parseFloat(promedioEdad);
	promedioEdad = promedioEdad.toFixed(2);

	mensaje = "Promedio de edad de los jugadores: " + promedioEdad + "\n";
	mensaje += "Nombre del jugador más grande: " + nombreMayor + "\n";
	mensaje += "Pokemon del jugador más grande: " + pokemonMayor + "\n";
	mensaje += "Nombre del jugador más joven: " + nombreMenor + "\n";
	mensaje += "Pokemon del jugador más joven: " + pokemonMenor + "\n";

	alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
function mostrar()
{

	let tipoProducto;
	let precio;
	let unidades;
	let marca;
	let contador;
	let fabricante;

	// Punto A
	let flagIngresoAlcohol;
	let precioAlcohol;
	let unidadesAlcoholMasBarato;
	let fabricanteAlcohol;

	// Punto B
	let unidadesBarbijo; // Acumulador de unidades
	let unidadesJabon;
	let unidadesAlcohol;
	let acumuladorBarbijo; // Compra
	let acumuladorJabon; // Se usa para el punto C
	let acumuladorAlcohol;
	let promedio;
	let tipoUnidades;

	let	mensaje;

	contador = 0;
	flagIngresoAlcohol = true;

	// Acumulador de producto
	unidadesBarbijo = 0;
	unidadesJabon = 0;
	unidadesAlcohol = 0;
	// Contadores de producto
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	acumuladorAlcohol = 0;

	

	while(contador < 5)
	{

		contador++;
		// alert(contador);

		tipoProducto = prompt(contador + ". Ingrese el producto").toLowerCase();//lower case??
		while(tipoProducto != 'barbijo' && tipoProducto != 'jabón' && tipoProducto != 'alcohol')
		{

			tipoProducto = prompt(contador + ".Error -  Ingrese el producto valido").toLowerCase();
		}

		precio = prompt(contador + ". Ingrese el precio (Entre 100 y 300)");
		precio = parseInt(precio);
		while(precio < 100 || precio > 300)
		{

			precio = prompt(contador + ".Error - Ingrese el precio (Entre 100 y 300)");
			precio = parseInt(precio);
		}

		unidades = prompt(contador + ". Ingrese la cantidad de unidades (Entre 1 y 1000");
		unidades = parseInt(unidades);
		while(unidades < 1 || unidades > 1000)
		{

			unidades = prompt(contador + ".Error - Ingrese la cantidad de unidades valida (Entre 1 y 1000)");
			unidades = parseInt(unidades);
		}

		marca = prompt(contador + ". Ingrese la marca del producto");
		fabricante = prompt(contador + ". Ingrese el fabricante de producto");

		// punto A
		if(tipoProducto == "alcohol" && (flagIngresoAlcohol == true || precio < precioAlcohol ))
		{

			flagIngresoAlcohol = false;
			precioAlcohol = precio;
			unidadesAlcoholMasBarato = unidades; 
			fabricanteAlcohol = fabricante;
		}
		

		// Punto B y C
		switch(tipoProducto)
		{

			case "barbijo":
				unidadesBarbijo += unidades; // Acumula la CANTIDAD de UNIDADES por COMPRA
				// unidadesBarbijo = unidadesBarbijo + unidades
				acumuladorBarbijo++; // Acumula una compra
				break;
			case "jabón":
				// Aca se cumple el punto C
				unidadesJabon += unidades; // Acumula la CANTIDAD de UNIDADES por COMPRA
				acumuladorJabon++; // Acumula una compra
				break;
			case "alcohol":
				unidadesAlcohol += unidades; // Acumula la CANTIDAD de UNIDADES por COMPRA
				acumuladorAlcohol++; // Acumula una compra
		}

	} // Fin del While


	if(unidadesBarbijo > unidadesJabon && unidadesBarbijo > unidadesAlcohol) // Barbijo
	{	
		tipoUnidades = "barbijo";
		promedio = unidadesBarbijo / acumuladorBarbijo;
	}
	else
	{
		if(unidadesJabon > unidadesBarbijo && unidadesJabon > unidadesAlcohol) // Jabón
		{
			tipoUnidades = "jabon";
			promedio = unidadesJabon / acumuladorJabon;
		}
		else // Sí no es Barbijo, ni Jabón.. es Alcohol
		{
			tipoUnidades = "alcohol";
			promedio = unidadesAlcohol / acumuladorAlcohol;
		}
	}


	mensaje='Alcohol Unidades: ' + unidadesAlcoholMasBarato +'<br>'+ ' Alcohol fabricante: ' + fabricanteAlcohol+'<br>';
	mensaje+=' El tipo con más unidades es: ' + tipoUnidades +'<br>'+ ' con un promedio por compra de ' + promedio+'<br>';
	mensaje+=' Unidades totales de jabon: ' + unidadesJabon;

	document.write(mensaje);

}

// Santiago Collazo - santiago.collazo7@gmail.com

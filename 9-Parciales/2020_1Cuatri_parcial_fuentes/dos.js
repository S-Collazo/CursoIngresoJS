function mostrar() {
  let bandera;
  let verificador;

  let producto;
  let cantidad;
  let cantidadTotal;
  let precioUnidad;

  let descuento;
  let precio;
  let precioBruto;
  let precioFinal;

  let cantidadMayor;
  let productoMayorCantidad;
  let precioMayor;
  let productoMayorPrecio;

  let mensaje;

  bandera = true;

  precioBruto = 0;

  cantidadTotal = 0;

  do {
    do {
      producto = prompt("Tipo de producto:");
      producto = producto.toLowerCase();
    } while (producto != "arena" && producto != "cal" && producto != "cemento");

    do {
      cantidad = prompt("Cantidad de bolsas:");
      cantidad = parseInt(cantidad);
    } while (isNaN(cantidad) || cantidad <= 0);

    do {
      precioUnidad = prompt("Precio por bolsa:");
      precioUnidad = parseInt(precioUnidad);
    } while (isNaN(precioUnidad) || precioUnidad <= 0);

    if (bandera) {
      cantidadMayor = cantidad;
      productoMayorCantidad = producto;

      precioMayor = precioUnidad;
      productoMayorPrecio = producto;

      bandera = false;
    } else {
      if (cantidad > cantidadMayor) {
        cantidadMayor = cantidad;
        productoMayorCantidad = producto;
      }
      if (precioUnidad > precioMayor) {
        precioMayor = precioUnidad;
        productoMayorPrecio = producto;
      }
    }

    precio = precioUnidad * cantidad;

    cantidadTotal = cantidadTotal + cantidad;

    precioBruto = precioBruto + precio;

    if (cantidadTotal > 30) {
      descuento = 0.25;
    } else {
      if (cantidadTotal > 10 && cantidadTotal < 30) {
        descuento = 0.15;
      } else {
        descuento = 0;
      }
    }

    precioFinal = precioBruto - (precioBruto * descuento);

    verificador = confirm("¿Agregar otro producto?");
  } while (verificador);

  mensaje = "Importe bruto: " + precioBruto + "\n";
  mensaje += "Importe final: " + precioFinal + "\n";
  mensaje += "Producto con mayor cantidad de bolsas: " + productoMayorCantidad + "\n";
  mensaje += "Producto más caro: " + productoMayorPrecio + "\n";

  alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
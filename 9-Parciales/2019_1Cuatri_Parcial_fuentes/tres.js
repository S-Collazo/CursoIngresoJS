function mostrar()
{
let precio;
let porcentaje;
let descuento;
let precioFinal;

precio = prompt("Precio: ");
precio = parseFloat(precio);

porcentaje = prompt("Porcentaje de descuento: ");
porcentaje = parseFloat(porcentaje);

descuento = precio * porcentaje / 100;
descuento = parseFloat(descuento);

precioFinal = precio - descuento;
precioFinal = precioFinal.toFixed(2);

document.getElementById('elPrecioFinal').value = precioFinal;
}

// Santiago Collazo - santiago.collazo7@gmail.com
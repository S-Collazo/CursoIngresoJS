/*Realizar el algoritmo que permita ingresar los datos de una compra de ingredientes para preparar comida al por mayor , 
hasta que el cliente quiera:
peso (entre 10 y 1000)en kilo,
precio por kilo (más de cero ),
tipo validad("v";"a";"m")(vegetal,animal o mezcla )
Si compro más de 100 kilos en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 300 kilos en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo de alimento más caro.
f) El promedio de precio por kilo en total.*/

function mostrar() {
    let bandera;
    let verificador;
    let peso;
    let precioKilo;
    let tipo;
    let contador;
    let pesoTotal;
    let descuento;
    let precioProducto;
    let precioBruto;
    let precioFinal;
    let promedio;
    let precioMasCaro;
    let tipoMasCaro;

    let mensaje;

    bandera = true;

    contador = 0;

    pesoTotal = 0;

    precioBruto = 0;

    do {
        do {
            peso = prompt("Peso en kg (entre 10 y 1000): ");
            peso = parseInt(peso);
        } while (!(peso >= 10 && peso <= 1000));

        do {
            precioKilo = prompt("Precio por kilo: ");
            precioKilo = parseInt(precioKilo);
        } while (isNaN(precioKilo) || precioKilo <= 0);

        do {
            tipo = prompt("Tipo de producto:");
            tipo = tipo.toLowerCase();
        } while (tipo != "v" && tipo != "a" && tipo != "m");

        precioProducto = precioKilo * peso;

        precioBruto = precioBruto + precioProducto;

        pesoTotal = pesoTotal + peso;

        if (bandera) {
            precioMasCaro = precioProducto;
            tipoMasCaro = tipo;

            bandera = false;
        } else {
            if (precioProducto > precioMasCaro) {
                precioMasCaro = precioProducto;
                tipoMasCaro = tipo;
            }
        }

        contador++;

        verificador = confirm("¿Agregar otro producto?");
    } while (verificador);

    if (pesoTotal > 300) {
        descuento = 0.25;
    } else {
        if (pesoTotal > 100 && pesoTotal < 300) {
            descuento = 0.15;
        } else {
            descuento = 0;
        }
    }

    precioFinal = precioBruto - (precioBruto * descuento);

    promedio = precioFinal / contador;
    promedio = parseFloat(promedio);
    promedio = promedio.toFixed(2);

    mensaje = "Importe bruto: " + precioBruto + "\n";
    if (descuento > 0) {
        mensaje += "Importe final: " + precioFinal + "\n";
    }
    mensaje += "Producto más caro: " + tipoMasCaro + "\n";
    mensaje += "Promedio: " + promedio + "\n";

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
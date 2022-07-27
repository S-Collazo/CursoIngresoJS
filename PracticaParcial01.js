/*
1.	Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.	Minimo importe con su pais
b.	Maximo importe con su marca
c.	Promedio importe
d.	Cantidad de productos de China
e.	Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
*/

function mostrar() {
    let bandera;
    let i;
    let importe;
    let marca;
    let pais;
    let importeTotal;
    let importeMaximo;
    let paisImporteMaximo;
    let marcaImporteMaximo;
    let importeMinimo;
    let paisImporteMinimo;
    let marcaImporteMinimo;
    let productosChina;
    let promedio;
    let importeMaximoDesc;
    let mensaje;

    bandera = true;

    importe = 0;

    productosChina = 0;

    importeTotal = 0;

    for (i = 0; i < 5; i++) {
        do {
            importe = prompt("Importe:");
            importe = parseInt(importe);
        } while (isNaN(importe) || importe <= 0);

        marca = prompt("Marca:");

        do {
            pais = prompt("País (China, Uruguay o Paraguay):");
            pais = pais.toLowerCase();
        } while (pais != "china" && pais != "uruguay" && pais != "paraguay");

        if (bandera) {
            importeMaximo = importe;
            paisImporteMaximo = pais;
            marcaImporteMaximo = marca;

            importeMinimo = importe;
            paisImporteMinimo = pais;
            marcaImporteMinimo = marca;

            bandera = false;
        } else {
            if (importe > importeMaximo) {
                importeMaximo = importe;
                paisImporteMaximo = pais;
                marcaImporteMaximo = marca;
            }
            if (importe < importeMinimo) {
                importeMinimo = importe;
                paisImporteMinimo = pais;
                marcaImporteMinimo = marca;
            }
        }

        if (pais == "china") {
            productosChina++;
        }

        importeTotal = importeTotal + importe;
    }

    promedio = importeTotal / 5;

    importeMaximoDesc = importeMaximo - (importeMaximo * 0.10);

    mensaje = "a.	Minimo importe con su pais: " + importeMinimo + " (" + paisImporteMinimo + ")" + "\n";
    mensaje += "b.	Maximo importe con su marca: " + importeMaximo + " (" + marcaImporteMaximo + ")" + "\n";
    mensaje += "c.	Promedio importe: " + promedio + "\n";
    mensaje += "d.	Cantidad de productos de China: " + productosChina + "\n";
    mensaje += "e.	Maximo con descuento del 10%: " + importeMaximoDesc + "\n";

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
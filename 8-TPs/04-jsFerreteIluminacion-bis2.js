/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let precioUnidad;
    let cantidad;
    let marca;
    let porcentajeDescuento;
    let precioBruto;
    let descuento;
    let impuesto;
    let precioIIBB;
    let precioFinal;
    let mensaje;

    precioUnidad = 35;
    precioUnidad = parseInt(precioUnidad);

    cantidad = document.getElementById('txtIdCantidad').value;
    cantidad = parseInt(cantidad);

    marca = document.getElementById('Marca').value;
    marca = String(marca);

    porcentajeDescuento = 1;

    if (cantidad > 0) {
        porcentajeDescuento = 0;
        if (cantidad >= 6) {
            porcentajeDescuento = 0.50;
        } else {
            if (cantidad == 5) {
                switch (marca) {
                    case "ArgentinaLuz":
                        porcentajeDescuento = 0.40;
                        break;
                    default:
                        porcentajeDescuento = 0.30;
                        break;
                }
            }
            if (cantidad == 4) {
                switch (marca) {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        porcentajeDescuento = 0.25;
                        break;
                    default:
                        porcentajeDescuento = 0.20;
                        break;
                }
            }
            if (cantidad == 3) {
                switch (marca) {
                    case "ArgentinaLuz":
                        porcentajeDescuento = 0.15;
                        break;
                    case "FelipeLamparas":
                        porcentajeDescuento = 0.10;
                        break;
                    default:
                        porcentajeDescuento = 0.05;
                        break;
                }
            }
        }
    }

    precioBruto = precioUnidad * cantidad;

    descuento = precioBruto * porcentajeDescuento;

    precioFinal = precioBruto - descuento;
    precioFinal = parseFloat(precioFinal);

    if (precioFinal > 120) {
        impuesto = precioFinal * 0.10;

        precioIIBB = precioFinal + impuesto;

        mensaje = precioIIBB.toFixed(2);

        alert("Usted pagó " + impuesto + " de IIBB.");
    }
    else {
        mensaje = precioFinal.toFixed(2);
    }

    document.getElementById('txtIdprecioDescuento').value = mensaje;
}

// Santiago Collazo - santiago.collazo7@gmail.com
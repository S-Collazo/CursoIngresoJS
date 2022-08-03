/*
pedir el ingreso de 10 mascotas
validar tipo ( gato , perro y otros)solo esos tres tipos
raza , si es perro (pastor, toy, callejero) y si es gato (siamés, turco, mestizo)
y si es de tipo "otros"  , pedir solo un texto.
edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza*/

function mostrar() {
    let i;
    let banderaUno;
    let banderaDos;
    let banderaTres;
    let mensaje;

    let tipo;
    let raza;
    let edad;
    let nombre;

    let perros;
    let gatos;
    let otros;

    let edadGatoMasViejo;
    let nombreGatoMasViejo;

    let edadPerroMasViejo;
    let nombrePerroMasViejo;

    let edadOtroMasViejo;
    let nombreOtroMasViejo;

    let cantidadSiames;
    let edadTotalSiames;

    let cantidadTurco;
    let edadTotalTurco;

    let cantidadMestizo;
    let edadTotalMestizo;

    let gatosMasNumerosos;
    let promedio;

    banderaUno = true;
    banderaDos = true;
    banderaTres = true;

    perros = 0;
    gatos = 0;
    otros = 0;

    cantidadSiames = 0;
    edadTotalSiames = 0;

    cantidadTurco = 0;
    edadTotalTurco = 0;

    cantidadMestizo = 0;
    edadTotalMestizo = 0;

    for (i = 0; i < 10; i++) {
        do {
            nombre = prompt("Nombre:");
        } while (!(isNaN(nombre)));

        do {
            tipo = prompt("Tipo (gato, perro u otros):");
            tipo = tipo.toLowerCase();
        } while (tipo != "gato" && tipo != "perro" && tipo != "otros");

        switch (tipo) {
            case "perro":
                perros++;
                do {
                    raza = prompt("Raza del perro (pastor, toy o callejero):");
                    raza = raza.toLowerCase();
                } while (raza != "pastor" && raza != "toy" && raza != "callejero");

                do {
                    edad = prompt("Edad del perro:");
                    edad = parseInt(edad);
                } while (!(edad >= 1 && edad <= 20));

                if (banderaUno) {
                    edadPerroMasViejo = edad;
                    nombrePerroMasViejo = nombre;

                    banderaUno = false;
                } else {
                    if (edad > edadPerroMasViejo) {
                        edadPerroMasViejo = edad;
                        nombrePerroMasViejo = nombre;
                    }
                }
                break;

            case "gato":
                gatos++;
                do {
                    raza = prompt("Raza del gato (siamés, turco o mestizo):");
                    raza = raza.toLowerCase();
                } while (raza != "siames" && raza != "turco" && raza != "mestizo");

                do {
                    edad = prompt("Edad del gato:");
                    edad = parseInt(edad);
                } while (!(edad >= 1 && edad <= 20));

                if (banderaDos) {
                    edadGatoMasViejo = edad;
                    nombreGatoMasViejo = nombre;

                    banderaDos = false;
                } else {
                    if (edad > edadGatoMasViejo) {
                        edadGatoMasViejo = edad;
                        nombreGatoMasViejo = nombre;
                    }
                }

                switch (raza) {
                    case "siames":
                        cantidadSiames++;
                        edadTotalSiames = edadTotalSiames + edad;
                        break;
                    case "turco":
                        cantidadTurco++;
                        edadTotalTurco = edadTotalTurco + edad;
                        break;
                    default:
                        cantidadMestizo++;
                        edadTotalMestizo = edadTotalMestizo + edad;
                        break;
                }
                break;

            default:
                otros++;
                do {
                    raza = prompt("Raza:");
                    raza = raza.toLowerCase();
                } while (!(isNaN(raza)));
                do {
                    edad = prompt("Edad:");
                    edad = parseInt(edad);
                } while (!(edad >= 1 && edad <= 100));

                if (banderaTres) {
                    edadOtroMasViejo = edad;
                    nombreOtroMasViejo = nombre;

                    banderaDos = false;
                } else {
                    if (edad > edadOtroMasViejo) {
                        edadOtroMasViejo = edad;
                        nombreOtroMasViejo = nombre;
                    }
                }
                break;
        }
    }

    if (cantidadSiames > cantidadTurco && cantidadSiames > cantidadMestizo) {
        gatosMasNumerosos = "Siames";
        promedio = edadTotalSiames / cantidadSiames;
    } else {
        if ((cantidadTurco > cantidadSiames && cantidadTurco > cantidadMestizo)) {
            gatosMasNumerosos = "Turco";
            promedio = edadTotalTurco / cantidadTurco;
        } else {
            gatosMasNumerosos = "Mestizo";
            promedio = edadTotalMestizo / cantidadMestizo;
        }
    }

    mensaje = "Datos:" + "\n";
    if (perros > 0) {
        mensaje += "Perro más viejo: " + nombrePerroMasViejo + " (" + edadPerroMasViejo + " años)" + "\n";
    }
    if (gatos > 0) {
        mensaje += "Gato más viejo: " + nombreGatoMasViejo + " (" + edadGatoMasViejo + " años)" + "\n";
    }
    if (otros > 0) {
        mensaje += "Otro más viejo: " + nombreOtroMasViejo + " (" + edadOtroMasViejo + " años)" + "\n";
    }
    mensaje += "Raza de gatos más numerosa: " + gatosMasNumerosos + "\n";
    mensaje += "Promedio de edad de esa raza: " + promedio + "\n";

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
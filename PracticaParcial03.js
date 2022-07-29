/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar() {
    let i;
    let banderaUno;
    let banderaDos;
    let contador;
    let mensaje;

    let pais;
    let continente;
    let habitantes;
    let temptMin;

    let temptPar;

    let habitantesMenor;
    let paisMenor;
    let paisesAmericaFrios;
    let habitantesTotales;
    let promedio;

    let temptMenor;
    let paisTemptMenor;

    banderaUno = true;
    banderaDos = true;

    temptPar = 0;

    paisesAmericaFrios = 0;

    habitantesTotales = 0;

    contador = 0;

    for (i = 0; i < 5; i++) {
        do {
            continente = prompt("Continente:");
            continente = continente.toLowerCase();
        } while (continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania");

        do {
            pais = prompt("País:");
        } while (!(isNaN(pais)));

        do {
            habitantes = prompt("Cantidad de habitantes:");
            habitantes = parseInt(habitantes);
        } while (!(habitantes >= 1 && habitantes <= 2000));

        do {
            temptMin = prompt("Temperatura mínima:");
            temptMin = parseInt(temptMin);
        } while (!(temptMin >= -50 && temptMin <= 50));

        if (temptMin % 2 == 0) {
            temptPar++;
        }

        if (banderaUno) {
            habitantesMenor = habitantes;
            paisMenor = pais;

            banderaUno = false;
        } else {
            if (habitantesMenor < habitantes) {
                habitantesMenor = habitantes;
                paisMenor = pais;
            }
        }

        if (banderaDos) {
            temptMenor = temptMin;
            paisTemptMenor = pais;

            banderaDos = false;
        } else {
            if (temptMenor < temptMin) {
                temptMenor = temptMin;
                paisTemptMenor = pais;
            }
        }

        if (temptMin < 0 && continente == "america") {
            paisesAmericaFrios++;
        }

        habitantesTotales = habitantesTotales + habitantes;

        contador++;
    }

    promedio = habitantesTotales / contador;
    promedio = parseFloat(promedio);
    promedio = promedio.toFixed(2);

    mensaje = "Temperaturas pares: " + temptPar + "\n";
    mensaje += "Pais con menor cantidad de habitantes: " + paisMenor + "\n";
    mensaje += "Paises de América con menos de 0 grados: " + paisesAmericaFrios + "\n";
    mensaje += "Promedio de habitantes: " + promedio + "\n";
    mensaje += "Temperatura mínima ingresada: " + temptMenor + " (" + paisTemptMenor + ")" + "\n";

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
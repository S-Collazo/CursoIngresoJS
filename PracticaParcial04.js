/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/


function mostrar() {
    let verificador;
    let bandera;
    let mensaje;

    let nombre;
    let carrera;
    let estadoCarrera;
    let genero;
    let nota;

    let cantidadProgram;
    let cantidadPsico;
    let cantidadDisGraf;
    let cantidadMujeresProgram;
    let cantidadNoBi;
    let cantidadTotal;

    let totalFinalizantes;
    let cantidadFinalizantes;
    let promedioFinalizantes;
    let mejorAlumnoNoBiPsico;
    let notaMejorAlumnoNoBiPsico;
    let carreraMayor;

    bandera = true;

    cantidadProgram = 0;
    cantidadPsico = 0;
    cantidadDisGraf = 0;

    cantidadMujeresProgram = 0;

    cantidadNoBi = 0;

    cantidadFinalizantes = 0;
    totalFinalizantes = 0;

    do {
        do {
            nombre = prompt("Nombre:");
        } while (!(isNaN(nombre)));

        do {
            carrera = prompt("Carrera (Programación, Psicología o Diseño gráfico):");
            carrera = carrera.toLowerCase();
        } while (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico");

        do {
            estadoCarrera = prompt("Estado de la carrera (En curso, Abandono o Finalizado):");
            estadoCarrera = estadoCarrera.toLowerCase();
        } while (estadoCarrera != "en curso" && estadoCarrera != "abandono" && estadoCarrera != "finalizado");

        do {
            genero = prompt("Genero (Femenino, Masculino o Nobinario):");
            genero = genero.toLowerCase();
        } while (genero != "femenino" && genero != "masculino" && genero != "nobinario");

        do {
            nota = prompt("Nota:");
            nota = parseInt(nota);
        } while (!(nota >= 1 && nota <= 10));

        switch (carrera) {
            case "programacion":
                cantidadProgram++;
                if (genero == "femenino") {
                    cantidadMujeresProgram++;
                }
                break;
            case "psicologia":
                cantidadPsico++;
                break;
            default:
                cantidadDisGraf++
                break;
        }

        if (genero == "nobinario") {
            cantidadNoBi++;
            if (carrera == "psicologia") {
                if (bandera) {
                    mejorAlumnoNoBiPsico = nombre;
                    notaMejorAlumnoNoBiPsico = nota;

                    bandera = false;
                } else {
                    if (nota > notaMejorAlumnoNoBiPsico) {
                        mejorAlumnoNoBiPsico = nombre;
                        notaMejorAlumnoNoBiPsico = nota;
                    }
                }
            }
        }

        if (estadoCarrera == "finalizado") {
            cantidadFinalizantes++;
            totalFinalizantes = totalFinalizantes + nota;
        }

        verificador = confirm("¿Agregar otro alumno?");
    } while (verificador);

    cantidadTotal = cantidadProgram + cantidadPsico + cantidadDisGraf;

    promedioFinalizantes = totalFinalizantes / cantidadFinalizantes;
    promedioFinalizantes = parseFloat(promedioFinalizantes);
    promedioFinalizantes = promedioFinalizantes.toFixed(2);

    if (cantidadProgram > cantidadPsico && cantidadProgram > cantidadDisGraf) {
        carreraMayor = "Programación";
    } else {
        if ((cantidadPsico > cantidadProgram && cantidadPsico > cantidadDisGraf)) {
            carreraMayor = "Psicología";
        } else {
            carreraMayor = "Diseño Gráfico";
        }
    }

    mensaje = "Cantidad total de alumnos de cada carrera: " + cantidadTotal;
    mensaje += " (Programación: " + cantidadProgram + " | Psicología: " + cantidadPsico + " | Diseño Gráfico: " + cantidadDisGraf + ")" + "\n";
    mensaje += "Cantidad total de mujeres que cursan la carrera de programación: " + cantidadMujeresProgram + "\n";
    mensaje += "Cantidad de alumnos no binarios: " + cantidadNoBi + "\n";
    mensaje += "Promedio de notas de los alumnos finalizantes.: " + promedioFinalizantes + "\n";
    mensaje += "Nombre  del mejor alumno no binario en la carrera de psicología.: " + mejorAlumnoNoBiPsico;
    mensaje += " (" + notaMejorAlumnoNoBiPsico + ")" + "\n";
    mensaje += "Carrera con más alumnos: " + carreraMayor;

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
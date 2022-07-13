function mostrar() {
    let num1;
    let num2;
    let resultado;
    let mensaje;

    num1 = prompt("Primer número:");
    num1 = parseInt(num1);

    num2 = prompt("Segundo número:");
    num2 = parseInt(num2);

    if (num1 == num2) {
        num1 = String(num1);
        num2 = String(num2);

        resultado = num1 + num2;

        mensaje = resultado;
    }

    if (num1 > num2) {
        resultado = num1 - num2;

        mensaje = resultado;

        if (resultado > 10) {
            mensaje = "La resta es " + resultado + " y superó el 10.";
        }
    } else {
        resultado = num1 + num2;
        mensaje = resultado;
    }

    alert(mensaje);
}

// Santiago Collazo - santiago.collazo7@gmail.com
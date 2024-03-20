function calcularMod97(numLargo) {
    let N = numLargo.split("", 9).shift();
    let M;
    do {
        M = N % 97;
        N = M + numLargo.split("", 7).shift();
    } while (N == 1);
    return M;
}

function validarIBAN(iban) {
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrayLetras = letras.split("");
    let numPais
    for (let i = 10; i < arrayLetras.lenght; i++) {
        if (arrayLetras[i] == iban.charAt(0) || arrayLetras[i] == iban.charAt(1)) {
            numPais += i;
        }
    }
    let numCuenta = iban.substring(4, 23);
    let numControl = iban.substring(2, 3);
    let numCompleto = numCuenta + numPais + numControl;
    if (calcularMod97(numCompleto) == 1) {
        return true;
    } else {
        return false;
    }
}

function principal() {
    let ibanSelec = prompt("Indique un número IBAN");
    if (validarIBAN(ibanSelec)) {
        alert("El número IBAN es correcto");
    } else {
        alert("El número IBAN es incorrecto")
    }
}
principal();
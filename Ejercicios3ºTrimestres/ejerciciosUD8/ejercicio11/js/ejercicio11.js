let tamanioArray = prompt('Indique el tamaño del array');
let total = 0;
let miArray = new Array();
let numNuevo = 0;
for (let i = 0; i < tamanioArray; i++) {
    miArray[i] = prompt('Introduzca un número');
}

do {
    for (let i = 0; i < miArray.length; i++) {
        alert(miArray[i]);
    }
    for (let i = 0; i < miArray.length; i++) {
        total += parseInt(miArray[i]);
    }
    alert('Suma total:' + total);
    numNuevo = prompt('Introduzca otro número e introduzca un número negativo para salir');
    miArray.shift();
    miArray.push(numNuevo);
} while (numNuevo >= 0);
function ordenarDeMayorAMenor(array) {
    array.sort((a, b) => b - a);
    return array;
}


const numeros = [2, 9, 12, 8, 23,10,16];
const numerosOrdenados = ordenarDeMayorAMenor(numeros);
alert(numerosOrdenados)
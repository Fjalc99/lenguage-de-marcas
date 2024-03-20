/EJERCICIO 1/
function cambiarOrden(unArray) {
    let num1 = Math.floor(Math.random() * unArray.length);
    let num2;
    do {
        num2 = Math.floor(Math.random() * unArray.length);
    } while (num2 === num1);

    let elem1 = unArray[num1];
    let elem2 = unArray[num2]
    unArray.splice(num1, 1, elem2);
    unArray.splice(num2, 1, elem1);

    return unArray;
}


/EJERCICIO 2/
function trocearURL(url) {
    let resultado = url.split('://');
    let todoMenosProtocolo = resultado.pop();
    let partes = todoMenosProtocolo.split('/')
    for (let parte of partes) {
        let subpartes = parte.split('.');
        for (let subparte of subpartes) {
            resultado.push(subparte);
        }
    }

    return resultado;

}

/EJERCICIO 03/
function principal() {
    let url = prompt('Indique la URL que desee');
    let array = trocearURL(url);

    for (let i = 0; i < 4; i++) {
        array = cambiarOrden(array);
        alert(array);
    }
}

principal();
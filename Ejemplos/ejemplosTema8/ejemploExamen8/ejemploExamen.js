
//Escribe la funcion sortear{arr} que recibe como parametro un array que tenia que darnos un elemento random 

function sortear(arr) {

    let numAleatorio = Math.floor(Math.random() * arr.lenght)
    return numAleatorio;
}


//-------------------------------

//let str =  [border-left-radius]

function camilize(str) {

    //border-left-radius -> borderLeftRadius

    //quitamos guiones y separamos palabras
    let palabrasSueltas = str.split('-');


    //Cambiar primera letra a mayusculas a partir de la segunda

    for (let i = 1; i < palabrasSueltas.length; i++) {
        primeraEnMayuscula = palabrasSueltas[i].charAt(0).toUpperCase();
        palabrasSueltas[i] = primeraEnMayuscula + palabrasSueltas[i].substring(1)
    }


    //unir las palabras

    return palabrasSueltas.join('');


}

//-----------------------------------------------------------------------------------------

function pedirNombre() {

    let resultado = new Array();




    let texto = prompt("Introduzca un texto")
    while (isNaN(texto)) {
        resultado.push(texto);
        texto = prompt("Introduzca otro texto")

    }

    return resultado;
}



//---------------------------------------------------------------------------------------

function principal() {

    let propiedadesCSS = pedirNombre();

    for (let i = 0; i < propiedadesCSS.length; i++) {
        propiedadesCSS[i] = camilize(propiedadesCSS[i])
    }
    return principal;
}



alert("El escogido es:  " + sortear(propiedadesCSS))

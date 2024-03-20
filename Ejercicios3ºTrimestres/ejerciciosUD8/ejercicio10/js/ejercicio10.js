function palindromos(texto) {

    let resultado = "La cadena \""+texto+"\"\n"

    let textoOriginal = texto.toLowerCase();

    let letraSinEspacios = textoOriginal.split("");


    let cadenaSinEspacios = "";
    for(i in letraSinEspacios){

        if (letraSinEspacios[i] != " ") {
            cadenaSinEspacios += letraSinEspacios[i];
        }
    }


    let letras = cadenaSinEspacios.split("");
    let letrasReves = cadenaSinEspacios.split("").reverse();

    let iguales = true;
    for(i in letras){
        if (letras[i] == letrasReves[i]) {
        
        }
        else{
             iguales = false;
        }
    }

    if (iguales) {
        resultado += "Es un palindromo";
    }else{
        resultado += "No es un palindromo";
    }   

        return resultado;
}

alert(palindromos("AAABAAA"));
alert(palindromos("AABBA"));


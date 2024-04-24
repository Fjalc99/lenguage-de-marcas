let numero = prompt("Introduzca un número entero")
let dos=2;
let cero=0;

let resultado = indicaSiEsPar(numero);
alert("El número "+numero+" es "+resultado)

function indicaSiEsPar(numero) {

    if(numero % dos == cero ){
        return "Par"
    }else{

        return "Impar"
    }     
}
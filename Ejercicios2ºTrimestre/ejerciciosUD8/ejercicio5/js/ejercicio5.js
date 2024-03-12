let numero1 = 5;
let numero2 = 8;
let cero = 0;

if(numero1 < numero2){

    alert(numero1  + "\tno es mayor que\t" + numero2)
}

if (numero2 >= cero) {
    
    alert(numero2  + "\tEs positivo")
}

if (numero1  !=cero) {
    
    alert(numero1 + "\tEs negativo o distinto de \t" + cero)
}

if (numero1++ <= numero2 ) {
    
    alert(numero1 + "\tIncrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2\t" +numero2)
}
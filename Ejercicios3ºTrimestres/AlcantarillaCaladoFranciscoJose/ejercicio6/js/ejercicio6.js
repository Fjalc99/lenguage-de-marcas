
let veintitres = 23;

let letraDni =  ['T','R','W','A','G','M','T','F','P','D','X','B','N'
                ,'J','Z','S','Q','V','H','L','C','K'];

let numeroDni = prompt("Introduzca el numero del dni")
let letra = prompt("Seleccione la letra del dni")


if (numeroDni < 0 || numeroDni > 99999999 ) {

    alert("El número no es valido")
    
}else{

       let calcularLetra = letra[numero%veintitres];
       
       if (calcularLetra != letra) {
            alert("La letra o el número no son validos")        
       }else{
            alert("El número y la letra son correctos")
       }
}



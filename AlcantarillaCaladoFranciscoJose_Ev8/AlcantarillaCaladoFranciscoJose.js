//Ejercicio 1

let unArray=[1,2,3,4,b,5,a,5.5,6.3,4.5]

function redondearElementos(unArray) {
    
    
    for (let i = 0; i < unArray.lenght; i++) {
        
        if(isNaN(numero)){
            return resultado=  Math.round(numero);
           
        }else{
            return resultado = redondearElementos.pop()
        }  

    }

    return resultado
}

    alert(redondearElementos)

//--------------------------------------------------------
//Ejercicio 2
    function eliminarExtremos(unArray) {
       
        for (let index = 0; index < unArray.length; index++) {
            const element = unArray[index];
            
            if ( unArray.sort((a, b) => b - a)) {
                return unArray.shift(numero)
            }else{
                if ( unArray.sort((a, b) <= b - a)) {
                    
                }
                return unArray.pop(numero)
            }
        }
        

        return unArray;
    }

    const numero= [2,3,4,8,9,1,7]
    const eliminarNumeros = eliminarExtremos(numero)
    alert(eliminarNumeros)


    //--------------------------------------
    //Ejercicio 3

    function parsearNotas(str) {
        
        
    }
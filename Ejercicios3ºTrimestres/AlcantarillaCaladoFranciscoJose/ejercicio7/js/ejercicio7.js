let numFactorial =  prompt("Introduzca el numero del que quieres sacar el factorial")
let resultado=1;

for (let index = 1; index <=numFactorial; index++) {
    resultado *=index;
    
}

alert(resultado)
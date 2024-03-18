/*let mes = prompt("Indica un mes"); //Propmt es como si pidieras por teclado
alert("Estamos en "+mes);*/


//let enlace = '<a href="./http://127.0.0.1:5500/Ejemplos/ejemplosTema8/ejemplojs.html">' //Por si hace falta poner un documento html en el codigo


/*Arrays*/
//let dia = new dias("Lunes",0,"Martes"); 

/*let meses= ['ene','feb','mar','abr']
for(let mes of meses){
    alert (mes);
} */

//let valores = [true, 5, false, "hola", "adios", 2];


//let mensaje = "hola hola vecinito"
//let letra = mensaje.charAt(5);
//alert(letra)
//-------------------------------------------------------------------------
//alert(mensaje.substring(5,8)); 
//Esto coge el rango de caracateres que esten dentro de ese 
//rango mostrando uno antes del que es el ultimo de rango



//----------------------------------------------------------------------

//Esto es para separar palabras 
/*let partes = mensaje.split ("")
for (let parte of partes){
    alert(parte);
}*/
//--------------------------------------------------------------------------
//concat()
//let laborables = ['lunes','martes','miercoles','jueves','viernes']
//let finde = ['sabado','domingo']

//let semana = laborables.concat(finde)

/*alert('En semana: '+semana)
alert('En laborables: '+laborables)
alert('En finde: '+finde)*/
//----------------------------------------------------------------------------
//join(separador)
//let letras = laborables.join('  * ')

//alert('En laborables '+letras)

//----------------------------------------------------------------------------
//pop() Elemina el ultimo del array

//let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
//let ultimo = dias.pop(dias)



//alert(dias)


//------------------------------------------------------------------------------
//push() Añade al final del array

//let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
//let ultimo = dias.pop(dias)
//dias.push(ultimo)

//alert(dias)

//-------------------------------------------------------------------------------
//shift()  Este quita el primer elemento

//let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
//let primero = dias.shift(dias)

//alert(dias)


//--------------------------------------------------------------------------------
//unshift() Este mete en el primer lugar

/*let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
let primero = dias.shift(dias)
dias.unshift(primero)
alert(dias)*/

//----------------------------------------------------------------------------------
//indexOf()
/*let dias = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
alert('El domingo es el elemento: '+ dias.indexOf('domingo'))*/


//------------------------------------------------------------------------------------
//lastInedOf()

/*let dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado','domingo']
alert('El domingo es el elemento: '+dias.lastIndexOf('domingo'))*/

//-------------------------------------------------------------------------------------------
//toFixed()  Redondea los decimales que indiques

//let num = 345.25874621;
//alert(num.toFixed(9))

//-------------------------------------------------------------------------------------------
//Do while para no parar de meter palabras hasta que pulses intro sin meter ningún dato
/*let unArray = leerArrayPorTeclado();
alert('El array tiene '+ unArray.length+' el elemento es '+unArray)


function leerArrayPorTeclado() {
    let continuar;
    let miArray = new Array();


    do {
       let dato = prompt("Diga algo para guardar en el array")
       continuar = dato!=='';
       if (continuar) {
        miArray.push(dato);
       }
       miArray.push(dato)
        
        
    } while (continuar);

    return miArray;
}*/


//-----------------------------------------------------------------------------------------------
//Lo mismo pero con while

/*let unArray = leerArrayPorTeclado();
alert('El array tiene '+ unArray.length+' el elemento es '+unArray)


function leerArrayPorTeclado() {

    let miArray = new Array();

    let dato = prompt("Diga algo para guardar en el array")
    while (dato!=='') {
        miArray.push(dato)
        let dato = prompt("Diga algo para guardar en el array")
    }

    return miArray;
}*/


//------------------------------------------------------------------------------------------
//Lo mismo pero con el Bucle for

/*let unArray = leerArrayPorTeclado();
alert('El array tiene '+ unArray.length+' el elemento es '+unArray)


function leerArrayPorTeclado() {

    let miArray = new Array();

    let dato = prompt("Diga algo para guardar en el array")
    for (;dato!== '' ;dato = prompt("Diga algo para guardar en el array")) {
        miArray.push(dato)
    }

    return miArray;
}*/

//-----------------------------------------------------------------------------------------------
//Sacar el primero y guardarlo ahi

/*let unArray = leerArrayPorTeclado();
alert('El array tiene '+ unArray.length+' el elemento es '+unArray)


function leerArrayPorTeclado() {

    let miArray = new Array();
    const limite = 3;

    let dato = prompt("Diga algo para guardar en el array")
    while (dato !=='') {
        if(miArray.length>=limite){
            miArray.shift();
        }
    
        miArray.push(dato);
        dato = prompt("Diga algo para guardar en el array")
    }
    return miArray;
}*/
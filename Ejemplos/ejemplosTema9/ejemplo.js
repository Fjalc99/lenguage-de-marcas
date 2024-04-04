/*let p1 = document.getElementById('parrafo1');
alert(p1.innerText)
p1.innerHTML = '<strong>  Lo he cambiado <strong/>'*/

/*let  elementos = document.querySelectorAll('li')
for(let el of elementos){
    alert(el.innerText);
    el.innerText += "leido";
}*/

/*let boton = document.getElementById('boton')
boton.addEventListener('click', botonPulsado)

function botonPulsado() {
 let primerLi = document.querySelector('li:first-child');
  for(li of primerLi){
    alert(li.innerText)
  }
}*/
//-------------------------------------------------------------------------------

let boton = document.getElementById('boton')
boton.addEventListener('click', botonPulsado)


function botonPulsado() {

 /* 
  let texto  = prompt("Diga el texto del nuevo elemento")

  //obtengo la lista
  let lista =  document.querySelector('ol')

  //Creamos el elemento
  let nuevoLi = document.createElement('li')

  //le damos contenido
  nuevoLi.innerText=texto;

  //añado el li al ol
  lista.append(nuevoLi)
  
  */


//------------------------------------------------------------------------------
/*
let zonaMensajes = document.querySelector('.zonaMensajes');

let nuevoP = zonaMensajes.cloneNode(true);

nuevoP.querySelector('strong').innerText = 1;

zonaMensajes.after(nuevoP)*/

//-------------------------------------------------------------------
/*
let zonaMensajes = document.querySelector('.zonaMensajes')

let numMensajes = zonaMensajes.querySelector('strong')

let numActual = parseInt(numMensajes.innerText)+1;
numMensajes.innerText = numActual;
*/



//------------------------------------------------------------------------------


/*

let lista =  document.querySelector('ol')

let segundoLi = lista.querySelector('li:nth-child(2)');


lista.append(segundoLi)

*/


//---------------------------------------------------------------------------------
/*
let zonaMensajes = document.querySelector('.zonaMensajes')
zonaMensajes.hidden = !zonaMensajes.hidden
*/

//----------------------------------------------------------------------------------

let zonaMensajes = document.querySelector('.zonaMensajes')

zonaMensajes.innerText = "El boton es del tipo " +boton.type


/*let enlace = document.createElement('a');
enlace.setAttribute('href','#inicio')

document.querySelector('body').id='inicio'
enlace.innerText= " Ir al inicio "

zonaMensajes.append(enlace);*/

//_____________________________________________________________________________________

//boton.className +=  ' text-success' //siempre hay que dar un espaacio despues de la primera comilla

boton.classList.toggle('btn-primary')
boton.classList.toggle('btn-success')


}
/*let p1 = document.getElementById('parrafo1');
alert(p1.innerText)
p1.innerHTML = '<strong>  Lo he cambiado <strong/>'*/

/*let  elementos = document.querySelectorAll('li')
for(let el of elementos){
    alert(el.innerText);
    el.innerText += "leido";
}*/

let boton = document.getElementById('boton')
boton.addEventListener('click', botonPulsado)

function botonPulsado() {
 let primerLi = document.querySelector('li:first-child');
  for(li of primerLi){
    alert(li.innerText)
  }
}
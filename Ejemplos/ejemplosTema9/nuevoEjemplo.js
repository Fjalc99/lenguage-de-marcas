//cada vez que cambie algún texto, se pase a mayúsculas

let formulario = document.forms.registro;

for(let campo of formulario.elements){
    if (campo.type==="text") {
        campo.addEventListener('input', pasarMayusculas)

    }else if(campo.type==="password"){
        campo.nextElementSibling.addEventListener('pointerover', verContrasena)
        campo.nextElementSibling.addEventListener('pointerout', ocultarContrasena)

    }

    
}

let botonEnviar = document.querySelector('button');
botonEnviar.addEventListener('click', validarFormulario);

function pasarMayusculas(elEvento) {
    this.value = this.value.toUpperCase();
}

function verContrasena(elEvento) {
    this.previousElementSibling.type="text";
}

function ocultarContrasena(elEvento) {
    this.previousElementSibling.type="password";
}

function validarFormulario(elEvento) {
    let resultado = true;

    if(formulario.elements.nombre.value=''){
        resultado=false;
    }

    if (!formulario.elements.genero.checked) {
        resultado=false;
    }

    if (reslutado) {
        formulario.submit();
    }
}
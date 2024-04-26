let numBocatas = 0;
let btnActualizar = document.getElementById('actualizar')


document.getElementById('verPwd').addEventListener('pointerover', function () {
    let contraseniaInput = document.getElementById('pwd');
    if (contraseniaInput.type === 'password') {
        contraseniaInput.type = 'text';
    } else {
        contraseniaInput.type = 'password';
    }
});




function validaFormulario() {
    
    let todosOk=true;
    for(let campo of document.forms.formulario.elements){
        todosOk &&= (campo.value !=='');
    }

    if(todosOk){
        let btnTramitar = document.getElementById('tramitar');
        btnTramitar.classList.remove('btn-info')
        btnTramitar.classList.add('btn-success');
        numBocatas+=document.forms.elements.cantidad.value;
    }


    
    if (validarCantidad() && validarNombre() && validarApellidos() && comprobarContrasena() ) {
        
    }
}


function actualizarMensajeCarrito() {
    let divMensaje = document.getElementById('numBocatas')
    divMensaje.innerText = (numBocatas)? "Su carrito tiene "+numBocatas+  "bocadillos": "total"
}


function actualizarTablaCarrito() {
    let tabla = document.querySelector('table');
    let nuevoTr = document.createElement('tr');
    let tdBocadillo = document.createElement('td');
    let tdTamano = document.createElement('td');
    let tdCantidad = document.createElement('td');

    let campos = document.forms.formulario.elements;
    tdBocadillo.innerText = campos.bocata.vlaue;
    tdTamano.innerText = campos.tamano.value;
    tdCantidad.innerText = campos.cantidad.value;

    nuevoTr.append(tdBocadillo);
    nuevoTr.append(tdTamano);
    nuevoTr.append(tdCantidad);

    tabla.append(nuevoTr);

}


function tramitarPedido() {
    let modalBody = document.querySelector('.modal-body');
    if (numBocatas) {
        let nuevaTabla = document.querySelector('table').cloneNode(true);
        modalBody.append(nuevaTabla);
        modalBody.firstElementChild.remove();
    }else{
        modalBody.firstElementChild.innerText="debes encargar algo"
    }
}



function validarCantidad() {
    let nombreInput = document.getElementById('cantidad');
    let nombre = nombreInput.value.trim();

    if (nombre === '') {
        nombreInput.classList.add('is-invalid');
        return false;
    } else {
        nombreInput.classList.remove('is-invalid');
        return true;
    }
  
}


function validarNombre() {
    let nombreInput = document.getElementById('nombre');
    let nombre = nombreInput.value.trim();

    if (nombre === '') {
        nombreInput.classList.add('is-invalid');
        return false;
    } else {
        nombreInput.classList.remove('is-invalid');
        return true;
    }
}


function validarApellidos() {
    let apellidosInput = document.getElementById('apellidos');
    let apellidos = apellidosInput.value.trim();

    if (apellidos === '') {
        apellidosInput.classList.add('is-invalid');
        return false;
    } else {
        apellidosInput.classList.remove('is-invalid');
        return true;
    }
}

function comprobarContrasena() {
    let contraseñaInput = document.getElementById('pwd');
    let contraseña = contraseñaInput.value.trim();
    



    if (contraseña === '') {

            contraseñaInput.classList.remove('is-invalid');
            return true;
        }else{
        contraseñaInput.classList.add('is-invalid');
        return false;
    }
}



document.getElementById('actualizar').addEventListener('click', function () {
  
        validaFormulario();

});
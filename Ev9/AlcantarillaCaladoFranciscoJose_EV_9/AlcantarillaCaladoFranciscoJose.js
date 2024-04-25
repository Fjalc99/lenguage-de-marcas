document.getElementById('verPwd').addEventListener('pointerover', function () {
    let contraseñaInput = document.getElementById('pwd');
    if (contraseñaInput.type === 'password') {
        contraseñaInput.type = 'text';
    } else {
        contraseñaInput.type = 'password';
    }
});


function validaFormulario() {
    
    if (validarCantidad() && validarNombre() && validarApellidos() && comprobarContrasena() ) {
        
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
  
    if (validarCantidad() && validarNombre() && validarApellidos() && comprobarContrasena()) {;
        document.getElementById('formulario').submit(); 
    } else {
        alert('Por favor, complete todos los campos correctamente antes de enviar el formulario.');
    }
});
//Ejercicio 8

document.getElementById('togglePassword').addEventListener('pointerover', function() {
    const contraseñaInput = document.getElementById('contraseña');
    if (contraseñaInput.type === 'password') {
        contraseñaInput.type = 'text';
    } else {
        contraseñaInput.type = 'password';
    }
});

document.getElementById('togglePassword2').addEventListener('pointerover', function() {
    const repContraseñaInput = document.getElementById('repcontraseña');
    if (repContraseñaInput.type === 'password') {
        repContraseñaInput.type = 'text';
    } else {
        repContraseñaInput.type = 'password';
    }
});



//Ejercicio 9

function preProcesarDatos() {
    // Validar campos
    if (validarNombre() && validarApellidos() && comprobarDNI()){
        pasarNombreApellidosAMayusculas();
        // Agregar validación para otros campos aquí
    }

}

function validarNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombreError = document.getElementById('nombreError');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        nombreInput.classList.add('is-invalid');
        nombreError.innerText = 'Por favor, ingrese su nombre.';
        return false;
    } else {
        nombreInput.classList.remove('is-invalid');
        nombreError.innerText = '';
        return true;
    }
}

function validarApellidos() {
    const apellidosInput = document.getElementById('apellidos');
    const apellidosError = document.getElementById('apellidosError');
    const apellidos = apellidosInput.value.trim();

    if (apellidos === '') {
        apellidosInput.classList.add('is-invalid');
        apellidosError.innerText = 'Por favor, ingrese sus apellidos.';
        return false;
    } else {
        apellidosInput.classList.remove('is-invalid');
        apellidosError.innerText = '';
        return true;
    }
}

function pasarNombreApellidosAMayusculas() {
    const nombreInput = document.getElementById('nombre');
    const apellidosInput = document.getElementById('apellidos');

    const nombre = nombreInput.value.toUpperCase();
    const apellidos = apellidosInput.value.toUpperCase();

    nombreInput.value = nombre;
    apellidosInput.value = apellidos;
}


function comprobarDNI() {
    const dniInput = document.getElementById('dni');
    const dniError = document.getElementById('dniError');
    const dni = dniInput.value.trim().toUpperCase(); // Convertir a mayúsculas

    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (/^\d{8}[A-Z]$/.test(dni)) {
        const letraCalculada = letras.charAt(parseInt(dni, 10) % 23);

        if (letraCalculada === dni.charAt(8)) {
            dniInput.classList.remove('is-invalid');
            dniError.innerText = '';
            return true;
        } else {
            dniInput.classList.add('is-invalid');
            dniError.innerText = 'La letra del DNI no es correcta.';
            return false;
        }
    } else {
        dniInput.classList.add('is-invalid');
        dniError.innerText = 'Formato de DNI incorrecto.';
        return false;
    }
}
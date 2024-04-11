/*let campoNombre = document.getElementById('nombre');
campoNombre.addEventListener('input' ,eventoInputNombre);*/

let formulario = document.querySelector('form');
formulario.addEventListener('input', eventoInputNombre)
formulario.addEventListener('submit', enviarFormulario)




function eventoInputNombre(evento) {
    evento.target.value = evento.target.value.toUpperCase();
}

function enviarFormulario(evento) {
    evento.preventDefault();

    alert("He parado el envio del formulario")
    formulario.submit();

}
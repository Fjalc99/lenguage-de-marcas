function cadenaTexto(texto) {
    
    let resultado = "La cadena \""+texto+"\"";

    if (texto == texto.toUpperCase()) {
        resultado += "está formada sólo por mayúsculas"
    }else if (texto == texto.toLowerCase()) {
        resultado += "está formada sólo por minúsculas"
    }else{
        resultado += "está formada por mayúsculas y minúsculas"
    }

    return resultado;
}

alert(cadenaTexto ("HOLA MUNDO"));
alert(cadenaTexto ("Hola gente"))


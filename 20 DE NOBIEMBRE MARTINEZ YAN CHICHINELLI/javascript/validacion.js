

error.style.color = "red";

function enviarFormulario() {
    console.log(Enviando);
}

var mensajesError = []

if (Nombre del responsable === "") {
    alert("Ingresa el nombre del responsable ");
    return false;
}

if (Apellido del responsable === "") {
    alert("Ingresa el apellido  del responsable");
    return false;
}

if (gmail === "") {
    alert("Ingresa tu gmail");
    return false;
}

if (Telefono === "") {
    alert("Ingresa su numero de telefono");
    return false;
}

if (nombre del Alumno === "") {
    alert("Ingresa el nombre del alumno");
    return false;
}

if (apellido del alumno === "") {
    alert("Ingresa el apellido del alumno ");
    return false;
}


if (mensajesError.length > 0) {

    error.innerHTML = mensajesError.join(', ');

    return false;
}
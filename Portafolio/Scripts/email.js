function sendEmail(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
    let params = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value, // Corregido a 'correo'
        mensaje: document.getElementById("mensaje").value
    };
    emailjs.send("service_vol9bag", "template_qcwebcs", params)
        .then(function(response) {
            alert("El email ha sido enviado");
        }, function(error) {
            alert("Error al enviar el email: " + JSON.stringify(error));
        });
}
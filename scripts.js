// Mostrar mensaje al enviar el formulario
document.getElementById("consulta-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío real del formulario
    alert("¡Su consulta ha sido enviada con éxito! Nos pondremos en contacto a la brevedad.");
});

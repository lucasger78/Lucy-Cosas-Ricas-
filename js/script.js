//Modal para enviar whatsapp
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newsletterForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevenimos el comportamiento tradicional del formulario

        // Obtenemos el valor del campo de texto (pedido)
        const pedido = document.getElementById('pedidoInput').value.trim();

        // Verificamos si se capturó el valor
        console.log("Valor del pedido:", pedido); // Para ver si el valor está siendo capturado

        // Si el valor no está vacío
        if (pedido) {
            // Codificamos el mensaje para la URL
            const mensaje = encodeURIComponent(pedido);

            // Construimos el enlace de WhatsApp
            const whatsappLink = `https://walink.co/71a92a?text=${mensaje}`;  // Reemplaza con tu número de WhatsApp

            console.log("Enlace de WhatsApp:", whatsappLink);  // Para verificar si el enlace está bien construido

            // Abrimos el enlace en una nueva pestaña
            window.open(whatsappLink, '_blank');
        } else {
            alert('Por favor, ingrese su pedido antes de enviar.');
        }
    });
});
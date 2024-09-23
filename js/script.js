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


// INSTAGRAM GALERIA
$(document).ready(function() {
    // Inicializando Owl Carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});
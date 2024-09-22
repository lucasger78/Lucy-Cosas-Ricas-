// JSON simulado con imágenes repetidas en orden aleatorio
const imagesData = [
    { 
        "src": "img/instagram-img/01.png", 
        "alt": "Marqueese", 
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin."
    },
    { 
        "src": "img/instagram-img/02.png", 
        "alt": "Torta 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/03.png", 
        "alt": "Torta 3",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/04.png", 
        "alt": "Torta 4",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/05.png", 
        "alt": "Torta 5",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/06.png", 
        "alt": "Torta 6",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/07.png", 
        "alt": "Torta 7",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/08.png", 
        "alt": "Torta 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/01.png", 
        "alt": "Marqueese", 
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin."
    },
    { 
        "src": "img/instagram-img/02.png", 
        "alt": "Torta 2",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/03.png", 
        "alt": "Torta 3",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/04.png", 
        "alt": "Torta 4",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/05.png", 
        "alt": "Torta 5",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/06.png", 
        "alt": "Torta 6",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    },
    { 
        "src": "img/instagram-img/07.png", 
        "alt": "Torta 7",
        "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit at, ante nunc eleifend eros aenean sagittis. Sapien nunc maecenas imperdiet convallis tristique proin." 
    }
    
];

// Seleccionar el contenedor de la galería
const galleryContainer = document.getElementById('gallery');

// Función para cargar las imágenes dinámicamente desde el JSON simulado
function loadImages() {
    imagesData.forEach((image, index) => {
        const div = document.createElement('div');
        div.classList.add('single-image');

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.description = image.description || "";  // Si no hay descripción, deja vacío.
        img.dataset.index = index;

        div.appendChild(img);
        galleryContainer.appendChild(div);

        // Agregar evento de clic para abrir el modal
        img.addEventListener('click', function () {
            openModal(image.src, image.alt, image.description || "");  // Si no hay descripción, muestra cadena vacía
        });
    });
}

// Funcionalidad del modal
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');  // Nuevo para mostrar el alt
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementsByClassName('close')[0];

// Abrir el modal con la imagen y la descripción seleccionada
function openModal(src, alt, description) {
    modal.style.display = 'flex';  // Mostrar el modal
    modalImage.src = src;
    modalTitle.innerText = alt;  // Mostrar el alt como título
    modalDescription.innerText = description;  // Mostrar la descripción
}

// Cerrar el modal
closeModal.onclick = function () {
    modal.style.display = 'none';
};

// Cerrar el modal si se hace clic fuera de la imagen
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Cargar las imágenes cuando la página termine de cargar
window.onload = loadImages;

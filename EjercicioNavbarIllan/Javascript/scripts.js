// Obtener el formulario y los campos
const formularioContacto = document.getElementById('formulario-contacto');
const campos = {
    nombre: document.getElementById('nombre'),
    apellidos: document.getElementById('apellidos'),
    email: document.getElementById('email'),
    telefono: document.getElementById('telefono')
    
};

// Función para validar campos
function validarCampo(campo) {
    const errorText = campo.nextElementSibling;
    if (campo.value.trim() === '') {
        campo.classList.add('error');
        if (errorText) {
            errorText.textContent = 'Este campo es obligatorio';
            errorText.classList.add('mensaje-error');
        }
        return false;
    } else {
        campo.classList.remove('error');
        if (errorText) {
            errorText.textContent = '';
            errorText.classList.remove('mensaje-error');
        }
        return true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const formularioContacto = document.getElementById('formulario-contacto');
    if (formularioContacto) {
        formularioContacto.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevenir el envío por defecto
            let formularioValido = true;

            // Validar cada campo
            for (let key in campos) {
                if (!validarCampo(campos[key])) {
                    formularioValido = false;
                }
            }

            // Si el formulario es válido, enviar los datos
            if (formularioValido) {
                const datosFormulario = new FormData(formularioContacto);
                fetch(formularioContacto.action, {
                    method: formularioContacto.method,
                    body: datosFormulario
                })
                .then(response => response.json())
                .then(data => console.log('Éxito:', data))
                .catch(error => console.error('Error:', error));
            }
        });
    }
});

// Lógica para ocultar el banner
const banner = document.getElementById('banner');
const cerrarBanner = document.getElementById('cerrar-banner');

document.addEventListener('DOMContentLoaded', function() {
    if (cerrarBanner) {
        cerrarBanner.addEventListener('click', function() {
            if (banner) {
                banner.style.display = 'none';
            }
        });
    }
});

// Datos de la galería
const elementosGaleria = [
    { tipo: 'imagen', src: './Assets/imagenes/3.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/2.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/1.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/4.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/5.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/6.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/7.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/8.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/9.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/10.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/11.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/12.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/uvas.jpeg', alt: 'Imagen 1' },
    { tipo: 'imagen', src: './Assets/imagenes/ribera.jpg', alt: 'Imagen 2' },
    { tipo: 'imagen', src: './Assets/imagenes/vinedos-bodegas-pradorey-ribera-duero(1).jpg', alt: 'Imagen 3' },
    { tipo: 'imagen', src: './Assets/imagenes/realimagen.jpg', alt: 'Imagen 4' },
    { tipo: 'imagen', src: './Assets/imagenes/13.jpg', alt: 'Imagen 4' }
    
];

// Función para crear la galería
function crearGaleria() {
    const galeria = document.getElementById('galeria');
    elementosGaleria.forEach(elemento => {
        let item;
        if (elemento.tipo === 'imagen') {
            item = document.createElement('img');
            item.src = elemento.src;
            item.alt = elemento.alt;
            item.className = 'galeria-item';
    
        }
        galeria.appendChild(item);
    });
}

// Llamar a la función para crear la galería al cargar la página
document.addEventListener('DOMContentLoaded', crearGaleria);

// Lógica para abrir el modal al hacer clic en una imagen
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('img01');
    const captionText = document.getElementById('caption');
    const images = document.querySelectorAll('.galeria-item');

    images.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    // Cerrar el modal
    const span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-consentimiento');
    const acceptCookiesButton = document.getElementById('accept-cookies');

    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function checkCookieConsent() {
        if (!getCookie('cookie_consent')) {
            cookieBanner.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Bloquea el scroll
        } else {
            cookieBanner.style.display = 'none';
            document.body.style.overflow = 'auto'; // Permite el scroll
        }
    }

    acceptCookiesButton.addEventListener('click', function() {
        setCookie('cookie_consent', '1', 365);
        cookieBanner.style.display = 'none';
        document.body.style.overflow = 'auto'; // Permite el scroll
    });

    checkCookieConsent();
});


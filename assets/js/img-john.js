const imagenPequena = document.getElementById('John');
const imagenGrande = document.getElementById('Forma');

// 1. Definir el manejador del evento como una función con nombre para poder añadirla y quitarla.
const moveImagesHandler = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calcular la posición de las imágenes.
    // Usamos 'transform: translate(X, Y)' que es más performante que cambiar 'left' y 'top'.
    const imagenPequenaX = (windowWidth - mouseX) / 20;
    const imagenPequenaY = (windowHeight - mouseY) / 20;
    const imagenGrandeX = (windowWidth - mouseX) / 10;
    const imagenGrandeY = (windowHeight - mouseY) / 10;

    // Usamos requestAnimationFrame para una animación más fluida y eficiente.
    requestAnimationFrame(() => {
        imagenPequena.style.transform = `translate(${imagenPequenaX}px, ${imagenPequenaY}px)`;
        imagenGrande.style.transform = `translate(${imagenGrandeX}px, ${imagenGrandeY}px)`;
    });
};

let isEffectActive = false;

function checkScreenSize() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

    if (isSmallScreen && isEffectActive) {
        // Si la pantalla es pequeña y el efecto está activo, lo desactivamos.
        document.removeEventListener('mousemove', moveImagesHandler);
        // Reseteamos la transformación para que el CSS responsivo tome el control.
        imagenPequena.style.transform = '';
        imagenGrande.style.transform = '';
        isEffectActive = false;
    } else if (!isSmallScreen && !isEffectActive) {
        // Si la pantalla es grande y el efecto no está activo, lo activamos.
        document.addEventListener('mousemove', moveImagesHandler);
        isEffectActive = true;
    }
}

// Verificar el tamaño de la pantalla al cargar la página
checkScreenSize();

// Verificar el tamaño de la pantalla cuando se redimensiona
window.addEventListener('resize', checkScreenSize);
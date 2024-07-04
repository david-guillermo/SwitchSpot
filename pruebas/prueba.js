const scrollContainer = document.querySelector('.scroll-container');
let scrollAmount = 0;

window.addEventListener('wheel', (event) => {
    const delta = Math.sign(event.deltaY);
    scrollAmount += delta * 50; // Ajusta la velocidad del desplazamiento
    scrollContainer.style.transform = `translateX(${100 - scrollAmount}px)`;
});

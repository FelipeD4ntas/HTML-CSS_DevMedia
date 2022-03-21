const circulo = document.querySelector('#circulo');

window.addEventListener('wheel', girou);

// Função para girar os circulos da página de basquete.
function girou(event) {
    if (event.wheelDelta < 0) {
        circulo.style.transform = `rotate(90deg)`;
    } else {
        circulo.style.transform = `rotate(-90deg)`;
    };
};

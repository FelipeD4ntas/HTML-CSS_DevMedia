const circulo = document.querySelector('#circulo-um');

window.addEventListener('wheel', girou);

// Função para girar os circulos da página de futebol.
function girou(event) {
    if (event.wheelDelta < 0) {
        circulo.style.transform = `rotate(90deg)`;
    } else {
        circulo.style.transform = `rotate(-90deg)`;
    };
};


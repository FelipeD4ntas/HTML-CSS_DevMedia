const circulo = document.querySelector('#circulo-um');
window.addEventListener('wheel', girou);

function girou(event) {
    
    console.log(event)
    if (event.wheelDelta < 0) {
        circulo.style.transform = `rotate(90deg)`;
    } else {
        circulo.style.transform = `rotate(-90deg)`;
    }
}
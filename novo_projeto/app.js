const caixa = document.querySelector('.caixa');
const telaPause = document.querySelector('.popup-wrapper');
const btn = document.querySelector('button');
let posX = 0;
let posY = 0;

btn.addEventListener('click', pause);
document.addEventListener('keydown', move);

function move(event) {
    document.addEventListener('keydown', move);
    let tecla = event.keyCode;

    console.log(tecla);
    switch (tecla) {
        case 37:
            posX -= 50;
            caixa.style.left = `${posX}px`;
            break
        case 39:
            posX += 50;
            caixa.style.left = `${posX}px`;
            break
        case 38:
            posY -= 50;
            caixa.style.top = `${posY}px`;
            break
        case 40:
            posY += 50;
            caixa.style.top = `${posY}px`;
            break
        case 13:
            document.removeEventListener('keydown', move);
            telaPause.style.display = 'flex';
            break
    };

};

function pause() {
    document.addEventListener('keydown', move);
    telaPause.style.display = 'none';
};


// Esquerda: 37, Direita: 39, Cima: 38, Baixo: 40, enter 13
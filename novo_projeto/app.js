const cobra = Array.from(document.querySelectorAll('.cobra'));
const corpo_cobra = document.querySelector('#corpo-cobra');
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
    switch(tecla) {
        case 37:
            posX -= 10;
            corpo_cobra.style.left = `${posX}px`;
            corpo_cobra.style.display = 'flex';
            break
        case 39:
            posX += 10;
            corpo_cobra.style.left = `${posX}px`;
            corpo_cobra.style.display = 'flex';
            break
        case 38:
            posY -= 10;
            corpo_cobra.style.top = `${posY}px`;
            corpo_cobra.style.display = 'block';
            break
        case 40:
            posY += 10;
            corpo_cobra.style.top = `${posY}px`;
            corpo_cobra.style.display = 'block';
            break
        case 13:
            document.removeEventListener('keydown', move);
            console.log(cobra);
            telaPause.style.display = 'flex';
            break
    };

};

function pause() {
    document.addEventListener('keydown', move);
    telaPause.style.display = 'none';
}

// Esquerda: 37, Direita: 39, Cima: 38, Baixo: 40, enter 13
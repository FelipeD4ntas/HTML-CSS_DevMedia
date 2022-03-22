const circulo = document.querySelector('#circulo');

window.addEventListener('wheel', girou);

// Função para girar os circulos da página de corrida.
function girou(event) {
    if (event.wheelDelta < 0) {
        circulo.style.transform = `rotate(90deg)`;
    } else {
        circulo.style.transform = `rotate(-90deg)`;
    };
};

const corrida = document.querySelector('#corrida');
const marcha = document.querySelector('#marcha');
const revezamento = document.querySelector('#revezamento');
const salto = document.querySelector('#salto');
const arremesso = document.querySelector('#arremesso');
const combinada = document.querySelector('#combinada');

const art_corrida = document.querySelector('.art-corrida');
const art_marcha = document.querySelector('.art-marcha');
const art_revezamento = document.querySelector('.art-revezamento');
const art_salto = document.querySelector('.art-salto');
const art_arremesso = document.querySelector('.art-arremesso');
const art_combinada = document.querySelector('.art-combinada');


corrida.addEventListener('click', clicou_um);
marcha.addEventListener('click', clicou_dois);
revezamento.addEventListener('click', clicou_tres);
salto.addEventListener('click', clicou_quatro);
arremesso.addEventListener('click', clicou_cinco);
combinada.addEventListener('click', clicou_seis);

function clicou_um() {
    corrida.style.backgroundColor = '#FFD407';
    marcha.style.backgroundColor = 'white';
    revezamento.style.backgroundColor = 'white';
    salto.style.backgroundColor = 'white';
    arremesso.style.backgroundColor = 'white';
    combinada.style.backgroundColor = 'white';

    art_corrida.style.display = 'flex';
    art_marcha.style.display = 'none';
    art_revezamento.style.display = 'none';
    art_salto.style.display = 'none';
    art_arremesso.style.display = 'none';
    art_combinada.style.display = 'none';
};

function clicou_dois() {
    corrida.style.backgroundColor = 'white';
    marcha.style.backgroundColor = '#FFD407';
    revezamento.style.backgroundColor = 'white';
    salto.style.backgroundColor = 'white';
    arremesso.style.backgroundColor = 'white';
    combinada.style.backgroundColor = 'white';

    art_corrida.style.display = 'none';
    art_marcha.style.display = 'flex';
    art_revezamento.style.display = 'none';
    art_salto.style.display = 'none';
    art_arremesso.style.display = 'none';
    art_combinada.style.display = 'none';
};

function clicou_tres() {
    corrida.style.backgroundColor = 'white';
    marcha.style.backgroundColor = 'white';
    revezamento.style.backgroundColor = '#FFD407';
    salto.style.backgroundColor = 'white';
    arremesso.style.backgroundColor = 'white';
    combinada.style.backgroundColor = 'white';

    art_corrida.style.display = 'none';
    art_marcha.style.display = 'none';
    art_revezamento.style.display = 'flex';
    art_salto.style.display = 'none';
    art_arremesso.style.display = 'none';
    art_combinada.style.display = 'none';
};

function clicou_quatro() {
    corrida.style.backgroundColor = 'white';
    marcha.style.backgroundColor = 'white';
    revezamento.style.backgroundColor = 'white';
    salto.style.backgroundColor = '#FFD407';
    arremesso.style.backgroundColor = 'white';
    combinada.style.backgroundColor = 'white';

    art_corrida.style.display = 'none';
    art_marcha.style.display = 'none';
    art_revezamento.style.display = 'none';
    art_salto.style.display = 'flex';
    art_arremesso.style.display = 'none';
    art_combinada.style.display = 'none';
};

function clicou_cinco() {
    corrida.style.backgroundColor = 'white';
    marcha.style.backgroundColor = 'white';
    revezamento.style.backgroundColor = 'white';
    salto.style.backgroundColor = 'white';
    arremesso.style.backgroundColor = '#FFD407';
    combinada.style.backgroundColor = 'white';

    art_corrida.style.display = 'none';
    art_marcha.style.display = 'none';
    art_revezamento.style.display = 'none';
    art_salto.style.display = 'none';
    art_arremesso.style.display = 'flex';
    art_combinada.style.display = 'none';
};

function clicou_seis() {
    corrida.style.backgroundColor = 'white';
    marcha.style.backgroundColor = 'white';
    revezamento.style.backgroundColor = 'white';
    salto.style.backgroundColor = 'white';
    arremesso.style.backgroundColor = 'white';
    combinada.style.backgroundColor = '#FFD407';

    art_corrida.style.display = 'none';
    art_marcha.style.display = 'none';
    art_revezamento.style.display = 'none';
    art_salto.style.display = 'none';
    art_arremesso.style.display = 'none';
    art_combinada.style.display = 'flex';
};
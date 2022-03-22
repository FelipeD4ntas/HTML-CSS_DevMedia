const cards = document.querySelectorAll('.cards');
const cont_cards = document.querySelectorAll('.cont-card');

cont_cards[0].addEventListener('mouseenter', entrou_um);
cont_cards[1].addEventListener('mouseenter', entrou_dois);
cont_cards[2].addEventListener('mouseenter', entrou_tres);
cont_cards[3].addEventListener('mouseenter', entrou_quatro);

cont_cards[0].addEventListener('mouseleave', saiu_um);
cont_cards[1].addEventListener('mouseleave', saiu_dois);
cont_cards[2].addEventListener('mouseleave', saiu_tres);
cont_cards[3].addEventListener('mouseleave', saiu_quatro);

// Funções para virar os cards da natação.
function entrou_um() {
    cards[0].style.transform = 'rotateY(180deg)';
}
function entrou_dois() {
    cards[1].style.transform = 'rotateY(180deg)';
}
function entrou_tres() {
    cards[2].style.transform = 'rotateY(180deg)';
}
function entrou_quatro() {
    cards[3].style.transform = 'rotateY(180deg)';
}

// Funções para voltar os cards da natação para posição normal.
function saiu_um() {
    cards[0].style.transform = 'rotateY(0deg)';
}
function saiu_dois() {
    cards[1].style.transform = 'rotateY(0deg)';
}
function saiu_tres() {
    cards[2].style.transform = 'rotateY(0deg)';
}
function saiu_quatro() {
    cards[3].style.transform = 'rotateY(0deg)';
}
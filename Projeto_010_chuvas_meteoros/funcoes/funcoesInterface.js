import {inverteMesDia, retornaIntensidade, retornaHemisferio} from './funcoesLogicas.js';

const imprimeListaChuva = (listaChuvas) => {
    console.log(`\nNOME DO METEORO             - INTENSIDADE - HEMISFÉRIO - PERÍODO`);
    listaChuvas.forEach(imprimeChuva);
}

const imprimeChuva = (chuva) => {
    const nome = chuva.nome.padEnd(27, ' ');

    let intensidade = retornaIntensidade(chuva.intensidade);
    intensidade = intensidade.padEnd(11, ' ');

    let hemisferio = retornaHemisferio(chuva.declinacao);
    hemisferio = hemisferio.padEnd(10, ' ');

    let dataInicio = inverteMesDia(chuva.inicio);

    let dataFim = inverteMesDia(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${dataInicio} à ${dataFim}`);
}

export default imprimeListaChuva;
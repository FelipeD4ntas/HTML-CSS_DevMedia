import chuvasDeMeteoros from './data/chuvas-de-meteoros.js'
import imprimeListaChuva from './funcoes/funcoesInterface.js'
import {verificaChuvaOcorrendo, verificaProximaChuva} from './funcoes/funcoesLogicas.js';

const dataAtual = new Date();

const chuvasVisiveis = chuvasDeMeteoros.filter((chuva) => verificaChuvaOcorrendo(chuva, dataAtual));

const proximaChuva = chuvasDeMeteoros.filter((chuva) => verificaProximaChuva(chuva, dataAtual));

console.log('Chuva de meteoros');

if (chuvasVisiveis.length > 0) {
    let msg = '\nEncontramos';
    msg += chuvasVisiveis.length == 1 ? '1 Chuva de meteoros' : `${chuvasVisiveis.length} Chuvas de meteoros`;
    console.log(msg);
    imprimeListaChuva(chuvasVisiveis);
} else {
    console.log('\n\nNenhuma chuva de meteoros passando no momento');
}

console.log('\nNão perca as próximas chuvas de meteoros:');
imprimeListaChuva(proximaChuva);


//operação ternária: permite incurta o código
//isso é o mesmo que o peração ternária
// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário Vip.');
// } else {
//     console.log('Usuário Normal');
// }

const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal.'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao);
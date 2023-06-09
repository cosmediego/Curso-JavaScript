//escopo lexixo
const nome = 'Cosme';

function falaNome() {
    console.log(nome);
}
function usaNome(params) {
    const nome = 'Augusto';
    falaNome();
}
console.log(usaNome);
//Closures: habilidade de acessar seu escopo lexixo
function retornaFuncao(nome) {
    return function () {
        return nome
    };
}

const funcao = retornaFuncao('Cosme');
const funcao2 = retornaFuncao('Augusto');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

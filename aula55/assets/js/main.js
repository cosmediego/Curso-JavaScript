//funções imediatas IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION
(function (idade, peso, altura) {
    const sobrenome = 'Augusto'

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Cosme'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(33, 79, 1.92);

// (function(){

// })();
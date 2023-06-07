//assim é um objeto
// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25
// };
// console.log(pessoa1.nome)

// //Método que cria objetos. lista de parametros
// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade };
// }
// //argumento é o valor passado para o parametro
// const pessoa1 = criaPessoa('Cosme', 'Diego', '32');
// const pessoa2 = criaPessoa('Larissa', 'Eller', '33');
// const pessoa3 = criaPessoa('Amanda', 'Silva', '28');

// console.log(pessoa1, pessoa2, pessoa3);


const pessoa1 = {
    nome: 'Cosme',
    sobrenome: 'Diego',
    idade: 32,

    //método fala. Necessário colocar vírgula no final
    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementoIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
pessoa1.incrementoIdade();
pessoa1.fala();
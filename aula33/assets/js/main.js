const pessoa = {
    nome: 'Cosme',
    sobrenome: 'Augusto',
    idade: 33,
    endereco: {
        rua: 'Av bRasil',
        numero: 30
    }
};
//atribuição via desestruturação
// const { nome = 'não consta', sobrenome } = pessoa;
// console.log(nome, sobrenome);

const {
    endereco: { rua: r = '12345', numero },
    endereco
} = pessoa;
console.log(numero, endereco);
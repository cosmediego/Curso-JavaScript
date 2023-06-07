//for in

const frutas = ['Pera', 'Maçã', 'Uva'];

const pessoa = {
    nome: 'Cosme',
    sobrenome: 'Augusto',
    idade: 33
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}

//FOR IN A ESTRUTURA É BEM RESUMIDA. ler os indices do array, ou chaves do objeto
// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }


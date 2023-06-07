const pessoa = {
    nome: 'Cosme',
    sobrenome: 'Augusto'
};
//for clássico geralmente como ARRAY u Strings///
//for in retorno indice ou chaves strings, arrays, objetos
//for of só vai funcionar com iteráveis array strings não funciona com objetos
for (let i in pessoa) {
    console.log(pessoa[i]);
}

//for OF. No caso do OF vem o valor e não o índice
// const nome = 'Cosme Diego';

// //lembra o for in mais ao inves de retornar indice retorna o valor
// for (let i of nome) {
//     console.log(i);
// }

// const nome = ['Cosme', 'Diego', 2, 3, 'Silva', 8];
// //lembra o for in mais ao inves de retornar indice retorna o valor
// for (let i of nome) {
//     console.log(i);
// }

// const nome = ['Cosme', 'Diego', 2, 3, 'Silva', 8];

// nome.forEach(function (valor, indice, array) {
//     console.log(valor, indice, array);
// });

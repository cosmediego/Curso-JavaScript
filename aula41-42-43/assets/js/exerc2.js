// //
// function paisagem(altura, largura) {
//     if (altura > largura) {
//         return console.log('Imagem é retrato.');
//     } else {
//         return console.log('Imagem é paisagem.');
//     }
// }
// console.log(paisagem(5, 10));

// function paisagem(altura, largura) {
//     if (altura > largura);
//     return altura > largura ? console.log('Imagem é retrato.') : console.log('Imagem é paisagem.');
// }
// console.log(paisagem(5, 10));

// function paisagem(altura, largura) {
//     if (altura > largura);
//     return altura > largura ? false : true;
// }
// console.log(paisagem(5, 10));

// function paisagem(altura, largura) {
//     return altura > largura;
// }
// console.log(paisagem(5, 10));

const paisagem = (largura, altura) =>
    largura > altura;
console.log(paisagem(20, 10));
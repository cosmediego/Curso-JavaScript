// document.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'red';
// });

// function criaPessoa(nome, sobrenome) {
//     return { nome: nome, sobrenome: sobrenome };
// }
// const p1 = criaPessoa('Luiz', 'Otavio');
// const p2 = {
//     nome: 'João',
//     sobrenome: 'Otávio'
// }

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const olaMundo = falaFrase('Olá');
// console.log(olaMundo('Mundo'));

// function duplica(n) {
//     return n * 2;
// }

// function triplica(n) {
//     return n * 3;
// }
// function quadriplica(n) {
//     return n * 4;
// }
// console.log(duplica(2));
// console.log(triplica(2));
// console.log(quadriplica(2));


function criaMultplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}
const duplica = criaMultplicador(2);
const triplica = criaMultplicador(3);
const quadriplica = criaMultplicador(4);

console.log(duplica(3));
console.log(triplica(5));
console.log(quadriplica(10));


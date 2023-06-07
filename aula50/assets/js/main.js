// const conta = function (operador, acumulardor, ...numeros) {
//     // for (let numero of numeros) {
//     //     if (operador === '+') acumulardor += numero;
//     //     if (operador === '-') acumulardor += numero;
//     //     if (operador === '/') acumulardor += numero;
//     //     if (operador === '*') acumulardor += numero;
//     // }
//     // console.log(acumulardor);
//     console.log(arguments);
// }


// conta('/', 200, 2, 3, 4, 5, 6);

function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

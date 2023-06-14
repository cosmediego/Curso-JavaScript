//Filper = sempre vai retorna um array com a esma quantidade de elementos ou menos

//retorne números maiores que 10
// const numeros = [5, 50, 40, 80, 1, 2, 3, 4, 77, 88, 99, 45];

// 

// function callbackFilter(valor) {
//     // if (valor > 10) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     return valor > 10;//mesma coisa do de cima
// }

//mesma coisa da de cima de outra forma
const numeros = [5, 50, 40, 80, 1, 2, 3, 4, 77, 88, 99, 45];

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

// //mesma forma da de cima
// const numerosFiltrados = numeros.filter(valor => valor > 10);

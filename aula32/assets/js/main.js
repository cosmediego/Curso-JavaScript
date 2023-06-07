// //atribuição via desustruturação
// let a = 'A';
// let b = 'B';
// let c = 'C';

// const letras = ['B', 'C', 'A'];

// [a, b, c] = letras;//LADO ESQUERDO É A DESUSTRUTURAÇÃO MODIFICANDO OS VALORES DAS VATIÁVEIS


// console.log(a, b, c);
//               0       1    2      3     4    5      6     7    8 
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// const [um, , tres] = numeros;// como arrays são indexados pego a possição dentro do array e depois pego restoutilizando essa sintxe
// //rest operator

// console.log(um, tres);
//no caso abaixo cada array é um indice . quando quero acessar um item de um array fala primeiro o indice do array deóis o indice de dentro.
//                   0          1          2
//                0  1  2    0  1  2    0  1  2 
// const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// //exemplo do que foi explicado na linha 18
// console.log(numeros[1][2]);


const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
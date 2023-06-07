//dados primitivos: = number, string, undefined, null, boolean, symbol
const nome = 'Cosme';
const nome1 = "Cosme";
const nome2 = `Cosme`;
const num1 = 10;
const num2 = 10.52;
let nomeAluno; //não aponta pra nenhum local da memória, variável não iniciada
let sobrenomeAluno = null;//não aponta pra nenhum local da memória
const aprovado = true; //Booleantrue ou false

//console.log(typeof aprovado, aprovado);

const a = [1, 2];
const b = a;
console.log(a, b);

aula10 copyb.push(3);
console.log(a, b);
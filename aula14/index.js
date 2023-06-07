//IEEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

//num1 = (num1 * 100) + (num2 * 100) / 100;

num1 = Number(num1.toFixed(2))
console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2);
//num1 = num1.toString()

//ver a representação binária aqui do número 1500
//console.log(num1.toString(2));


//arredonda número com a qtd de casas decimais que vc escolher
//console.log(num1.toFixed(2));

//metodo retorna true ou false no caso do número for inteiro
//console.log(Number.isInteger(num1));

//let temp = num1 * '5'
//se for NaN devolve verdadeiro
//console.log(Number.isNaN(temp))
//console.log(temp);




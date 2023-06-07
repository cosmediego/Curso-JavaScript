//verifica se é divisivel por 3, por 5 ou or 3 e 5
function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 !== 0 && numero % 5 !== 0) return numero;
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
}
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
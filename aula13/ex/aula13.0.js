let umaString = 'O rato roeu a roupa do rei de roma.';

//modos de concatenar
// console.log(umaString.concat(' em um lindo dia'));
// console.log(umaString + ' em um lindo dia');
// console.log(`${umaString} em um lindo dia`);

//onde a palavra começa
//console.log(umaString.indexOf('texto'));

//mesmo de cima de trás para frente
//console.log(umaString.lastIndexOf('m', 3));

//aceita espressão regulares
//console.log(umaString.search(/x/));

//substitui uma palavra por outra pode usar explessão regulares tbm
//console.log(umaString.replace(/r/g, '#'));

//tamanho da string
//console.log(umaString.length);

//seleciona parte da string
//negativo uso o tamanho menos a uantidade que vc tá pedindo
//console.log(umaString.slice(-5, umaString.length - 1));

//seleciona parte da string
//negativo uso o tamanho menos a uantidade que vc tá pedindo
//Digita bem mais que O SLICE
//console.log(umaString.substring(umaString.length - 5, umaString.length - 1));

//dividir uma string dentro de um array
//console.log(umaString.split(' ', 3));


console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());



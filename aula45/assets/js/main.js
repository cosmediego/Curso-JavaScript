// try {
//     console.log(naoExisto);
// } catch (error) {
//     console.log('naoExisto não existe.');
//     console.log(error);
// }

// function soma(x, y) {
//     if (
//         typeof x !== 'number' ||
//         typeof y !== 'number'
//     ) {
//         throw new Error('x e y precisam ser números');
//     }
//     return x + y;
// }
// try {
//     console.log(soma(10, 20));
//     console.log(soma('10', 20));
// } catch (error) {
//     console.log(error);
// }

// try {
//     console.log('Abrir um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei p arquivo');

// } catch (error) {//executado
//     console.log('');
// } finally { //sempre executado
//     console.log('Eu sempre sou excecutado');
// }

function retornaHora(data) {
    if (data && (data instanceof Date)) {
        throw TypeError('Esperando instância de data');
    }

    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const hora = retornaHora();
console.log(hora);

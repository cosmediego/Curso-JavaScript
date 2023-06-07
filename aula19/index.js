//valor primitivo e valor por referência
/**
 * Primitivos(valores imutáveis): String, Number, Undefined, null (bigint, symbol)
 * Valores copiados
 * 
 * Referência(mutável): array, object, function
 * Passados por referência: aponta para o mesmo lugar alocado na memória
 */

const a = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
};
const b = { ...a };

a.nome = 'João';
console.log(a);
console.log(b);


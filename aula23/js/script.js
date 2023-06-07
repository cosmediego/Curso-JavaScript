/**
 * VALORES AVALIADOS EM FALSO
 * false
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */
//console.log('Luiz' && NaN && 'Maria');


//AND
// function falaOi() {
//     return 'Oi'
// }
// const vaiExecutar = 'João';

// console.log(vaiExecutar && falaOi());

//tras o primeiro valor verdadeiro

const a = 0;
const c = null;
const b = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);
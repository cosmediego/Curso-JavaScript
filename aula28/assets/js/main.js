// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDia);
// console.log(data.toString());


//no javascript o mês começa do zero
const date = new Date(2019, 3);//a, m, d, h, M, s, ms
console.log('Dia', date.getDate());
console.log('Mês', date.getMonth());
console.log('Ano', date.getFullYear());
console.log('Hora', date.getHours());
console.log('Min', date.getMinutes());
console.log('Seg', date.getSeconds());
console.log('ms', date.getMilliseconds());
console.log('Dia semana', date.getDaY());

console.log(date.toString());
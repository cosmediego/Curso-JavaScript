const nome = 'Luiz Otávio Miranda';
const idade = 30
const peso = 84
const alturaEmCm = 1.80;
let imc = peso / (alturaEmCm * alturaEmCm);
let anoNascimento;
anoNascimento = 2023 - idade;
//console.log(nome, 'tem ' + idade + ' anos' + ' pesa ' + peso + ' kg' + ' tem ' + alturaEmCm + ' de altura e seu IMC é de ' + imc + ' ' + nome + ' nasceu em ' + anoNascimento);
//templetes string
console.log(`${nome} tem ${idade} anos pesa ${peso}  kg tem ${alturaEmCm} de altura e seu IMC é de ${imc} ${nome} nasceu em ${anoNascimento}`);
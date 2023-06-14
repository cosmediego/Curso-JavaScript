//método splice

const nomes = ['Cosme', 'Diego', 'Silva', 'Pontes', 'Augusto']

//nomes.splice(indice, delete, elemet1, elemet2, elemet3)
const removidos = nomes.splice(3, , 'Luiz')
console.log(nomes, removidos);
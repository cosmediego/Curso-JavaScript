const pessoas = [
    {id: 3, nome:'Cosme'},
    { id: 2, nome: 'Augusto' },
    { id: 1, nome: 'Silva' },
];

// const novaPessoas ={};
// for (const pessoa of pessoas) {
//     const {id} = pessoa;
//     novaPessoas[id] = {...pessoa};
// }


const novaPessoas =new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novaPessoas.set(id, { ...pessoa });
}
// for (const pessoas of novaPessoas.values()) {
//     console.log(pessoas);
// }

novaPessoas.delete(2);
console.log(novaPessoas);
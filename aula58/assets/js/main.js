function Pessoa(nome, sobrenome) {
    //atributos e métodos privados não funciona fora do escopo
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log('sou um metodo' + this.nome);
    };
}

const p1 = new Pessoa('Luiz', 'Otávio');

console.log(p1.metodo());
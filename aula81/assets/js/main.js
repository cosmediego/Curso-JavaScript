class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome =sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
    
    
}

//FUNÇÃO CONSTRUTORA
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function(){
    console.log(`${this.nome} está falando.`);
}

const p1 = new Pessoa('Cosme', 'Augusto');
const p2 = new Pessoa2('Cosme', 'Augusto');



console.log(p1.falar());
console.log(p2.falar());

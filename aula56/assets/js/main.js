//funções fabrica(factory function)

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        },

        fala(assunto = 'falando sobre nada') {
            return `${this.nome} está ${assunto}.`;//this se refere ao objeto que está chamado ele no momento
        },
        altura,
        peso,

        //Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('cosme', 'diego', 1.80, 80);
const p2 = criaPessoa('joão', 'diego', 1.9, 80);

const p3 = criaPessoa('vitor', 'diego', 1.850, 80);

console.log(p3.imc);
console.log(p1.imc);
console.log(p2.imc);




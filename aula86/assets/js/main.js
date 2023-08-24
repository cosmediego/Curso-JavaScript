function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) =>{
        if (typeof msg !== 'string') reject(new Error('ERROR'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });    
}

esperaAi('Conexão com BD', rand(1,3))
    .then(resposta =>{
        console.log(resposta);
        return esperaAi('Buscando dados da Base', rand(1, 3));
    }).then(resposta => {
        console.log(resposta);
        return esperaAi(2222, rand(1, 3));
    }).then(resposta =>{
        console.log(resposta);
    }).then(()=>{
        console.log('Exibe dados na tela');//será executado quando resolver a promisse;
    }).catch(e =>{
        console.log('ERRO:', e);
    });
// esperaAi('Frase2', rand(1,3));
// esperaAi('Frase3', rand(1,3));

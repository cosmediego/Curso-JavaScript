function retornaHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoInterval() {
    console.log(retornaHora());
}

const timer = setInterval(function () {
    console.log(retornaHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 5000);

setTimeout(function () {
    console.log('Olá mundo');
}, 3000);

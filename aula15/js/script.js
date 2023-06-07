let numero = prompt('Digite Seu número:');
numero = Number(numero);

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número é: ${numero}</p>`;
texto.innerHTML += `<p>Raiz quadrada é: ${numero ** 0.5} </p>`;
texto.innerHTML += `<p>É inteiro? ${Number.isInteger(numero)} </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)} </p>`;
texto.innerHTML += `<p>Arredondo para baixo ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arredondo para cima ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)} </p>`;

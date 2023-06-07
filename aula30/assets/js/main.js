// const h1 = document.querySelector('.container h1');
// const data = new Date();


// function getDiaSemanaTexto(diaSemana) {
//     let diaSemanTexto;
//     switch (diaSemana) {
//         case 0:
//             diaSemanTexto = 'Domingo';
//             return diaSemanTexto;
//         case 1:
//             diaSemanTexto = 'Segunda-feira';
//             return diaSemanTexto;//sempre que encontra a palavra return acaba a função
//         case 2:
//             diaSemanTexto = 'Terça-feira';
//             return diaSemanTexto;
//         case 3:
//             diaSemanTexto = 'Qurta-feira';
//             return diaSemanTexto;
//         case 4:
//             diaSemanTexto = 'Quinta-feira';
//             return diaSemanTexto;
//         case 5:
//             diaSemanTexto = 'Sexta-feira';
//             return diaSemanTexto;
//         case 6:
//             diaSemanTexto = 'Sábado';
//             return diaSemanTexto;
//         default:
//             diaSemanTexto = '';
//             return diaSemanTexto;
//     }
// }

// function getMes(numeroMes) {
//     let nomeMes;
//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'janeiro';
//             return nomeMes;
//         case 1:
//             nomeMes = 'fevereiro';
//             return nomeMes;
//         case 2:
//             nomeMes = 'março';
//             return nomeMes;
//         case 3:
//             nomeMes = 'abril';
//             return nomeMes;
//         case 4:
//             nomeMes = 'maior';
//             return nomeMes;
//         case 5:
//             nomeMes = 'junho';
//             return nomeMes;
//         case 6:
//             nomeMes = 'julho';
//             return nomeMes;
//         case 7:
//             nomeMes = 'agosto';
//             return nomeMes;
//         case 8:
//             nomeMes = 'setembro';
//             return nomeMes;
//         case 9:
//             nomeMes = 'outubro';
//             return nomeMes;
//         case 10:
//             nomeMes = 'novembro';
//             return nomeMes;
//         case 11:
//             nomeMes = 'dezembro';
//             return nomeMes;
//     }
// }

// function criaDate(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getMes(numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//         ` de ${data.getFullYear()} ${data.getHours()}: ${data.getMinutes()}`
//     );
// }
// h1.innerHTML = criaDate(data);

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// };
// h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);


const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full', timeStyle: 'short' });

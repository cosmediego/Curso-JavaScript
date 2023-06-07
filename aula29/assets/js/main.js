function getDiaSemanaTexto(diaSemana) {
    let diaSemanTexto;
    switch (diaSemana) {
        case 0:
            diaSemanTexto = 'Domingo';
            return diaSemanTexto;
        case 1:
            diaSemanTexto = 'Segunda';
            return diaSemanTexto;//sempre que encontra a palavra return acaba a função 
        case 2:
            diaSemanTexto = 'Terça';
            return diaSemanTexto;
        case 3:
            diaSemanTexto = 'Qurta';
            return diaSemanTexto;
        case 4:
            diaSemanTexto = 'Quinta';
            return diaSemanTexto;
        case 5:
            diaSemanTexto = 'Sexta';
            return diaSemanTexto;
        case 6:
            diaSemanTexto = 'Sábado';
            return diaSemanTexto;
        default:
            diaSemanTexto = '';
            return diaSemanTexto;
    }
}

const data = new Date();
const diaSemana = data.getDay();

const diaSemanTexto = getDiaSemanaTexto(diaSemana);


console.log(`Dia da semana é ${diaSemanTexto}`);
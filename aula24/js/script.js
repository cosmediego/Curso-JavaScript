/**
 * IF PODE USAR SOZINHO
 * SEMPRE QUE UTILIZO A PALAVRA ELSE, PRECISO DE UM IF ANTES
 * POSSO TER VÁRIOS ELSE IF
 * POSSO TER ELSE NA MESMA CHECAGEM
 */

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia.');
} else if (hora > 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}
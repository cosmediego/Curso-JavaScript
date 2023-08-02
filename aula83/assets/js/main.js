class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    //método de instância
    aumentaVolume(){
        this.volume += 2;
    }

 //método de instância
    diminuiVolume() {
        this.volume -= 2;
    }

    // //método  stático
    // static trocaPilha(){
    //     console.log('OK, vou trocar');
    // }
    //método  stático
    static soma(x, y) {
        return x+y;
    }
}
function teste() {
    console.log('Este é meu teste');
}

const controle = new ControleRemoto('LG');


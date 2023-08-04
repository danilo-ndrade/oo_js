class Veiculo {

    constructor(cor, assentos, rodas, estaLigado) {
        this.cor = cor;
        this.assentos = assentos;
        this.rodas = rodas;
        this.estaLigado = estaLigado;
    }

    giraChave() {
        this.estaLigado = !this.estaLigado;
    }

}

class Carro extends Veiculo {
    constructor(modelo, cor, assentos, rodas, estaLigado){
        super(cor, assentos, rodas, estaLigado);
        this.modelo = modelo;
    }

    giraChave() {
        super.giraChave();
        if(this.estaLigado === false) {
            console.log('O carro está desligado.');
        }else {
            console.log('O carro está ligado.')
        }
    }
}

class Moto extends Veiculo {
    constructor(modelo, cor, assentos, rodas, estaLigado){
        super(cor, assentos, rodas, estaLigado);
        this.modelo = modelo;
    }

    giraChave() {
        super.giraChave();
        if(this.estaLigado === false) {
            console.log('A moto está desligada.');
        }else {
            console.log('A moto está ligada.')
        }
    }
}

const carro1 = new Carro("Fusca", "Azul", 4, 4, false);
const carro2 = new Carro("Pajero", "Verde", 4, 4, true);
const moto1 = new Moto("Fazer", "Preto", 2, 2, false);



console.log(carro2.estaLigado);
carro2.giraChave();
console.log(carro2.estaLigado);
console.log(moto1.cor);






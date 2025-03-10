

    class vehicle {
        constructor(tipo, marca, cor, velocidade, passageiros) {
            this.tipo = tipo;
            this.marca = marca;
            this.cor = cor;
            this.velocidade = velocidade;
            this.passageiros = passageiros;
        }
        acelerar = function () {
            this.velocidade += 10;
            console.log(this.velocidade)
        }
        freiar = () => {
            if (this.velocidade > 0) {
                this.velocidade -= 10;
                console.log(this.velocidade)
            }
        }
    }

function Classes() {
    const criacao = () => {
        const carro = new vehicle('sedan', 'Mercedes', 'preto', 0, 5)
        const outro_carro = new vehicle('wagon', 'Volkswagen', 'azul petroleo', 0, 5)
        console.log(carro);
        console.log(outro_carro);
        outro_carro.acelerar();
        carro.acelerar();
        carro.acelerar();
        carro.freiar();
        carro.freiar();
        outro_carro.freiar();

    }
    criacao();
}


function POO (){
    class Carro extends vehicle,
    class Aviao extends vehicle
}
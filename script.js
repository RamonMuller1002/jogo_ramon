// Pegar elemento canvas pelo id
// Inicializar o canvas
const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
let game_Over = false;
let pontuacao = document.getElementById('pontuacao').innerHTML

class Entidade {
    #gravidade;
    constructor(x, y, largura, altura) {
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
        this.#gravidade = 0.5;
    }

    desenharEntidade = function (ctx, cor) {
        ctx.fillStyle = cor;
        ctx.fillRect(this.x, this.y, this.largura, this.altura);
    };

    // 'Getter' Padronizado pela convenção do JS
    get gravidade() {
        return this.#gravidade;
    }
}

class Personagem extends Entidade {
    #pulando;
    #velocidadeY;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#pulando = false;
        this.#velocidadeY = 0;
        this.img_src = 'static/Dino.png';
        this.imagem = new Image();
        this.imagem.src = this.img_src;
    }
    desenharEntidade = function (ctx) {
        ctx.drawImage(this.imagem, this.x, this.y, this.largura, this.altura);
    };
    
    saltar = function () {
        this.#velocidadeY = 17;
        this.#pulando = true;
    };

    get pulando() {
        return this.#pulando;
    }

    atualizarPersonagem = () => {
        /** Etapa do pulo:
         1: Capturar evento
         2: Aumentar velocidade y
         3: Mexer na função de atualizar o personagem*/

        if (this.#pulando === true) {
            this.#velocidadeY -= this.gravidade;
            this.y -= this.#velocidadeY;
            if (this.y >= canvas.height - 50) {
                this.#velocidadeY = 0;
                this.#pulando = false;
                this.y = canvas.height - 50;
            }
        }
    };

    colisao = (obstaculo) => {
            if (this.x < obstaculo.x + obstaculo.largura &&
                this.x + this.largura > obstaculo.x &&
                this.y < obstaculo.y + obstaculo.altura &&
                this.y + this.altura > obstaculo.y) {
                gameOver();
            }
        };
    };

class Obstaculo extends Entidade {
    #velocidadeX;
    #time_distancia;
    #proximo_obstaculo
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#velocidadeX = 5;
        this.#time_distancia = Math.floor((Math.random() * 100) + 100)
        console.log(this.#time_distancia)
        this.#proximo_obstaculo = false
        this.img_src = 'static/Arvore.png';
        this.imagem = new Image();
        this.imagem.src = this.img_src;
    }

    atualizarObstaculo = () => {
        this.x -= this.#velocidadeX;
        if (this.#time_distancia <= 0 && this.#proximo_obstaculo == false){
            let nova_altura = (Math.random() * 50) + 100
            let novoY = canvas.height - nova_altura 
            obstaculos.push(new Obstaculo(canvas.width-100,novoY,50,nova_altura))
            this.#velocidadeX += 0.2
            this.#proximo_obstaculo = true
        } else{
            this.#time_distancia--
        }
        if (this.x <= 0-this.largura && this.#proximo_obstaculo == true){
            //deleta o elemento de um obstaculo no array
            obstaculos.shift()
        }
    };  

    desenharEntidade = function (ctx) {
        ctx.drawImage(this.imagem, this.x, this.y, this.largura, this.altura);
    };
}

document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false) {
        personagem.saltar();
    }
});

document.addEventListener('click', (e) => {
    if (game_Over == true) {
        location.reload();
    }
});


tempoDeInicio = Date.now();

function printPontuacao(pontuacao){
    if (tempoDeInicio) {
        pontuacao = Math.floor((Date.now() - tempoDeInicio) / 1000);
        document.getElementById('pontuacao').innerHTML = pontuacao;
    }
}

function gameOver() {
    game_Over = true;
    personagem.velocidadeY = 0;

    ctx.fillStyle = 'RED';
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) - 50, 400, 100);

    ctx.fillStyle = 'black';
    ctx.font = "50px Arial";
    ctx.fillText("Game Over", (canvas.width / 2) - 150, canvas.height / 2);

}


const personagem = new Personagem(50, canvas.height - 50, 50, 50);
const obtaculo = new Obstaculo(canvas.width - 100, canvas.height - 50, 50 ,150);
const obstaculos = []
obstaculos.push(new Obstaculo(canvas.width-100,canvas.height-100,50,100))

/* Criar função loop /enviar função loop. que repetirá 60 vezes por segundo (60Hz) */
const loop = () => {
    if (game_Over == false) {
        /*Apagar a tela anterior */
        ctx.clearRect(0, 0, canvas.width, canvas.height)

    
        //Desenhar novamente
        personagem.desenharEntidade(ctx, 'black');
        obstaculos.forEach((obstaculo) =>{
            obstaculo.desenharEntidade(ctx, 'red');
            personagem.colisao(obstaculo);
            obstaculo.atualizarObstaculo();
        })

        printPontuacao(pontuacao);
        //Atualizar posições 
        personagem.atualizarPersonagem();

        //Chamar loop denovo 
        requestAnimationFrame(loop)
    }
}
loop();
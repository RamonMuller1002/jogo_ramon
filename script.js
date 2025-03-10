//Pegar elemento canvas pelo id
//inicializar o canvas
const canvas = document.getElementById('jogo2D');
const ctx = canvas.getContext('2d');
const gravidade = 0.5;
let game_Over = false;

const personagem = {
    x: 100,
    y: canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidadeY: 0,
    pulando: false
}

const obstaculo = {
    x: canvas.width - 50,
    y: canvas.height - 100,
    largura: 50,
    altura: 100,
    velocidadeX: 5,
}

document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.y == (canvas.height - 50)) {
        personagem.velocidadeY = 17
        personagem.pulando = true
    }
})

document.addEventListener('click', (e) => {
    if(game_Over == true){
        location.reload();
    }
})

const desenharPersonagem = () => {
    ctx.fillStyle = 'white'
    ctx.fillRect(personagem.x, personagem.y, personagem.largura, personagem.altura);
}

const desenhaObstaculo = () => {
    ctx.fillStyle = "Red"
    ctx.fillRect(obstaculo.x, obstaculo.y, obstaculo.largura, obstaculo.altura)
}

const atulalizaObstaculo = () => {
    obstaculo.x -= obstaculo.velocidadeX
    if (obstaculo.x <= - obstaculo.largura) {
        obstaculo.x = canvas.width
        obstaculo.velocidadeX += 0.2
        let novaAltura = (Math.random() * 50) + 100
        obstaculo.altura += novaAltura
        obstaculo.y = canvas.height - novaAltura
    }
}

const atualizarPersonagem = () => {
    /**Etapa do pulo:
    1: Capturar evento
    2: Aumentar velocidade y
    3: Mexer na função de atualizar o personagem*/

    if (personagem.pulando === true) {
        personagem.velocidadeY -= gravidade;
        personagem.y -= personagem.velocidadeY;
        if (personagem.y >= (canvas.height - 50)) {
            personagem.velocidadeY = 0
            personagem.pulando = false
            personagem.y = (canvas.height - 50)
        }
    }
}
function gameOver() {
    game_Over = true

    personagem.velocidadeY = 0
    obstaculo.velocidadeX = 0
    
    ctx.fillStyle = 'RED'
    ctx.fillRect((canvas.width / 2) - 200, (canvas.height / 2) -50 , 400 , 100)

    ctx.fillStyle = 'black'
    ctx.font = "50px Arial"
    ctx.fillText("Game Over",(canvas.width / 2) - 150, canvas.height / 2)
    
}

const colisao = () => {
    if (personagem.x < obstaculo.x + obstaculo.largura && personagem.x + personagem.largura > obstaculo.x &&
        personagem.y < obstaculo.y + obstaculo.altura && personagem.y + personagem.altura > obstaculo.y) {
        gameOver();
    }
}

/*Criar função loop /enviar função loop. querepetirá 60 vezes por segundo
(60Hz) */
const loop = () => {
    if (game_Over == false) {
        /*Apagar a tela anterior */
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        /*Desenhar novamente */
        desenharPersonagem();
        desenhaObstaculo();

        colisao();
        /*Atualizar posições */
        atualizarPersonagem();
        atulalizaObstaculo();

        /*Chamar loop denovo */
        requestAnimationFrame(loop)
    }
}
loop();
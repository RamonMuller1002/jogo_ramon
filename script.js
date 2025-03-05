//Pegar elemento canvas pelo id
//inicializar o canvas
const canvas = document.getElementById('jogo2D');
const ctx =  canvas.getContext('2d');
const gravidade = 0.5;

const personagem = {
    x: 100,
    y: canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidadeY: 0,
    pulando: false
}

document.addEventListener('keypress', (e) =>{
    if(e.code == 'Space' && personagem.y == (canvas.height - 50)) {
            console.log("Clicou para pular");
            personagem.velocidadeY = 15
            personagem.pulando = true
    }
})


const desenharPersonagem = () =>{
    ctx.fillStyle = 'white'
    ctx.fillRect( personagem.x, personagem.y, personagem.largura, personagem.altura);
}


const atualizarPersonagem = () => {
    /**Etapa do pulo:
    1: Capturar evento
    2: Aumentar velocidade y
    3: Mexer na função de atualizar o personagem*/
    
    if(personagem.pulando === true){        
        personagem.velocidadeY -= gravidade;
        personagem.y -= personagem.velocidadeY;
        if(personagem.y >= (canvas.height - 50)){
            personagem.velocidadeY = 0
            personagem.pulando = false
            personagem.y = (canvas.height - 50)
        }
    }
}

/*enviar função loop. querepetirá 60 vezes por segundo
(60Hz)*/

/**Criar função loop */
const loop = () => {
    /*Apagar a tela anterior */
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    /*Desenhar novamente */
    desenharPersonagem();

    /*Atualizar posições */
    atualizarPersonagem();
    
    /*Chamar loop denovo */
    requestAnimationFrame(loop)
}
loop();
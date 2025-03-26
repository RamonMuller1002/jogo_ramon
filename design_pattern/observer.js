class Loja{
    constructor (){
        this.assinantes = []
    }
    assinar = (usuario) => {
        this.assinantes.push(usuario)
    }
    cancelar = () =>{
        //remover usuario da lista
    }

    notificar = (novaMSG) =>{
        this.assinantes.forEach(assinantes => assinantes.update(novaMSG))
    }
}


class Pessoa {
    constructor(nome){
        this.nome = nome;
    }
    update = (novaMSG) => {
        console.log(`${this.nome} foi notificado com ${novaMSG}`)
    }
}


const democrata = new Loja();
const pessoa = new Pessoa('Ramon');
const pessoa2 = new Pessoa('Cecelia');
const pessoa3 = new Pessoa('Eneias');

democrata.assinar(pessoa)
democrata.assinar(pessoa3)
democrata.notificar('Seja bem vindo a Democrata')


democrata.assinar(pessoa2)
democrata.notificar('Seja bem vindo, mesmo com atraso')
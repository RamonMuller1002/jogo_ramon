class Hamburguer{
    constructor (pao, carne, queijo, salada, molho){
        this.pao = pao;
        this.carne = carne;
        this.queijo = queijo;
        this.salada = salada;
        this.molho = molho;
    }


    getDescricao = () => {
        return `Hamburguer com pão ${this.pao}, carne ${this.carne}, queijo ${this.queijo}, 
     ${this.salada? 'com salada' : 'sem salada'}, e molho ${this.molho}`;
    }
}

const hamburguer_de_siri = new Hamburguer ('Brioche', 'carangeuijo' , 'mussarela' , false, 'maionese verde caseira' )

console.log(hamburguer_de_siri.getDescricao())


class BuilderBurguer{
    constructor(){
        this.pao = 'tradicional';
        this.carne = 'bovina';
        this.queijo = 'prato';
        this.salada = true;
        this.molho = 'ketchup';
    }

    setPao(pao){
        this.pao = pao;
        return this;
    }
    setCarne(carne){
        this.carne = carne;
        return this;
    }
    setQueijo(queijo){
        this.queijo = queijo;
        return this;
    }
    setSalada(){
        this.salada = !this.salada;
        return this;
    }setMolho(molho){
        this.molho = molho;
        return this;
    }

    getBuilderBurger(){
        return `Hamburguer com pão ${this.pao}, carne ${this.carne}, queijo ${this.queijo}, 
     ${this.salada? 'com salada' : 'sem salada'}, e molho ${this.molho}`
    }
}

const burgao = new BuilderBurguer()
console.log(burgao.getBuilderBurger())

burgao.setPao('francês')
burgao.setMolho('barbecue')
burgao.setCarne('frango')
burgao.setSalada()
burgao.setQueijo('Mozzarela Italiana')

console.log(burgao.getBuilderBurger())
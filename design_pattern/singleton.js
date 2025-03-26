class Database {
    constructor (){
        /*Agora vem o padrão Singleton*/
        if(!Database.instance){     //Se não existir uma instancia
            Database.instance = this   //Criar instanca
        }
        return Database.instance    //Se existir, retorna a tal
    }
}


const db1 = new Database()
const db2 = new Database()

console.log(db1 === db2)



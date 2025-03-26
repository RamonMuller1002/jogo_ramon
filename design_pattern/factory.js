class Notificacao {
    enviarNotif(mensagem){
        console.log(mensagem)   //Enviar notificacao
    }
}

class NotificacaoSMS extends Notificacao {
    enviarNotif(mensagem){
        console.log(`mensagem via SMS ${mensagem}`)   //Enviar notificacao via SMS
    }
}

class NotificacaoEMAIL extends Notificacao {
    enviarNotif(mensagem){
        console.log(`mensagem via EMAIL ${mensagem}`)   //Enviar notificacao via EMAIL
    }
}


class FactoryNotificacao {
    static criarNotificacao(tipo){
        switch (tipo){
            case 'sms' : 
                return new NotificacaoSMS
            case 'email':
                return new NotificacaoEMAIL
            default:
                throw Error('Tipo desconhecido')
        }
    }
}


//Normalmente usado
const notif = new NotificacaoEMAIL()
notif.enviarNotif('Você ganhou US$10.000,00 para usar em BET')

//Método Factory de instandcia
const notif2 = FactoryNotificacao.criarNotificacao('email').enviarNotif('Você ganhou US$1.000,00 para usar em BET')
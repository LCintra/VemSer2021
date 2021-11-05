const assarBolo = () => {
    return new Promise((resolve, reject) => {
        // imaginem um monte de código aqui para assar o bolo...

        let boloAssado = false;

        if(boloAssado)
            resolve('O bolo foi assado.');
        else
            reject('Algo de errado ocorreu na hora de assar o bolo.');
    });
}


assarBolo().then((msg) => {
    console.log("MSG da função assarBolo: " + msg);
}).catch((error) => {
    console.log('Mensagem de erro => ', error);
});
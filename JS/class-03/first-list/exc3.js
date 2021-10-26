function exc3(n1,n2,callBack){
    if( isNaN(parseFloat(n1)) || isNaN(parseFloat(n2)) ){
        callBack()
        return
    }
    console.log(n1+n2) 
}

function alertaErro(){
    console.log('Algum número digitado foi inválido')
}

exc3(4,12,alertaErro)


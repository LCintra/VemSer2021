let option
do{
    option = prompt('1 - Continuar perguntando \n 2 - Parar de perguntar')
    if(option != 1 && option != 2){
        alert('Erro, digite um número válido')
    }
} while(option != 2)
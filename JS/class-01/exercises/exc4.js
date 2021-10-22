// Solicitando os números que virão em string
let n1 =  prompt('Digite o primeiro número')
let n2 = prompt('Digite o segundo número')

// Criando variáveis para armazenar os números convertidos para float

let convertedN1 = parseFloat(n1)
let convertedN2 = parseFloat(n2)

// Fazendo as verificações de número
if (convertedN1.toString() !== n1 || convertedN2.toString() !== n2){
    alert('Número Inválido')
} else { //caso esteja tudo certo prossiga
    // Solicitando o operador
    let operator = prompt('Digite o operador')

    // Verificações do operador

    switch(operator){
        case '+':
            alert(convertedN1+convertedN2)
            break
        case '-':
            alert(convertedN1-convertedN2)
            break
        case '*':
            alert(convertedN1*convertedN2)
            break
        case '/':
            if(convertedN2 === 0){
                alert('Não se faz divisão por 0')
            } else {
                alert(convertedN1/convertedN2)
            }
            break
        default:
            alert('Operador inválido')
    }
}






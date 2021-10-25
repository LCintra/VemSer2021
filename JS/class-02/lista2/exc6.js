let soma = 0
let i = 0
do{
    soma += parseFloat(prompt(`Digite um número`))

    i++
} while(i != 5)

console.log(`A soma dos números é ${soma}`)
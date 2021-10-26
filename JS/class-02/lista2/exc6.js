let soma = 0
let i = 0
let num
let invalidNumber = false
do{
    num = parseFloat(prompt(`Digite um número`))
    if(isNaN(num)){
        alert('Não foi inserido um número válido')
        invalidNumber = true
        break
    }
    soma += num
    i++
} while(i != 5)

if(!invalidNumber){
    console.log(`A soma dos números é ${soma}`)
}

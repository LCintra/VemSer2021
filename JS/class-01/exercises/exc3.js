let answerIsFriday = prompt('Hoje é sexta-feira?')
answerIsFriday = answerIsFriday.toLowerCase()
let isFriday

if(answerIsFriday === 'sim'){
    isFriday = true
} else if(answerIsFriday === 'não') {
    isFriday = false
}

alert(`O valor de isFriday é ${isFriday}`)

let isTwoGreaterThanFour = (2>4)
alert(`O valor de isTwoGreaterThanFour é ${isTwoGreaterThanFour}`)

answerIsValueEmpty = prompt('Insira um texto')
if(answerIsValueEmpty === null || answerIsValueEmpty === undefined || answerIsValueEmpty === ''){
    alert('Valor Inválido')
} else {
    alert('Valor Válido')
}
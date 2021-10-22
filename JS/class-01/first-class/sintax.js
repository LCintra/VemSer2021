//comentário

/*
comentário
*/

//variáveis
var customerName = "Júnior" // string

//var sofre o que chamamos de hoisting

obj = {}
obj2 = {}

console.log(obj == obj2)

var gato = { name: 'Neguinha' }

var outroGato = gato //quando você atribui um objeto a uma variável, você não está só passando o valor mas ele realmente se torna o mesmo objeto por que é passado a referência

outroGato.name = "Chimbinha"

console.log(gato.name)

//mas um array também é um objeto, então esse comportamento em array também é observado

array1 = [1,2,3]

array2 = array1

array2.pop()

console.log(array1)

alert('Olá')

confirm('Confirma?')

prompt('Digite algo')
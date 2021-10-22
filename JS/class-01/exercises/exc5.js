//Pegando as notas
grade1 = prompt('Insira a primeira nota')
grade2 = prompt('Insira a segunda nota')
grade3 = prompt('Insira a terceira nota')

//Convertendo as notas para float
let convertedGrade1 = parseFloat(grade1)
let convertedGrade2 = parseFloat(grade2)
let convertedGrade3 = parseFloat(grade3)

//Fazendo as verificações das notas -> se é um número e se não é negativo
if (convertedGrade1.toString() !== grade1 || convertedGrade2.toString() !== grade2 || convertedGrade3.toString() !== grade3 || convertedGrade1 < 0 || convertedGrade2 < 0 || convertedGrade3 < 0){
    alert('Nota inserida inválida')
} else  { //Caso esteja tudo certo, prosseguir
    // cria uma variável e armazena a média
    let media = (convertedGrade1 + convertedGrade2 + convertedGrade3)/3

    //faz as verificações das medias
    if(media<5){
        alert(`Sua média foi ${media}. Média menor que 5, você está reprovado`)
    } else if (media <= 7){
        alert(`Sua média foi ${media}. Média entre 5 e 7, você está de recuperação`)
    } else if (media > 7){
        alert(`Sua média foi ${media}. Parabéns! Você foi aprovado.`)
    }
}




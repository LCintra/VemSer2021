/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 


let lista = []

const adicionaAluno = aluno => lista.push(aluno)

adicionaAluno({nome:"Lucas", idade: 19})
adicionaAluno({nome:"Carlos",idade:18})
adicionaAluno({nome:"João",idade: 27})
adicionaAluno({nome:"Amanda",idade: 32})
adicionaAluno({nome:"Maria",idade: 31})
console.log(lista)


const localizaAluno = (nomeASerBuscado) => lista.find(aluno => aluno.nome === nomeASerBuscado)
console.log(localizaAluno('João'))


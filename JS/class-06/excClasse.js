/* 
    Temos uma petshop, então precisamos:
    - ter os nossos pets (class Pet);
    - vão ter, nome, raça, idade;
    - nossos pets vão poder latirOuMiar() // 'oi meu nome é xxx e minha raça é xxx e idade é xxx';
*/
function isPresent(name){
    if(typeof name != 'undefined' && name != ''){
        return true
    } else {
        return false
    }
}

class Pet{
    nome = 'Não informado';
    raca = 'Não informada';
    idade = 0
    constructor(nome,raca,idade){
        this.nome = isPresent(nome) ? nome : this.nome;
        this.raca = isPresent(raca) ? raca : this.raca;
        this.idade = isPresent(idade) ? idade : this.idade;
    }

    latirOuMiar(){
        console.log(`Oi meu nome é ${this.nome}, minha raça é ${this.raca} e idade é ${this.idade}`)
    }
}

let gato = new Pet('João','Pinscher',8)
let teste = new Pet()
console.log(gato)

gato.latirOuMiar()
teste.latirOuMiar()
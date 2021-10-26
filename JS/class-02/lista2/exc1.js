let salary = 1000
let percentual = 0.015

for(let i = 2017; i<=2021;i++){
    if(i>=2018){
        percentual *= 2
    }
    salary += percentual*salary
    console.log(`Com o aumento de ${i} o salário ficou R$${salary}, percentual de ${percentual}`)
}

console.log(`O salário em 2021 é R$${salary}`)
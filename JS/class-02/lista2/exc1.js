let salary = 1000
let percentual = 0.015

for(let i = 2016; i<=2021;i++){
    if(i>=2018){
        percentual *= 2
    }
    salary += percentual*salary
    console.log(`No final do ano de ${i} o salário está ${salary}, percentual de ${percentual}`)
}

console.log(salary)
function exc1(number){
    if( isNaN(parseFloat(number)) ){
        return('Não foi inserido um número');
    }
    number = number.toString();
    let newNumber = '';
    for(let i = number.length-1; i>=0;i--){
        newNumber += number[i];
    }
    return parseFloat(newNumber);
}


let invertedNumber = exc1(49543);

console.log(invertedNumber);


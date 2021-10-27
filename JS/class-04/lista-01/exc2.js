function exc2(arrayNumeros){
    maior = Math.max(...arrayNumeros);
    menor = Math.min(...arrayNumeros);

    let segundoMenor = maior;
    let segundoMaior = menor;

    for(let i = 0; i<arrayNumeros.length;i++){
        if(arrayNumeros[i]>segundoMaior && arrayNumeros[i]<maior){
            segundoMaior = arrayNumeros[i];
        }
        if(arrayNumeros[i]<segundoMenor && arrayNumeros[i]>menor){
            segundoMenor = arrayNumeros[i];
        }
    }
    if(segundoMenor===segundoMaior){
        console.log(`O segundo maior e o menor é o ${segundoMenor}`);
    } else {
        console.log(`O segundo número maior é ${segundoMaior} e o segundo menor é ${segundoMenor}`);
    }
    
}


let array = [1,3,3,4,6,5];

exc2(array);
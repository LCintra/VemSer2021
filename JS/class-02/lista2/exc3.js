numeroTabuada = parseFloat(prompt('De qual número deseja saber a tabuada?'))

if(isNaN(numeroTabuada)){
    alert('Não foi inserido um número válido')
} else{
    for(i=0;i<=10;i++){
        console.log(`${numeroTabuada}x${i}=${numeroTabuada*i}`)
    }
}




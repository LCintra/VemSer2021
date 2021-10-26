function exc2(array){
    if(typeof array != 'object'){
        return('Não foi inserido um vetor');
        
    }
    for(let i = 0; i<=array.length;i++){
        for(let i2 = 0; i2<=array.length;i2++){
            let aux;
            if(array[i]<array[i2]){
                aux = array[i2];
                array[i2] = array[i];
                array[i] = aux;
            }
        }
    }
    return array;
}

let array = [4,2,6,0,3,1,12,34,56,10,9,50003,2120];


console.log(exc2(array));

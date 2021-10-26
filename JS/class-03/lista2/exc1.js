function exc1(caracter,array){
    filteredArray = array.filter((value)=>{
        return value != caracter;
    })
    console.log(filteredArray);
}

let arrayExemplo = [1,3,4,5,1,5,2,1,3,1,1,1,1,1,1,1,1];

exc1(1,arrayExemplo);

//sem filter

function exc11(caracter,array){
    for(let i = 0; i<=array.length;i++){
        while(array.indexOf(caracter)!=-1){
            array.splice(array.indexOf(caracter),1);
        }
    }
    console.log(array);
}

exc11(1,arrayExemplo);
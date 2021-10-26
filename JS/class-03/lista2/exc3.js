function exc3(array1,array2){
    if(typeof array1 != 'object' || typeof array2 != 'object'){
        return 'Não foi inserido dois arrays';
    }
    return array1.concat(array2);
}

let array1 = [1,2,3];
let array2 = [2,5,'s'];

let newArray = exc3(array1,array2);
console.log(newArray);
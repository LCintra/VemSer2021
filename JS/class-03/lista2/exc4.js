let exerciseArray = []
//a
function addOnArray(item,array){
    array.push(item);
}

//b
function removeLastItem(array){
    array.pop();
}

addOnArray(5,exerciseArray);
addOnArray(3,exerciseArray);
addOnArray(3,exerciseArray);
addOnArray(2,exerciseArray);
addOnArray(6,exerciseArray);

removeLastItem(exerciseArray);
removeLastItem(exerciseArray);

console.log(exerciseArray);

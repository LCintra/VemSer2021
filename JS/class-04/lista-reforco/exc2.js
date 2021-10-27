function exc2(string){
    let contador = 0;
    for(let i=0; i<string.length; i++){
     if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
       contador++
     }
  
    }
    console.log(contador)
  }
  
  
  let stringExemplo = 'vem ser'
  exc2(stringExemplo)
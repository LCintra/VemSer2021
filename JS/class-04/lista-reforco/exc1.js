function exc1(string){
    let arrayString = string.split(' ')
    let maiorString = ''
    for(let i = 0; i<arrayString.length;i++){
        if(arrayString[i].length > maiorString.length){
          maiorString = arrayString[i];
        }
    }
    console.log(maiorString)
  }
  
  let stringExemplo = 'Oi tudo bem com vocês? comigoteste está muito bem'
  
  exc1(stringExemplo)
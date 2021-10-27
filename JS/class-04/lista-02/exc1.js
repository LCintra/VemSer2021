function contaConsoantesVogais(string) {
  if(typeof string != 'string'){
    return 'Parâmetro inválido'
  }
  string = string.toLowerCase()
  stringArray = string.split('')
  let contadorVogais = 0;
  let contadorConsoantes = 0;
  for (let i = 0; i < stringArray.length; i++) {
    if(stringArray[i].charCodeAt() == 97 || stringArray[i].charCodeAt() == 101 || stringArray[i].charCodeAt() == 105 || stringArray[i].charCodeAt() == 111 || stringArray[i].charCodeAt() == 117){
        contadorVogais++
    } else if(stringArray[i].charCodeAt()>=97 && stringArray[i].charCodeAt()<=122){
        contadorConsoantes++
    }
  }
  return `A frase ${string} tem ${contadorVogais} vogais e ${contadorConsoantes} consoantes`;
}

let stringExemplo = 'uma string de exemplo 320320 @!#|';
console.log(contaConsoantesVogais(stringExemplo));

function verificarValidade(data, dias){
  let dataVal = new Date(data);
  let dataRef = new Date();
  
  dataVal.setDate(dataVal.getDate() + parseInt(String(dias).replace("d")));;

  return dataVal <= dataRef;
}

console.log(verificarValidade("2021-12-10T00:00:00.000Z", "100d")); //FALSE = PASSOU DA VALIDADE
console.log(verificarValidade("2021-12-10T00:00:00.000Z", "13d")); //TRUE = AINDA É VALIDO

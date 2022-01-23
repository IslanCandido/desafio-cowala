var pessoa = {
  nome: "Islan",
  idade: "20",
  num_filhos: null,
  cidadania: undefined,
};

function limparObjeto(obj) {
  for (var prop in obj) {
    if (obj[prop] === null || obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

limparObjeto(pessoa); //Entrada: { nome: 'Islan', idade: '20', num_filhos: null, cidadania: undefined }
console.log(pessoa); // Retorno: { nome: 'Islan', idade: '20' }

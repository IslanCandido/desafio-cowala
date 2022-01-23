var pessoas = [
  { nome: "Islan", souEu: true, responsavel: false },
  { nome: "João", souEu: false, responsavel: false },
  { nome: "Camila", souEu: false, responsavel: false },
  { nome: "Mauricio", souEu: false, responsavel: false },
  { nome: "Carlos", souEu: false, responsavel: false },
  { nome: "Julia", souEu: false, responsavel: true },
  { nome: "Fernando", souEu: false, responsavel: false },
  { nome: "Thiago", souEu: false, responsavel: true },
  { nome: "Luan", souEu: false, responsavel: false },
  { nome: "Lorraine", souEu: false, responsavel: false },
  { nome: "Camily", souEu: false, responsavel: true },
  { nome: "Sofia", souEu: false, responsavel: false },
  { nome: "Ana", souEu: false, responsavel: false },
];

function classificar(lista) {
  let pessoas = new Array();
  let pessoasOrdenadas = new Array();
  pessoas = lista;

  //PEGANDO O OBJETO COM PROPRIEDADE "souEu" VERDADEIRA
  //E ADICIONANDO NA LISTA DE ORDENADOS
  let eu = pessoas.filter((a) => {
    return a.souEu == true;
  });
  pessoasOrdenadas.push(eu[0]);

  //PEGANDO SOMENTE OS QUE TEM A PROPRIEDADE "responsavel" VERDADEIRA
  let admins = pessoas.filter((a) => {
    return a.responsavel == true;
  });

  //ORDENANDO EM ORDEM ALFABETICA 
  //E ADICIONANDO NA LISTA DE ORDENADOS
  admins = admins.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  admins.forEach((pessoa) => {
    pessoasOrdenadas.push(pessoa);
  })

  //PEGANDO SOMENTE PESSOAS NORMAIS DO GRUPO
  pessoas = pessoas.filter((a) => {
    return a.responsavel == false && a.souEu == false;
  })

  //ORDENANDO EM ORDEM ALFABETICA 
  //E ADICIONANDO NA LISTA DE OBJETOS
  pessoas = pessoas.sort((a, b) => {
    return a.nome.localeCompare(b.nome);
  });

  pessoas.forEach((pessoa) => {
    pessoasOrdenadas.push(pessoa);
  })

  return pessoasOrdenadas;
}


console.log(classificar(pessoas));

//RETORNO 
/*
[
  { nome: 'Islan', souEu: true, responsavel: false },
  { nome: 'Camily', souEu: false, responsavel: true },
  { nome: 'Julia', souEu: false, responsavel: true },
  { nome: 'Thiago', souEu: false, responsavel: true },
  { nome: 'Ana', souEu: false, responsavel: false },
  { nome: 'Camila', souEu: false, responsavel: false },
  { nome: 'Carlos', souEu: false, responsavel: false },
  { nome: 'Fernando', souEu: false, responsavel: false },
  { nome: 'João', souEu: false, responsavel: false },
  { nome: 'Lorraine', souEu: false, responsavel: false },
  { nome: 'Luan', souEu: false, responsavel: false },
  { nome: 'Mauricio', souEu: false, responsavel: false },
  { nome: 'Sofia', souEu: false, responsavel: false }
]
*/
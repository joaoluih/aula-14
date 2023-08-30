
// Leia o c�digo

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
/*
console.log(minhaFuncao(pessoa, "backender")) Vai ser impresso: false
console.log(minhaFuncao(pessoa, "altura")) vai ser impresso: undefined

// b) Explique o valor impresso no console. Voc� sabe por que isso aconteceu? No "backender" pegou a informação false do objeto pessoa, e no "altura"  fato que nao ter ter o objeto altura fez com que retornace que o valor não foi definido, afinal ele nao existe. */





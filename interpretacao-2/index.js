
// Leia o c�digo

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// a) O que vai ser impresso no console?
/* 
console.log(cachorro) vai ser impresso o objeto inteiro, nome: "Juca", idade:3, raça: "SRD"
console.log(gato) vai ser impresso o objeto inteiro de "cachorro, alterando o nome" nome: "Juba", idade:3, raça: "SRD"
console.log(tartaruga) vai ser impreso o objeto inteiro de gato, alterando as letras do nome, fazendo que a, vire o, nome: "Jubo", idade:3, raça: "SRD"


// b) O que faz a sintaxe dos tr�s pontos antes do nome de um objeto?  Permite que você copie os dados de algum objeto para outro.

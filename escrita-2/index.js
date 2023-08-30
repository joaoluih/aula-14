
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie dois "objetos" diferentes com as seguintes propriedades: nome, idade e profiss�o. 
 * 
 * b) Escreva uma "fun��o" que receba um "objeto" de cada vez e retorne um "array" com as seguintes informa��es:
 * - O valor de "nome".
 * - O numero de caracteres do valor "nome".
 * - O valor de "idade".
 * - O valor de "profiss�o".
 * - O numero de caracteres do valor "profiss�o".
 * 
**/

const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}


const pessoa2 ={
	nome: "Mateus",
	idade: 20,
	profissao: "Estudante"
}


function minhaFuncao(pessoa) {
	let resultado = [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]

	// Desenvolver sua logica

	return resultado
}


console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]


console.log(minhaFuncao(pessoa2))
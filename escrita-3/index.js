
/**
 * 
 * Resolva os passos a seguir
 * 
 * a) Crie uma vari�vel de escopo global que guarde um "array" vazio chamada "carrinho".
 * 
 * b) Crie tr�s novos objetos que representem frutas de um sacol�o. Eles devem ter as seguintes propriedades: nome ("string") e disponibilidade ("boolean" - devem come�ar como "true").
 * 
 * c) Crie uma fun��o que receba um "objeto" fruta por par�metro e coloque-a dentro do "array" de "carrinho". Invoque essa fun��o passando os tr�s objetos criados. Dica: aqui voc� deve usar o m�todo "push()".
 * 
 * d) Imprima a vari�vel "carrinho" e garanta que ela agora seja um "array" preenchido com tr�s objetos.
 * 
**/

let carrinho = []

let fruta1 = {
  nome: "maça",
  disponibilidade: true 
}

let fruta2 = {
  nome: "banana",
  disponibilidade: true
}

let fruta3 = {
  nome: "uva",
  disponibilidade: true
}

let compras = function(produto){
  carrinho.push(produto.nome)
}

compras(fruta1)
compras(fruta2)
compras(fruta3)
console.log(carrinho)
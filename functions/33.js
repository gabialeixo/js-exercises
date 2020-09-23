/* 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console. */

let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['a', 'b', 'c', 'd']
let vetorDouble = [0.45, 0.67, 1.23, 4.56]

let exe01 = vetorInteiro.concat(vetorString, vetorDouble)
let exe02 = vetorString.concat(vetorInteiro, vetorDouble)

console.log(exe01)
console.log(exe02)
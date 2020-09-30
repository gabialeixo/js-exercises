/* 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

const vetores = (vetorA, vetorB) =>{
    vetorB = vetorB.concat(vetorA)
    vetorA = vetorB.splice(0, vetorA.length)
    console.log(vetorA, vetorB)
}

console.log(vetores([1, 2, 3], [4, 5, 6]))
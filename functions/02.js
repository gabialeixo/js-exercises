/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const triangulos = function(a, b, c){
    if(a === b && b === c){
        console.log('Esse é um triângulo Equilátero!')
    } else if (a === b && b != c || a != b && b === c) {
        console.log('Esse é um triângulo Isósceles!')
    } else if (a != b && b != c){
        console.log('Esse é um triângulo Escaleno!')
    }
}

/*triangulos(3, 3, 3)
triangulos(3, 3, 4)
triangulos(1, 2, 3) */

triangulos(7, 2, 3)
triangulos(3, 3, 3)
triangulos(2, 2, 3)
/* 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

const boletim = (codAluno, nota1, nota2, nota3) =>{
    if(nota1 > 4 || nota2 >3 || nota3 >3){
        return 'Nota inválida!'
    }

    if(nota1 + nota2 + nota3 >= 5){
        return `Aluno ${codAluno}, foi APROVADO com média ${nota1 + nota2 + nota3}. Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}.`
    } else{
        return `Aluno ${codAluno}, foi REPROVADO com média ${nota1 + nota2 + nota3}. Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}.`
    }
}

console.log(boletim(1, 2, 1, 1))
console.log(boletim(2, 4, 3, 3))
console.log(boletim(3, 7, 4, 4))
/* 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

const texto = (frase01, frase02) =>{
    if(frase01.length === frase02.length){
        return true
    } else {
        return false
    }
}

console.log(texto('Aleluia Jesus', 'Sera que deu'))
console.log(texto('Gabi', 'Gabi'))
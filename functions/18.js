/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’ */

const numeros = (num) =>{
    switch (num) {
        case 0:
            return 'Zero'            
            break
        case 1:
            return 'Um'
            break
        case 2:
            return 'Dois'
            break
        case 3:
            return 'Três'            
            break
        case 4:
            return 'Quatro'
            break
        case 5:
            return 'Cinco'
            break
        case 6:
            return 'Seis'            
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'            
            break
        case 10:
            return 'Dez'
            break
        default:
            return 'Fora do intervalo!'
            break
    }
}

console.log(numeros(0))
console.log(numeros(1))
console.log(numeros(2))
console.log(numeros(3))
console.log(numeros(4))
console.log(numeros(5))
console.log(numeros(6))
console.log(numeros(7))
console.log(numeros(8))
console.log(numeros(9))
console.log(numeros(10))
console.log(numeros(11))
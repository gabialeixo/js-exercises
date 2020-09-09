/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false */

const divisao = (param) => {
    if(param % 3 === 0){
        return true
    } else {
        return false
    }
}

console.log(divisao(4))
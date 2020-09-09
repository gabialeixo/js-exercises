/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

const feira = (fruta) =>{
    switch(fruta){
        case 'Maçã': 
            return "Não vendemos esta fruta aqui."
            break
        case 'Kiwi':
            return "Estamos com escassez de kiwis!"
            break
        case 'Melancia':
            return "Aqui está, são 3 reais o quilo!"
            break
        default:
            return "Erro"
    }
}

console.log(feira('Maçã'))
console.log(feira('Kiwi'))
console.log(feira('Melancia'))
console.log(feira('Laranja'))
/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130. */

const convenio = (idade) =>{
    let plano = 100
    
    if(idade <= 9){
        plano += 80
        return `O valor do seu plano é de R$${plano}.`
    } else if(idade >= 10 && idade <= 30){
        plano += 50
        return `O valor do seu plano é de R$${plano}.`
    } else if(idade >= 31 && idade <= 60){
        plano += 95
        return `O valor do seu plano é de R$${plano}.`
    } else if(idade >= 61){
        plano += 130
        return `O valor do seu plano é de R$${plano}.`
    }
}

console.log(convenio(5)) //180
console.log(convenio(13)) // 150
console.log(convenio(27)) //150
console.log(convenio(42)) //195
console.log(convenio(70)) //230
console.log(convenio(31)) //195
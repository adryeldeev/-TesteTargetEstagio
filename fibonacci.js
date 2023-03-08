const io = require('console-read-write')
// 0 1 2 3 4 5 6
// 0 1 1 2 3 5 8

const main = async () =>{
    const num = Number(await io.ask('Digite um numero inteiro para calcular o fibonacci: '))

    let soma = 0
    let anterior = 0
    let proximo = 1

    for(let i = 0; i  < num; i++){
      soma =  anterior + proximo
        anterior = proximo
        proximo = soma
    } if(num == anterior){
        console.log('O número faz parte da sequência de Fibonacci')
    } else{
      console.log('O número digitado não faz parte da sequência de Fibonacci')
    }
    io.write(`Fibonacci de ${num} : ${anterior}`)
}

main()
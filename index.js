// # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

let finalPoints = pointsOfHero(60, 9)
let finalRank = rankOfHero(finalPoints)

function pointsOfHero(victorys, defeats) {
    let score = victorys - defeats
    return score
}

function rankOfHero(finalPoints){
    let rank
    
    if(finalPoints < 10){
        rank = 'Ferro'
    }
     else if(finalPoints >= 11 && finalPoints <= 20){
        rank = 'Bronze'
    } else if(finalPoints >= 21 && finalPoints <= 50){
        rank = 'Prata'
    } else if(finalPoints >= 51 && finalPoints <= 80){
        rank = 'Ouro'
    } else if(finalPoints >= 81 && finalPoints <= 90){
        rank = 'Diamante'
    } else if(finalPoints >= 91 && finalPoints <= 100){
        rank = 'Lendário'
    } else if(finalPoints > 100){
        rank = "Imortal"
    } else {
        rank = 'Ghost'
    }
    return rank
}

console.log(`O Herói tem de saldo ${finalPoints} vitótias e está no nível ${finalRank}.`)




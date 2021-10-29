const texto = 'Romário era um excelente jogador\n, mas hoje é um polítíco questionador'

console.log(texto.match(/^r.*r$/gi)) // Problema dotAll
console.log(texto.match(/^r[\s\S]*r$/gi))

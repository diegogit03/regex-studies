const texto = 'De longe avistei o fogo e uma pessoa gritando: FOGOOO!';
const texto2 = 'There is big fog in NYC';

// ? 0 | 1
const regex = /fogo?/gi;

console.log(texto.match(regex));
console.log(texto2.match(regex));

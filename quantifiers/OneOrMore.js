const texto = 'De longe avistei o fogo e uma pessoa gritando: FOGOOO!';
const texto2 = 'There is big fog in NYC';

// + 1 | +
const regex = /fogo+/gi;

console.log(texto.match(regex));
console.log(texto2.match(regex));

const texto3 = 'Os numeros: 0123456789';
console.log(texto3.match(/\d/g));
console.log(texto3.match(/\d+/g));

const texto = 'O joão recebeu 120 milhões apostando 6 9 21 23 45 48.';

console.log(texto.match(/\d{1,2}/g));
console.log(texto.match(/[0-9]{1,2}/g));
console.log(texto.match(/\d{1,}/g));

console.log(texto.match(/[\wõ]{7}/g));

const texto = '1,2,3,a.b c!d?e[f';

console.log(texto.match(/\D/g));
console.log(texto.match(/[^0-3]/g));
console.log(texto.match(/[^\d!\?\[\s,\.]/g));

const texto = 'ABC [abc] a-c 1234';

console.log(texto.match(/[a-c]/g));
console.log(texto.match(/a-c/g));

console.log(texto.match(/[A-z]/g)); // intervalos da tabela UNICODE

// TEM QUE RESPEITAR A TABELA UNICODE
console.log(texto.match(/[Z-a]/g));

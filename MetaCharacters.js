// . ? * + - ^ $ | [ ] { } ( ) \ :

/**
 * Meta caractere:
 * 
 * Um metacaractere é um caractere ou sequência de caracteres com significado especial em 
 * expressões regulares. Os metacaracteres podem ser categorizados conforme seu uso.
 */

const texto = '1,2,3,4,5,6,a.b c!d?e';

const regexComPonto = /\./;
console.log(texto.split(regexComPonto));

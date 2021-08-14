const texto = 'Cpf dos aprovados: 123.567.891-00, 103.285.709-12, 798.612.404-19, abc.def.ghi-jk';

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g));

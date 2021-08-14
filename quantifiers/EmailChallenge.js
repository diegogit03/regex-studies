const texto = 'Os e-mails dos convidados são: fulano@diego.com, fulano2@brasil.com, fulano@email.com.br';

console.log(texto.match(/[\w\d]+@\w+\.\w{2, 4}/g));

var http = require('http');

var server = http.createServer(function(requisicao,resposta){
    var categoria = requisicao.url;
    if(categoria == '/tecnologia'){
        resposta.end('<html><body>pagina tecnologia</body></html>');
    }
    else if(categoria == '/ciencia'){
        resposta.end('<html><body>pagina ciencia</body></html>');
    }
    else{
        resposta.end('<html><body>pagina inicial</body></html>');
    }

    
});

server.listen(3000);

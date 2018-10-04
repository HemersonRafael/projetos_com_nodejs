//require e utilizado para inserir modulos
var express = require('express');
var msg = require('./mod_teste');
var app = express();
var resmsg = msg();

app.set('view engine','ejs');
//express pode ser utilizado para organizar rotas como o exemplo abaixo

app.get('/',function(req,res){
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias',function(req,res){
    res.render("noticias/noticias");
});

app.listen(3000,function(){
    console.log('servidor rodando com express e nodejs');
    console.log("\n");
    console.log(resmsg);
});
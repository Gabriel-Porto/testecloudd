const express = require("express"); //importa o módulo express neste arquivo
const app = express(); //iniciando o express

app.get('/', function(req, res){
    res.send("Olá");
});

//rota com query params
app.get("/consulta/", function(req,res){
    //req --> dados enviados pelo cliente
    var cpf = req.query["cpf"];

    //res --> resposta enviada pelo servidor de volta ao cliente

    if (cpf){
        res.send("retorno consulta: cpf = " + cpf);
    }else{
        res.send("CPF NÃO FOI FORNECIDO");
    }

    //Parte necessária sem o if
    //res.send("retorno consulta: cpf = " + cpf);
    
})

app.listen(process.env.PORT ?? 3000,function(erro){ // cria a aplicação na porta 3000
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log("Servidor Iniciado.");
    }
})

// app.listen(process.env.PORT ?? 3000,function(erro){

    // app.listen(4000,function(erro){ 
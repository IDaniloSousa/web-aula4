const express = require('express');
const app = express();

app.get('/',(req,res) => {
 res.send("Prog. Web - Hello World.");
})

app.get('/produtos',(req,res) => {
    res.send("Prog. Web - Produtos.");
})

const port = 8080;
app.listen(port, (err) => {
    if(err){
        console.log("Erro na Aplicacao");
    }
    console.log(`Aplicacao escutando na porta: ${port}`);
})
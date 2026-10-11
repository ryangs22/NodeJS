const express = require('express');
const server = express();

// http://localhost:3000/hello?nome=Ryan&idade=20
// Query Params = ?nome=Ryan&idade=20

// http://localhost:3000/hello/Ryan/
// Route Params = /hello/:nome

server.get("/hello", (req, res) => {
    const nome = req.query.nome; 

    return res.json({ 
        title: "Hello World",
        message: `Olá, ${nome}, você tem ${req.query.idade} anos! Tudo bem com você?`
    });
});

server.listen(3000);
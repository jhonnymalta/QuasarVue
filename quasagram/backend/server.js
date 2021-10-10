// config express
const express = require('express');
const app = express();

// endpoints
app.get('/posts', (req, res) => {
    res.send("I love Node so Hard!")
})




// server listen 3000 port 
app.listen('3000', () => {
    console.log('Servidor escutando na Porta: 3000')
})
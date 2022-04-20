const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo 19/4/22 22hs')
})

const PORT =process.env.PORT || 3000

app.listen(PORT, function(){
    console.log("Servidor escuchando en el puerto: ", PORT)
})
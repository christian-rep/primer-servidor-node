const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo 19/4/22 22hs')
})

app.listen(3000)
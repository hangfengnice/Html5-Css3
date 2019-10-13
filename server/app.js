const express = require('express')
let app = express()

app.get("/test", (req, res) =>{
  res.cookie('hello', 'world')
  res.send('hello')
})

app.listen(3000)

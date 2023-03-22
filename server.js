const express = require("express")
const bodyParser = require("body-parser")
const port = 3000
const cervejaCampeonato = require("./routes/campeonato.js")
const app = express()
//da

app.use(bodyParser.json())
app.use("/", cervejaCampeonato)

app.listen(port,()=>{
    console.log("Servidor express rodando na porta 3000!")
})
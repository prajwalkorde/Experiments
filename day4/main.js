const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.use(express.static("public"))

app.use((req, res, next) => {
    console.log("middleware one.")
    next()
}).use((req, res, next) => {
    console.log("middleware two.")
    next()
})

app.get('/', (req,res) =>{
    res.send('Hello World')
}).get('/home', (req,res) =>{
    res.send('Hello home')
}).get('/about', (req,res) =>{
    fs.appendFileSync("log.txt", `${Date.now()} is a ${req.method}\n`)
    res.send('Hello about')
})

app.listen(port, () => {
    console.log(`listening to port ${port}`)
})
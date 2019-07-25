require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const prodCtrl = require('./products_controller')

massive(CONNECTION_STRING)
    .then((database) => {
        app.set('db', database)
    })
    .catch((err) => {
        console.log(err)
    })

app.use(express.json())

//testing...
app.get('/api/products', prodCtrl.getAll)
app.get('/api/products/:id', prodCtrl.getOne)
app.put('/api/products/:id', prodCtrl.update)
app.post('/api/products', prodCtrl.create)
app.delete('/api/products/:id', prodCtrl.delete)

app.listen(SERVER_PORT, () => {
    console.log(`Captain's Log #${SERVER_PORT}: We are lost in space...`)
})
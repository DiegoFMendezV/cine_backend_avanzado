const express = require('express')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Server/Routes/router')
// const authMiddleware = require('./Server/Controllers/auth')
const cors = require('cors')

require('dotenv').config()

const port = 3000;

app.use(express.json())
app.use(cors())
// app.use('/api', authMiddleware)
app.use('/api', routes)

//CONEXION A MONGO
const mongoConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Conexión con Mongo DB exitosa')
    }

    catch (err) {
        console.log(err)
    }
}
mongoConnect()

app.listen(port, () => {
    console.log(`Servidor esta en ejecución en http://localhost:${port}`)
})
const express = require('express')
const router = require('./routes')
const conectaNaDB = require('./config/dbConnect.js')

async function startBanco() { 

    const conecxao = await conectaNaDB()

    conecxao.on('error', (erro) => {
        console.log('erro ao conectar no banco', erro)
    })

    conecxao.once('open', () =>{
        console.log('Conexao com db ok')
    })
}

startBanco()

const app = express()
app.use(router)

module.exports = app
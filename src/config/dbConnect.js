const mongoose =  require('mongoose')

async function conectaNaDB (){
    mongoose.connect(process.env.STRING_CONEXAO_DB)
    return mongoose.connection
}

module.exports = conectaNaDB
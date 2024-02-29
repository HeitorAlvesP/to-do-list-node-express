const mongoose =  require('mongoose')

async function conectaNaDB (){
    mongoose.connect(process.env.STRING_CONEXAO_DB) //use sua string de conexão do mongodb
    return mongoose.connection
}

module.exports = conectaNaDB
const mongoose = require('mongoose')

const taksSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    status: { type: String, required: true },
    created_date: { type: Date, default: Date.now  }
}, { versionKey: false }) 

const taks = mongoose.model('tasks', taksSchema)

module.exports = taks
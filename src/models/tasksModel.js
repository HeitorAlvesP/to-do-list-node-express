const mongoose = require('mongoose')

const taksSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
}, { versionKey: false })

const taks = mongoose.model('tasks', taksSchema)

module.exports = taks
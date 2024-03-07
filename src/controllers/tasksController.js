const tasks = require('../models/tasksModel.js')

class TasksControllers{

    static async listartasks (req, res) {
        try {
            const listartasks = await tasks.find({})
            res.status(200).json(listartasks)
        } catch (error) {
            res.status(501).json({  message: `${error.message} - falha na requisição ` })
        }
    }
    static async crearTasks (req, res) {
        try {
            const novaTasks = await tasks.create(req.body)
            res.status(201).json(novaTasks)
        } catch (error) {
            res.status(500).json({ message: `Falha ao criar --- ${error}` })
        }
    }

}

module.exports = TasksControllers
const taks = require('../models/tasksModel')

class TasksControllers{

    static async listartasks (req, res) {
        try {
            const listartasks = await taks.find({})
            res.status(200).json(listartasks)
        } catch (error) {
            res.status(501).json({  message: `${error.message} - falha na requisição ` })
        }
    }

}

module.exports = TasksControllers
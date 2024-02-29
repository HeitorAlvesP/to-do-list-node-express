const express = require('express')
const router = express.Router()
const TasksControllers = require('./controllers/tasksController.js')

router.get('/tasks', TasksControllers.listartasks)

module.exports = router
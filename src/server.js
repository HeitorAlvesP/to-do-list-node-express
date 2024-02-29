require('dotenv').config()
const app = require('./app.js')

const port = process.env.PORT || 3333

app.listen(port, () => console.log('Server running or port ', port))
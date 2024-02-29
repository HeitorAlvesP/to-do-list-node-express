const express = require('express')

const app = express()

app.get('/', (req, res) => {res.status(200).send('Hello word')})

app.listen(3333, () => console.log('Server running or port 3333'))
const express = require('express')
const env = require('dotenv').config()
const cors = require('cors')
const connectDb = require('./config/connectionDb.js')

const app = express()
const PORT = process.env.PORT || 3000

connectDb()
app.use(express.json())
app.use(cors())

app.use('/', require('./routes/user.js'))
app.use('/recipe', require('./routes/recipe.js'))

app.listen(PORT, (err) => {
    console.log(`server is running on port ${PORT}`)
})
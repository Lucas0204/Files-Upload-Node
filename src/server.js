const express = require('express')
const routes = require('./routes')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(
    'mongodb://localhost:27017/uploads', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }, 
    (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('mongo connected..')
        }
    }
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => console.log('server running...'))

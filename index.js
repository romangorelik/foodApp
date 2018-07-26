const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const axios = require('axios')
const router = require('./database/routes.js')



const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/client/dist'))

app.use('/foodsearch', router)

let PORT = 8080
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})

const express = require('express')
const server = express()
const path = require('path')

server.use(express.static('public'))
// server.use('*', )


server.listen(8000, () => {
    console.log('Server is running on the http://localhost:8000')
})
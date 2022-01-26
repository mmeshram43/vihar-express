const exp = require('constants');
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
app.use(express.json());

app.use(express.static('public'))
// Mongo Connection
// const DB = ''
// mongoose.connect(DB).then(
//   res => console.log('Connection Successful')
// ).catch(
//   err => console.log(err)
// )

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()


const db_url = "mongodb://localhost:27017/mydb"
mongoose.connect(db_url)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));




app.use('/api',require('./routes/api'))



const PORT = 1234
app.listen(PORT, ()=>{
  console.log('Server is listening on port ' + PORT)
})



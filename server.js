if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' })
}

const express= require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views' )
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
.catch(e => console.error('Connection error', e.message));
//const db = MongoClient.connection
// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/newDB', {useNewUrlParser: true})
// .catch(e => console.error('Connection error', e.message));
// const db = mongoose.connection
//db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.listen(process.env.PORT || 3000)





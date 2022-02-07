if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: '.env' })
}

const express= require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const authorsRouter = require('./routes/authors')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views' )
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
.catch(e => console.error('Connection error', e.message));


app.use('/', indexRouter)
app.use('/authors', authorsRouter)
app.listen(process.env.PORT || 3000)





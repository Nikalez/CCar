/**
 * Created by Alexandru-PC on 21-Nov-2019.
 */
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').parse()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const carsRouter = require('./routes/cars')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/cars', carsRouter)

app.listen(process.env.PORT || 3000)
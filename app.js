const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const config = require('./config/app')

const exphbs = require('express-handlebars')

if (config.useEnv) require('dotenv-safe').load() // Must load as early as possible

const routes = require('./routes/web')

const app = express()

// view engine setup
const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    helpers: {
        ifeq(a, b, options) {
            if (a === b) return options.fn(this)
            return options.inverse(this)
        },
        toJSON(object) {
            return JSON.stringify(object)
        },
        inc(value, options) {
            return parseInt(value) + 1;
        }
    }
})

app.engine('.hbs', hbs.engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', '.hbs')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'img/jobs.png')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app

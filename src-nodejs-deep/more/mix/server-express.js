const express = require('express')
const exphbs = require('express-handlebars')

// import env variables
require('dotenv').config()

const app = express()
//const port = process.env.PORT
const port = 3000;
const COOKIE = process.env.PROJECT_DOMAIN


//git-hub
const cookieParser = require('cookie-parser')
const expressSession = require('express-session')
const crypto = require('crypto')
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const { stringify } = require('flatted')
const _ = require('underscore')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const hbs = exphbs.create({
	layoutsDir: __dirname + '/views'
})
app.engine('handlebars', hbs.engine)
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')




app.get('/', (req, res) => {
	res.render('main')
})

app.listen(port, () => {
	console.log(`🌏 Server is running at http://localhost:${port}`)
})
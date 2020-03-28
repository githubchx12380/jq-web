const express = require('express')

const app = express()
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});
app.use(require('cors')())

app.use('/assets/',express.static(__dirname + '/../assets'))
app.use('/public/',express.static(__dirname + '/../public'))

require('./Webroutes/router')(app)
app.listen(80,function () {
    console.log('http://127.0.0.1/')
})


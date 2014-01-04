express = require('express')
http = require('http')

app = express()
server = http.createServer(app)
app.use('/flot', express.static(__dirname + '/node_modules/flot'))
app.get('/data', (req, res) ->
    res.sendfile('price.txt')
)
app.get('/', (req, res) ->
    res.render(__dirname + '/visualize.jade')
)
server.listen(4000)
